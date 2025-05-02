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
exports.CreateDiscountCodeDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateDiscountCodeDto {
    constructor() {
        this.used = 0;
    }
}
exports.CreateDiscountCodeDto = CreateDiscountCodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'DISC-123',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDiscountCodeDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '20% off',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDiscountCodeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Discount 20% off',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDiscountCodeDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '20',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDiscountCodeDto.prototype, "discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDiscountCodeDto.prototype, "used", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)([0, 1]),
    __metadata("design:type", Number)
], CreateDiscountCodeDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'cupon_123',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDiscountCodeDto.prototype, "stripeCoupon", void 0);
//# sourceMappingURL=create-discount-code.dto.js.map