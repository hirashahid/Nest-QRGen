"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModule = void 0;
const common_1 = require("@nestjs/common");
const subscription_service_1 = require("./subscription.service");
const subscription_controller_1 = require("./subscription.controller");
const typeorm_1 = require("@nestjs/typeorm");
const stripe_module_1 = require("../stripe/stripe.module");
const axios_1 = require("@nestjs/axios");
const jwt_1 = require("@nestjs/jwt");
const users_module_1 = require("../users/users.module");
const plans_module_1 = require("../plans/plans.module");
const user_subscriptions_module_1 = require("../user-subscriptions/user-subscriptions.module");
const plan_currencies_module_1 = require("../plan-currencies/plan-currencies.module");
const user_discounts_module_1 = require("../user-discounts/user-discounts.module");
const discount_codes_module_1 = require("../discount-codes/discount-codes.module");
const crm_automation_module_1 = require("../crm-automation/crm-automation.module");
const email_module_1 = require("../email/email.module");
let SubscriptionModule = class SubscriptionModule {
};
exports.SubscriptionModule = SubscriptionModule;
exports.SubscriptionModule = SubscriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([]),
            stripe_module_1.StripeModule.forRootAsync(),
            users_module_1.UsersModule,
            plans_module_1.PlansModule,
            user_subscriptions_module_1.UserSubscriptionsModule,
            plan_currencies_module_1.PlanCurrenciesModule,
            user_discounts_module_1.UserDiscountsModule,
            discount_codes_module_1.DiscountCodesModule,
            axios_1.HttpModule,
            jwt_1.JwtModule,
            crm_automation_module_1.CrmAutomationModule,
            email_module_1.EmailModule,
            discount_codes_module_1.DiscountCodesModule,
            user_discounts_module_1.UserDiscountsModule,
        ],
        controllers: [subscription_controller_1.SubscriptionController],
        providers: [subscription_service_1.SubscriptionService],
        exports: [subscription_service_1.SubscriptionService],
    })
], SubscriptionModule);
//# sourceMappingURL=subscription.module.js.map