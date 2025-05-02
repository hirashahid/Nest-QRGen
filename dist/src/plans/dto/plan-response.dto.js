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
exports.PlanResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PlanResponseDto {
}
exports.PlanResponseDto = PlanResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier of the plan' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PlanResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the plan' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PlanResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the plan' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlanResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price of the plan' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PlanResponseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Duration of the plan' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PlanResponseDto.prototype, "duration_days", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of the plan', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Boolean)
], PlanResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is this the default plan?', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Boolean)
], PlanResponseDto.prototype, "is_default", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Features' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlanResponseDto.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price Per Month' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PlanResponseDto.prototype, "price_per_month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stripe Price ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlanResponseDto.prototype, "stripe_price_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Max QR Codes' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PlanResponseDto.prototype, "max_qr_codes", void 0);
//# sourceMappingURL=plan-response.dto.js.map