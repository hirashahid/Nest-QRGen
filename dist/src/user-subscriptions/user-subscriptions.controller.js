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
exports.UserSubscriptionsController = void 0;
const common_1 = require("@nestjs/common");
const user_subscriptions_service_1 = require("./user-subscriptions.service");
const create_user_subscription_dto_1 = require("./dto/create-user-subscription.dto");
const update_user_subscription_dto_1 = require("./dto/update-user-subscription.dto");
const user_subscription_entity_1 = require("./entities/user-subscription.entity");
const swagger_1 = require("@nestjs/swagger");
const authentication_guard_1 = require("../guards/authentication.guard");
let UserSubscriptionsController = class UserSubscriptionsController {
    constructor(userSubscriptionsService) {
        this.userSubscriptionsService = userSubscriptionsService;
    }
    async create(createUserSubscriptionDto) {
        return this.userSubscriptionsService.create(createUserSubscriptionDto);
    }
    async findAll() {
        return this.userSubscriptionsService.findAll();
    }
    async findOne(stripe_id) {
        return this.userSubscriptionsService.findOne(stripe_id);
    }
    async findByUserId(user_id) {
        return this.userSubscriptionsService.findByUserId(user_id);
    }
    async update(stripe_id, updateUserSubscriptionDto) {
        return this.userSubscriptionsService.update(stripe_id, updateUserSubscriptionDto);
    }
    async remove(stripe_id) {
        return this.userSubscriptionsService.remove(stripe_id);
    }
    async cancelSubscription(stripe_id) {
        return this.userSubscriptionsService.cancelSubscription(stripe_id);
    }
    async findActiveCancellableSubscriptions(user_id) {
        return this.userSubscriptionsService.findActiveCancellableSubscriptions(user_id);
    }
};
exports.UserSubscriptionsController = UserSubscriptionsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new User Subscription' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'User Subscription created successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_subscription_dto_1.CreateUserSubscriptionDto]),
    __metadata("design:returntype", Promise)
], UserSubscriptionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all User Subscriptions' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User Subscriptions retrieved successfully',
        type: [user_subscription_entity_1.UserSubscription],
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User Subscriptions not found' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserSubscriptionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':stripe_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a User Subscription by Stripe ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User Subscription retrieved successfully',
        type: user_subscription_entity_1.UserSubscription,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User Subscription not found' }),
    __param(0, (0, common_1.Param)('stripe_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserSubscriptionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('user/:user_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve User Subscriptions by User ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User Subscriptions retrieved successfully',
        type: [user_subscription_entity_1.UserSubscription],
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User Subscriptions not found' }),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserSubscriptionsController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.Patch)(':stripe_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a User Subscription by Stripe ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User Subscription updated successfully',
        type: user_subscription_entity_1.UserSubscription,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User Subscription not found' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    __param(0, (0, common_1.Param)('stripe_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_subscription_dto_1.UpdateUserSubscriptionDto]),
    __metadata("design:returntype", Promise)
], UserSubscriptionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':stripe_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a User Subscription by Stripe ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User Subscription deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User Subscription not found' }),
    __param(0, (0, common_1.Param)('stripe_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserSubscriptionsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':stripe_id/cancel'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancel a User Subscription by Stripe ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User Subscription canceled successfully',
        type: user_subscription_entity_1.UserSubscription,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User Subscription not found' }),
    __param(0, (0, common_1.Param)('stripe_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserSubscriptionsController.prototype, "cancelSubscription", null);
__decorate([
    (0, common_1.Get)('user/:user_id/cancellable'),
    (0, swagger_1.ApiOperation)({
        summary: 'Retrieve active cancellable User Subscriptions by User ID',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User Subscriptions retrieved successfully',
        type: [user_subscription_entity_1.UserSubscription],
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User Subscriptions not found' }),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserSubscriptionsController.prototype, "findActiveCancellableSubscriptions", null);
exports.UserSubscriptionsController = UserSubscriptionsController = __decorate([
    (0, swagger_1.ApiTags)('User Subscriptions'),
    (0, common_1.Controller)('user-subscriptions'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [user_subscriptions_service_1.UserSubscriptionsService])
], UserSubscriptionsController);
//# sourceMappingURL=user-subscriptions.controller.js.map