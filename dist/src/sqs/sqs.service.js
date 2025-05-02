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
var SqsSubscriptionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqsSubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_sqs_1 = require("@ssut/nestjs-sqs");
const constants_1 = require("../constants");
const sqs_queue_events_enum_1 = require("../enums/sqs-queue-events.enum");
const user_subscriptions_service_1 = require("../user-subscriptions/user-subscriptions.service");
const users_service_1 = require("../users/users.service");
let SqsSubscriptionService = SqsSubscriptionService_1 = class SqsSubscriptionService {
    constructor(subscriptionService, usersService) {
        this.subscriptionService = subscriptionService;
        this.usersService = usersService;
        this.logger = new common_1.Logger(SqsSubscriptionService_1.name);
    }
    async handleMessage(message) {
        try {
            const { eventType, data } = JSON.parse(message.Body);
            this.logger.log(`Received ${eventType} message with message id: ${message.MessageId}`);
            let user;
            switch (eventType) {
                case sqs_queue_events_enum_1.ESqsQueueEvents.CREATE_SUBSCRIPTION:
                    user = await this.usersService.findOneByStripeId(data.customerId);
                    data.user_id = user.id;
                    await this.subscriptionService.create(data);
                    break;
                case sqs_queue_events_enum_1.ESqsQueueEvents.UPDATE_USER:
                    user = await this.usersService.findOneByEmail(data.email);
                    await this.usersService.update(user.id, {
                        stripeCustomerId: data.customerId,
                    });
                    break;
                case sqs_queue_events_enum_1.ESqsQueueEvents.UPDATE_SUBSCRIPTION:
                    await this.subscriptionService.update(data.stripe_id, data);
                    break;
                default:
                    this.logger.warn(`Unknown event type: ${eventType}`);
            }
        }
        catch (error) {
            this.logger.error(`Error processing Create Subscription message: ${error.message}`, error.stack);
            throw error;
        }
    }
};
exports.SqsSubscriptionService = SqsSubscriptionService;
__decorate([
    (0, nestjs_sqs_1.SqsMessageHandler)(constants_1.AWS_SQS_QUEUE_NAME, false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SqsSubscriptionService.prototype, "handleMessage", null);
exports.SqsSubscriptionService = SqsSubscriptionService = SqsSubscriptionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_subscriptions_service_1.UserSubscriptionsService,
        users_service_1.UsersService])
], SqsSubscriptionService);
//# sourceMappingURL=sqs.service.js.map