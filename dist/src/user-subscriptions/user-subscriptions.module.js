"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSubscriptionsModule = void 0;
const common_1 = require("@nestjs/common");
const user_subscriptions_service_1 = require("./user-subscriptions.service");
const user_subscriptions_controller_1 = require("./user-subscriptions.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_subscription_entity_1 = require("./entities/user-subscription.entity");
const crm_automation_module_1 = require("../crm-automation/crm-automation.module");
const users_module_1 = require("../users/users.module");
const jwt_1 = require("@nestjs/jwt");
const plans_module_1 = require("../plans/plans.module");
let UserSubscriptionsModule = class UserSubscriptionsModule {
};
exports.UserSubscriptionsModule = UserSubscriptionsModule;
exports.UserSubscriptionsModule = UserSubscriptionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_subscription_entity_1.UserSubscription]),
            crm_automation_module_1.CrmAutomationModule,
            users_module_1.UsersModule,
            jwt_1.JwtModule,
            plans_module_1.PlansModule,
        ],
        controllers: [user_subscriptions_controller_1.UserSubscriptionsController],
        providers: [user_subscriptions_service_1.UserSubscriptionsService],
        exports: [user_subscriptions_service_1.UserSubscriptionsService],
    })
], UserSubscriptionsModule);
//# sourceMappingURL=user-subscriptions.module.js.map