"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqsConsumerModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sqs_service_1 = require("./sqs.service");
const nestjs_sqs_1 = require("@ssut/nestjs-sqs");
const user_subscriptions_module_1 = require("../user-subscriptions/user-subscriptions.module");
const constants_1 = require("../constants");
const users_module_1 = require("../users/users.module");
let SqsConsumerModule = class SqsConsumerModule {
};
exports.SqsConsumerModule = SqsConsumerModule;
exports.SqsConsumerModule = SqsConsumerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_subscriptions_module_1.UserSubscriptionsModule,
            users_module_1.UsersModule,
            nestjs_sqs_1.SqsModule.registerAsync({
                useFactory: (configService) => {
                    return {
                        consumers: [
                            {
                                name: constants_1.AWS_SQS_QUEUE_NAME,
                                queueUrl: configService.get('AWS_SQS_QUEUE_URL'),
                                region: configService.get('AWS_REGION'),
                            },
                        ],
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [sqs_service_1.SqsSubscriptionService],
    })
], SqsConsumerModule);
//# sourceMappingURL=sqs.module.js.map