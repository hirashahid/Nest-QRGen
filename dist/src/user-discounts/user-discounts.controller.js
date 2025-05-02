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
exports.UserDiscountsController = void 0;
const common_1 = require("@nestjs/common");
const user_discounts_service_1 = require("./user-discounts.service");
const discount_codes_service_1 = require("../discount-codes/discount-codes.service");
const create_user_discount_dto_1 = require("./dto/create-user-discount.dto");
const update_user_discount_dto_1 = require("./dto/update-user-discount.dto");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("../users/users.service");
const authentication_guard_1 = require("../guards/authentication.guard");
let UserDiscountsController = class UserDiscountsController {
    constructor(userDiscountsService, discountCodesService, usersService) {
        this.userDiscountsService = userDiscountsService;
        this.discountCodesService = discountCodesService;
        this.usersService = usersService;
    }
    async create(createUserDiscountDto) {
        const discountCode = await this.discountCodesService.findOne(createUserDiscountDto.discount);
        if (!discountCode) {
            throw new common_1.NotFoundException(`Discount code ${createUserDiscountDto.discount} is invalid`);
        }
        const now = new Date();
        const sevenDaysLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        createUserDiscountDto.code = discountCode.stripeCoupon;
        createUserDiscountDto.discount = discountCode.discount;
        createUserDiscountDto.expiresAt = sevenDaysLater;
        createUserDiscountDto.status = 1;
        return this.userDiscountsService.create(createUserDiscountDto);
    }
    findAll() {
        return this.userDiscountsService.findAll();
    }
    findOne(id) {
        return this.userDiscountsService.findOne(+id);
    }
    findByUserId(userId) {
        return this.userDiscountsService.findByUserId(+userId);
    }
    async findByStripeId(stripeId) {
        const user = await this.usersService.findOneByStripeId(stripeId);
        return this.userDiscountsService.findByUserId(user.id);
    }
    findActiveDiscounts(userId) {
        return this.userDiscountsService.findActiveDiscounts(+userId);
    }
    update(id, updateUserDiscountDto) {
        return this.userDiscountsService.update(+id, updateUserDiscountDto);
    }
    remove(id) {
        return this.userDiscountsService.remove(+id);
    }
};
exports.UserDiscountsController = UserDiscountsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new user discount' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'User discount created successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_discount_dto_1.CreateUserDiscountDto]),
    __metadata("design:returntype", Promise)
], UserDiscountsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all user discounts' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User discounts retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User discounts not found' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserDiscountsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a user discount by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User discount retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User discount not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserDiscountsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all user discounts by user ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User discounts retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User discounts not found' }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserDiscountsController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.Get)('user/get-by-stripe-id/:stripeId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user discount by stripe ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User discounts retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User discounts not found' }),
    __param(0, (0, common_1.Param)('stripeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserDiscountsController.prototype, "findByStripeId", null);
__decorate([
    (0, common_1.Get)('user/:userId/active'),
    (0, swagger_1.ApiOperation)({ summary: 'Get active user discounts by user ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Active user discounts retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Active user discounts not found' }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserDiscountsController.prototype, "findActiveDiscounts", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a user discount by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User discount updated successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User discount not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_discount_dto_1.UpdateUserDiscountDto]),
    __metadata("design:returntype", void 0)
], UserDiscountsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a user discount by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User discount deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User discount not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserDiscountsController.prototype, "remove", null);
exports.UserDiscountsController = UserDiscountsController = __decorate([
    (0, swagger_1.ApiTags)('User Discounts'),
    (0, common_1.Controller)('user-discounts'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [user_discounts_service_1.UserDiscountsService,
        discount_codes_service_1.DiscountCodesService,
        users_service_1.UsersService])
], UserDiscountsController);
//# sourceMappingURL=user-discounts.controller.js.map