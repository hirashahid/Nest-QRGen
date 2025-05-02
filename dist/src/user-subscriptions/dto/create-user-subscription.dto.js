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
exports.CreateUserSubscriptionDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateUserSubscriptionDto {
}
exports.CreateUserSubscriptionDto = CreateUserSubscriptionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUserSubscriptionDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '30 Day Plan' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserSubscriptionDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3234fdgd45453gfh56545' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserSubscriptionDto.prototype, "stripe_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'active' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserSubscriptionDto.prototype, "stripe_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 230 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserSubscriptionDto.prototype, "stripe_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-12-12 08:00:00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateUserSubscriptionDto.prototype, "trial_ends_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-12-12 08:00:00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateUserSubscriptionDto.prototype, "ends_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-12-12 08:00:00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateUserSubscriptionDto.prototype, "start_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-12-12 08:00:00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateUserSubscriptionDto.prototype, "cancelled_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUserSubscriptionDto.prototype, "plan_id", void 0);
//# sourceMappingURL=create-user-subscription.dto.js.map