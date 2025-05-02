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
exports.StripeController = void 0;
const common_1 = require("@nestjs/common");
const stripe_service_1 = require("./stripe.service");
const swagger_1 = require("@nestjs/swagger");
const stripe_events_enum_1 = require("../enums/stripe-events.enum");
const user_subscriptions_service_1 = require("../user-subscriptions/user-subscriptions.service");
const helper_1 = require("../../utils/helper");
const users_service_1 = require("../users/users.service");
let StripeController = class StripeController {
    constructor(stripeService, subscriptionService, usersService) {
        this.stripeService = stripeService;
        this.subscriptionService = subscriptionService;
        this.usersService = usersService;
    }
    async handleWebhook(req, res) {
        const signature = req.headers['stripe-signature'];
        try {
            const event = this.stripeService.constructEvent(req.rawBody, signature);
            switch (event.type) {
                case stripe_events_enum_1.EStripeEvents.SUBSCRIPTION_DELETED:
                    break;
                case stripe_events_enum_1.EStripeEvents.SUBSCRIPTION_UPDATED:
                    const stripeSubscription = event.data.object;
                    const sub = await this.subscriptionService.findOne(stripeSubscription.id);
                    const filteredSubscription = await (0, helper_1.filterSubscriptionData)(stripeSubscription, this.stripeService);
                    const subscriptionDto = {
                        stripe_status: stripeSubscription.status,
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
                        invoice_url: filteredSubscription.latestInvoice.hostedInvoiceUrl,
                        amount: filteredSubscription.latestInvoice.amountDue,
                        currency: filteredSubscription.latestInvoice.currency,
                    };
                    await this.subscriptionService.update(stripeSubscription.id, subscriptionDto);
                    await this.usersService.update(sub.user_id, {
                        expired_at: new Date(stripeSubscription.current_period_end * 1000),
                        subscriptionStatus: stripeSubscription.status,
                        trial_ends_at: new Date(stripeSubscription.current_period_end * 1000),
                    });
                    break;
                default:
                    console.log(`Unhandled event type: ${event.type}`);
            }
            res.status(common_1.HttpStatus.OK).send('Webhook received');
        }
        catch (error) {
            console.error('🚨 Error handling webhook:', error.message);
            res.status(common_1.HttpStatus.BAD_REQUEST).send('Webhook error');
        }
    }
};
exports.StripeController = StripeController;
__decorate([
    (0, common_1.Post)('webhook'),
    (0, swagger_1.ApiExcludeEndpoint)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StripeController.prototype, "handleWebhook", null);
exports.StripeController = StripeController = __decorate([
    (0, common_1.Controller)('stripe'),
    __metadata("design:paramtypes", [stripe_service_1.StripeService,
        user_subscriptions_service_1.UserSubscriptionsService,
        users_service_1.UsersService])
], StripeController);
//# sourceMappingURL=stripe.controller.js.map