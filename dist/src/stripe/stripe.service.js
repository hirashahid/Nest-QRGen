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
exports.StripeService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
const stripe_1 = require("stripe");
let StripeService = class StripeService {
    constructor() {
        this.stripe = new stripe_1.default(process.env.STRIPE_SECRET, {
            apiVersion: constants_1.STRIPE_API_VERSION,
        });
        this.webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    }
    constructEvent(payload, signature) {
        if (!this.webhookSecret) {
            throw new Error('Stripe webhook secret is not configured.');
        }
        try {
            const event = this.stripe.webhooks.constructEvent(payload, signature, this.webhookSecret);
            return event;
        }
        catch (error) {
            console.log(error);
            throw new Error('Invalid Stripe webhook signature');
        }
    }
    async createCustomer(name, email, address) {
        try {
            return await this.stripe.customers.create({
                name,
                email,
                address: {
                    line1: address.address,
                    city: address.city,
                    state: '',
                    postal_code: address.postal_code,
                    country: address.country,
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async calculateTax(currency, amount, countryCode, address) {
        try {
            const taxCalculation = await this.stripe.tax.calculations.create({
                currency,
                customer_details: {
                    address: {
                        line1: address?.address,
                        city: address?.city,
                        state: '',
                        postal_code: address?.postal_code || '10001',
                        country: address?.country || countryCode,
                    },
                    address_source: constants_1.STRIPE_ADDRESS_SOURCE,
                },
                line_items: [
                    {
                        amount: amount,
                        reference: constants_1.STRIPE_LINE_ITEMS_REFERENCE,
                    },
                ],
            });
            return taxCalculation;
        }
        catch (error) {
            throw error;
        }
    }
    async generatePaymentIntent(customerId) {
        return this.stripe.setupIntents.create({
            customer: customerId,
        });
    }
    async getPaymentMethodDetails(paymentMethodId) {
        try {
            const paymentMethod = await this.stripe.paymentMethods.retrieve(paymentMethodId);
            return {
                card_type: paymentMethod.card.brand,
                last4: paymentMethod.card.last4,
            };
        }
        catch (error) {
            console.error('Error fetching payment method details:', error);
            throw error;
        }
    }
    async createSubscription(customerId, priceId, paymentMethodId, discountId, subscriptionId) {
        if (!paymentMethodId) {
            const customer = (await this.stripe.customers.retrieve(customerId));
            paymentMethodId = customer.invoice_settings
                ?.default_payment_method;
            if (!paymentMethodId) {
                throw new common_1.NotFoundException('No payment method found');
            }
        }
        await this.stripe.paymentMethods.attach(paymentMethodId, {
            customer: customerId,
        });
        await this.stripe.customers.update(customerId, {
            invoice_settings: { default_payment_method: paymentMethodId },
        });
        let periodEndsAt;
        if (subscriptionId) {
            const currentSub = await this.getSubscriptionById(subscriptionId);
            periodEndsAt = currentSub.current_period_end;
        }
        return this.stripe.subscriptions.create({
            customer: customerId,
            items: [
                {
                    price: priceId,
                    quantity: 1,
                    ...(discountId ? { discounts: [{ coupon: discountId }] } : {}),
                },
            ],
            default_payment_method: paymentMethodId,
            ...(periodEndsAt
                ? { billing_cycle_anchor: periodEndsAt, proration_behavior: 'none' }
                : {}),
        });
    }
    async updatePaymentMethod(customerId, paymentMethodId) {
        try {
            await this.stripe.paymentMethods.attach(paymentMethodId, {
                customer: customerId,
            });
            await this.stripe.customers.update(customerId, {
                invoice_settings: { default_payment_method: paymentMethodId },
            });
            return await this.getPaymentMethodDetails(paymentMethodId);
        }
        catch (error) {
            throw error;
        }
    }
    async cancelSubscription(subscriptionId) {
        return this.stripe.subscriptions.update(subscriptionId, {
            cancel_at_period_end: true,
        });
    }
    async resumeSubscription(subscriptionId) {
        return this.stripe.subscriptions.update(subscriptionId, {
            cancel_at_period_end: false,
        });
    }
    async getSubscriptionById(id) {
        return await this.stripe.subscriptions.retrieve(id);
    }
    async listSubscriptions(customerId) {
        return this.stripe.subscriptions.list({
            customer: customerId,
            status: 'all',
        });
    }
    async listPaymentMethods(customerId) {
        return this.stripe.customers.listPaymentMethods(customerId, {
            type: 'card',
        });
    }
    async listPlans() {
        return this.stripe.prices.list({
            active: true,
            type: 'recurring',
            expand: ['data.product'],
        });
    }
    async getAllCoupons() {
        return await this.stripe.coupons.list();
    }
    async retrieveLatestInvoice(invoiceId) {
        return this.stripe.invoices.retrieve(invoiceId);
    }
};
exports.StripeService = StripeService;
exports.StripeService = StripeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StripeService);
//# sourceMappingURL=stripe.service.js.map