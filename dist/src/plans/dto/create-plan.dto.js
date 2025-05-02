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
exports.CreatePlanDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePlanDto {
}
exports.CreatePlanDto = CreatePlanDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the plan', example: 'Pro Plan' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of the plan',
        example: 'This plan offers premium features.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price of the plan', example: 29.99 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePlanDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price Currency', example: 'usd' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Duration of the plan in days', example: 30 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePlanDto.prototype, "durationInDays", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of the plan', example: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePlanDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this the default plan?',
        example: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePlanDto.prototype, "isDefault", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Plan features as an object containing feature names and details',
        example: {
            customBranding: true,
            analytics: true,
            support: 'premium',
            storageLimit: '50GB',
        },
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePlanDto.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price Per Month', example: 9.99 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePlanDto.prototype, "pricePerMonth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Stripe Price ID',
        example: 'price_1JXbY2Etxxxxxxxx',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "stripePriceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Maximum QR Codes allowed', example: 100 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePlanDto.prototype, "maxQrCodes", void 0);
//# sourceMappingURL=create-plan.dto.js.map