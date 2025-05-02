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
exports.DiscountCodesController = void 0;
const common_1 = require("@nestjs/common");
const discount_codes_service_1 = require("./discount-codes.service");
const create_discount_code_dto_1 = require("./dto/create-discount-code.dto");
const update_discount_code_dto_1 = require("./dto/update-discount-code.dto");
const swagger_1 = require("@nestjs/swagger");
const discount_code_entity_1 = require("./entities/discount-code.entity");
let DiscountCodesController = class DiscountCodesController {
    constructor(discountCodesService) {
        this.discountCodesService = discountCodesService;
    }
    create(createDiscountCodeDto) {
        return this.discountCodesService.create(createDiscountCodeDto);
    }
    findAll() {
        return this.discountCodesService.findAll();
    }
    findOne(id) {
        return this.discountCodesService.findOne(+id);
    }
    findByCode(code) {
        return this.discountCodesService.findByCode(code);
    }
    update(id, updateDiscountCodeDto) {
        return this.discountCodesService.update(+id, updateDiscountCodeDto);
    }
    remove(id) {
        return this.discountCodesService.remove(+id);
    }
    validateDiscountCode(code) {
        return this.discountCodesService.validateDiscountCode(code);
    }
};
exports.DiscountCodesController = DiscountCodesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new discount code' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Discount code created successfully',
        type: create_discount_code_dto_1.CreateDiscountCodeDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_discount_code_dto_1.CreateDiscountCodeDto]),
    __metadata("design:returntype", void 0)
], DiscountCodesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all discount codes' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Discount codes retrieved successfully',
        type: [discount_code_entity_1.DiscountCode],
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No discount codes found' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiscountCodesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a discount code by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Discount code retrieved successfully',
        type: discount_code_entity_1.DiscountCode,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Discount code not found' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscountCodesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('code/:code'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a discount code by code' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Discount code retrieved successfully',
        type: discount_code_entity_1.DiscountCode,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Discount code not found' }),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscountCodesController.prototype, "findByCode", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a discount code by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Discount code updated successfully',
        type: update_discount_code_dto_1.UpdateDiscountCodeDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Discount code not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_discount_code_dto_1.UpdateDiscountCodeDto]),
    __metadata("design:returntype", void 0)
], DiscountCodesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a discount code by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Discount code deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Discount code not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscountCodesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('validate/:code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscountCodesController.prototype, "validateDiscountCode", null);
exports.DiscountCodesController = DiscountCodesController = __decorate([
    (0, swagger_1.ApiTags)('Discount Codes'),
    (0, common_1.Controller)('discount-codes'),
    __metadata("design:paramtypes", [discount_codes_service_1.DiscountCodesService])
], DiscountCodesController);
//# sourceMappingURL=discount-codes.controller.js.map