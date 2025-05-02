"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const stripe_service_1 = require("../stripe/stripe.service");
const helper_1 = require("../../utils/helper");
const users_service_1 = require("../users/users.service");
const user_subscriptions_service_1 = require("../user-subscriptions/user-subscriptions.service");
const crm_automation_service_1 = require("../crm-automation/crm-automation.service");
const email_service_1 = require("../email/email.service");
const discount_codes_service_1 = require("../discount-codes/discount-codes.service");
const user_discounts_service_1 = require("../user-discounts/user-discounts.service");
let SubscriptionService = class SubscriptionService {
    constructor(stripeService, usersService, userSubscriptionsService, crmAutomationService, emailService, discountCodesService, userDiscountService) {
        this.stripeService = stripeService;
        this.usersService = usersService;
        this.userSubscriptionsService = userSubscriptionsService;
        this.crmAutomationService = crmAutomationService;
        this.emailService = emailService;
        this.discountCodesService = discountCodesService;
        this.userDiscountService = userDiscountService;
    }
    async createCustomer(createCustomerDto) {
        const { name, email, address } = createCustomerDto;
        const user = await this.usersService.findOneByEmail(email);
        const customer = await this.stripeService.createCustomer(name, email, address);
        await this.usersService.update(user.id, {
            stripeCustomerId: customer.id,
        });
        return customer;
    }
    async generatePaymentIntent(createPaymentIntentDto, countryCode) {
        try {
            const { userId } = createPaymentIntentDto;
            const user = await this.usersService.findOne(userId);
            if (!user.stripeCustomerId) {
                const customer = await this.createCustomer({
                    email: user.email,
                    name: user.name,
                    address: {
                        postal_code: '',
                        country: countryCode,
                        city: '',
                        address: '',
                    },
                });
                user.stripeCustomerId = customer.id;
                await this.usersService.update(user.id, {
                    stripeCustomerId: customer.id,
                });
            }
            const setupIntent = await this.stripeService.generatePaymentIntent(user?.stripeCustomerId);
            return setupIntent;
        }
        catch (error) {
            throw error;
        }
    }
    async createSubscription(createSubscriptionDto) {
        try {
            const { priceId, userId, paymentMethod, discountId } = createSubscriptionDto;
            const user = await this.usersService.findOne(userId);
            if (!user.stripeCustomerId) {
                const customer = await this.createCustomer({
                    email: user.email,
                    name: user.name,
                    address: {
                        address: createSubscriptionDto.address,
                        city: createSubscriptionDto.city,
                        postal_code: createSubscriptionDto.postalCode,
                        country: createSubscriptionDto.country,
                    },
                });
                user.stripeCustomerId = customer.id;
                await this.usersService.update(user.id, {
                    stripeCustomerId: customer.id,
                });
            }
            const currentSubscription = await this.userSubscriptionsService.findActiveSubscription(user.id);
            let stripeSubscription;
            if (currentSubscription) {
                stripeSubscription = await this.stripeService.createSubscription(user.stripeCustomerId, priceId, paymentMethod, discountId, currentSubscription.stripe_id);
            }
            else {
                stripeSubscription = await this.stripeService.createSubscription(user.stripeCustomerId, priceId, paymentMethod, discountId);
            }
            const filteredSubscription = await (0, helper_1.filterSubscriptionData)(stripeSubscription, this.stripeService);
            const paymentMethodDetails = await this.stripeService.getPaymentMethodDetails(stripeSubscription.default_payment_method);
            const subscriptionDto = {
                user_id: user.id,
                type: 'default',
                stripe_id: stripeSubscription.id,
                stripe_status: stripeSubscription.status,
                stripe_price: stripeSubscription.items.data[0].price.id,
                trial_ends_at: stripeSubscription.trial_end
                    ? new Date(stripeSubscription.trial_end * 1000)
                    : null,
                ends_at: stripeSubscription.current_period_end
                    ? new Date(stripeSubscription.current_period_end * 1000)
                    : null,
                start_at: stripeSubscription.start_date
                    ? new Date(stripeSubscription.start_date * 1000)
                    : null,
                cancelled_at: stripeSubscription.cancel_at
                    ? new Date(stripeSubscription.cancel_at * 1000)
                    : null,
                plan_id: createSubscriptionDto.planId,
                invoice_url: filteredSubscription.latestInvoice?.hostedInvoiceUrl,
                amount: filteredSubscription.latestInvoice?.amountDue,
                currency: filteredSubscription.latestInvoice?.currency,
            };
            await this.usersService.update(user.id, {
                address: createSubscriptionDto?.address,
                postal_code: createSubscriptionDto?.postalCode,
                country_code: createSubscriptionDto?.country,
                city: createSubscriptionDto?.city,
                company_name: createSubscriptionDto?.companyName,
                tax_id: createSubscriptionDto?.taxId,
                expired_at: new Date(stripeSubscription.current_period_end * 1000),
                pm_type: paymentMethodDetails.card_type,
                pm_last_four: paymentMethodDetails.last4,
                subscriptionStatus: stripeSubscription.status,
                trial_ends_at: new Date(stripeSubscription.current_period_end * 1000),
            });
            await this.userSubscriptionsService.create(subscriptionDto);
            return filteredSubscription;
        }
        catch (error) {
            throw error;
        }
    }
    async calculateTax(currency, price, countryCode, address) {
        try {
            const tax = await this.stripeService.calculateTax(currency, price, countryCode, address);
            return tax.tax_amount_exclusive;
        }
        catch (error) {
            throw error;
        }
    }
    async cancelSubscription(cancelSubscriptionDto) {
        try {
            const subs = await this.userSubscriptionsService.findOne(cancelSubscriptionDto.subscriptionId);
            await this.stripeService.cancelSubscription(subs.stripe_id);
            await this.userSubscriptionsService.update(subs.stripe_id, {
                stripe_status: 'cancelled',
                cancelled_at: new Date(),
            });
            await this.usersService.update(subs.user_id, {
                subscriptionStatus: 'cancelled',
            });
            const trigger = await this.crmAutomationService.findTrigger('user-cancelled', 'immediately', 'cancelled');
            if (trigger.length > 0) {
                const user = await this.usersService.findOne(subs.user_id);
                console.log('trigger found');
                if (trigger[0].discount_code_id) {
                    const discountCode = await this.discountCodesService.findOne(trigger[0].discount_code_id);
                    if (discountCode) {
                        await this.userDiscountService.create({
                            code: discountCode.code,
                            discount: discountCode.discount,
                            discountId: discountCode.id,
                            userId: subs.user_id,
                            status: 1,
                            expiresAt: new Date(Date.now() + trigger[0].days * 24 * 60 * 60 * 1000),
                        });
                        await this.emailService.sendTriggerEmail(user.email, trigger[0].email_subject, trigger[0].email_content);
                    }
                }
            }
            return { message: 'Subscription cancelled successfully' };
        }
        catch (error) {
            throw error;
        }
    }
    async resumeSubscription(resumeSubscriptionDto) {
        try {
            const subs = await this.userSubscriptionsService.findOne(resumeSubscriptionDto.subscriptionId);
            const canceledStripeSubscription = await this.stripeService.resumeSubscription(subs.stripe_id);
            await this.userSubscriptionsService.update(subs.stripe_id, {
                stripe_status: canceledStripeSubscription.status,
                cancelled_at: null,
            });
            return { message: 'Subscription resumed successfully' };
        }
        catch (error) {
            throw error;
        }
    }
    async getAllCoupons() {
        try {
            const coupons = await this.stripeService.getAllCoupons();
            return { success: true, data: coupons.data };
        }
        catch (error) {
            throw new Error(`Failed to retrieve coupons: ${error.message}`);
        }
    }
    async retrieveLatestInvoice(invoiceId) {
        try {
            return await this.stripeService.retrieveLatestInvoice(invoiceId);
        }
        catch (error) {
            throw error;
        }
    }
    async updatePaymentMethod(userId, paymentMethodId) {
        try {
            const user = await this.usersService.findOne(userId);
            const paymentMethod = await this.stripeService.updatePaymentMethod(user.stripeCustomerId, paymentMethodId);
            await this.usersService.update(user.id, {
                pm_type: paymentMethod.card_type,
                pm_last_four: paymentMethod.last4,
            });
            return await this.usersService.findOne(userId);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.SubscriptionService = SubscriptionService;
exports.SubscriptionService = SubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [stripe_service_1.StripeService,
        users_service_1.UsersService,
        user_subscriptions_service_1.UserSubscriptionsService,
        crm_automation_service_1.CrmAutomationService,
        email_service_1.EmailService,
        discount_codes_service_1.DiscountCodesService,
        user_discounts_service_1.UserDiscountsService])
], SubscriptionService);
//# sourceMappingURL=subscription.service.js.map