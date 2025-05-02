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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionController = void 0;
const common_1 = require("@nestjs/common");
const subscription_service_1 = require("./subscription.service");
const swagger_1 = require("@nestjs/swagger");
const subscription_dto_1 = require("./dto/subscription.dto");
const subscription_dto_2 = require("./dto/subscription.dto");
const calculate_tax_dto_1 = require("./dto/calculate-tax.dto");
const create_customer_dto_1 = require("./dto/create-customer.dto");
const plans_service_1 = require("../plans/plans.service");
const user_discounts_service_1 = require("../user-discounts/user-discounts.service");
const discount_codes_service_1 = require("../discount-codes/discount-codes.service");
let SubscriptionController = class SubscriptionController {
    constructor(subscriptionService, planService, userDiscountsService, discountCodesService) {
        this.subscriptionService = subscriptionService;
        this.planService = planService;
        this.userDiscountsService = userDiscountsService;
        this.discountCodesService = discountCodesService;
    }
    async createCustomer(createCustomerDto) {
        return await this.subscriptionService.createCustomer(createCustomerDto);
    }
    async checkout(checkOutDto) {
        const plan = await this.planService.getPlanCurrenciesData(checkOutDto.country_code, checkOutDto?.plan_id);
        const amount = plan?.price * 100;
        const currency = checkOutDto.currency;
        const countryCode = checkOutDto.country_code;
        const userId = checkOutDto.user_id;
        const intent = await this.subscriptionService.generatePaymentIntent({
            amount,
            currency,
            userId,
        }, countryCode);
        let discountPercentage = 0;
        let discountStripeId = '';
        const userDiscount = await this.userDiscountsService.findActiveDiscounts(userId);
        if (userDiscount.length) {
            const discountCode = await this.discountCodesService.findOne(userDiscount[0].discountId);
            discountStripeId = discountCode.stripeCoupon;
            discountPercentage = userDiscount[0].discount;
        }
        const tax = await this.subscriptionService.calculateTax(currency, amount, countryCode);
        const response = {
            plan: plan,
            tax: tax,
            intent: intent,
            discount: {
                discountPercent: discountPercentage,
                discountStripeId: discountStripeId,
            },
        };
        return response;
    }
    async calculateTax(calculateTaxDto) {
        const plan = await this.planService.getPlanCurrenciesData(calculateTaxDto.country_code, calculateTaxDto.plan_id);
        const amount = plan.price * 100;
        let discountPercentage = 0;
        let discountStripeId = '';
        const userDiscount = await this.userDiscountsService.findActiveDiscounts(calculateTaxDto.user_id);
        if (userDiscount.length) {
            const discountCode = await this.discountCodesService.findOne(userDiscount[0].discountId);
            discountStripeId = discountCode.stripeCoupon;
            discountPercentage = userDiscount[0].discount;
        }
        const tax = await this.subscriptionService.calculateTax(calculateTaxDto.currency, amount, calculateTaxDto.country_code, calculateTaxDto.address);
        const response = {
            plan: plan,
            tax: tax,
            discount: {
                discountPercent: discountPercentage,
                discountStripeId: discountStripeId,
            },
        };
        return response;
    }
    async createSubscription(newSubscriptionDto) {
        return await this.subscriptionService.createSubscription(newSubscriptionDto);
    }
    async cancelSubscription(cancelSubscriptionDto) {
        return await this.subscriptionService.cancelSubscription(cancelSubscriptionDto);
    }
    async resumeSubscription(resumeSubscriptionDto) {
        return await this.subscriptionService.resumeSubscription(resumeSubscriptionDto);
    }
    async getCoupons() {
        return await this.subscriptionService.getAllCoupons();
    }
    async updatePaymentMethod(updatePaymentMethodDto) {
        return await this.subscriptionService.updatePaymentMethod(updatePaymentMethodDto.user_id, updatePaymentMethodDto.paymentMethod);
    }
};
exports.SubscriptionController = SubscriptionController;
__decorate([
    (0, common_1.Post)('create-customer'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new customer in Stripe' }),
    (0, swagger_1.ApiBody)({ type: create_customer_dto_1.CreateCustomerDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Customer successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "createCustomer", null);
__decorate([
    (0, common_1.Post)('checkout'),
    (0, swagger_1.ApiOperation)({ summary: 'Checkout page' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'checkout page data.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_dto_1.CheckOutDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "checkout", null);
__decorate([
    (0, common_1.Post)('calculate-tax'),
    (0, swagger_1.ApiOperation)({ summary: 'Calculate Tax' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Tax calculated successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calculate_tax_dto_1.CalculateTaxUpdatedDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "calculateTax", null);
__decorate([
    (0, common_1.Post)('subscription/new'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new subscription' }),
    (0, swagger_1.ApiBody)({ type: subscription_dto_2.NewSubscriptionDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Subscription successfully created.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_dto_2.NewSubscriptionDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "createSubscription", null);
__decorate([
    (0, common_1.Post)('subscription/cancel'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancel an existing subscription' }),
    (0, swagger_1.ApiBody)({ type: subscription_dto_2.CancelSubscriptionDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Subscription successfully canceled.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_dto_2.CancelSubscriptionDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "cancelSubscription", null);
__decorate([
    (0, common_1.Post)('subscription/resume'),
    (0, swagger_1.ApiOperation)({ summary: 'Resume a paused subscription' }),
    (0, swagger_1.ApiBody)({ type: subscription_dto_2.ResumeSubscriptionDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Subscription successfully resumed.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_dto_2.ResumeSubscriptionDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "resumeSubscription", null);
__decorate([
    (0, common_1.Get)('coupons'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all coupons from Stripe' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Coupons retrieved successfully.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "getCoupons", null);
__decorate([
    (0, common_1.Post)('update-payment-method'),
    (0, swagger_1.ApiOperation)({ summary: 'Update payment method' }),
    (0, swagger_1.ApiBody)({ type: subscription_dto_1.UpdatePaymentMethodDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Payment method updated successfully.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_dto_1.UpdatePaymentMethodDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "updatePaymentMethod", null);
exports.SubscriptionController = SubscriptionController = __decorate([
    (0, swagger_1.ApiTags)('Stripe'),
    (0, common_1.Controller)('stripe'),
    __metadata("design:paramtypes", [subscription_service_1.SubscriptionService,
        plans_service_1.PlansService,
        user_discounts_service_1.UserDiscountsService,
        discount_codes_service_1.DiscountCodesService])
], SubscriptionController);
//# sourceMappingURL=subscription.controller.js.map