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
exports.UpdatePaymentMethodDto = exports.CheckOutDto = exports.ResumeSubscriptionDto = exports.CancelSubscriptionDto = exports.NewSubscriptionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../constants");
const e_country_code_iso_2_1 = require("../../enums/e-country-code-iso-2");
class NewSubscriptionDto {
}
exports.NewSubscriptionDto = NewSubscriptionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'price_1QkPjwIcxYfPVpu4VB7Jp3Ez' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewSubscriptionDto.prototype, "priceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], NewSubscriptionDto.prototype, "planId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: constants_1.EXAMPLE_USER_ID }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], NewSubscriptionDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ert7346' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], NewSubscriptionDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], NewSubscriptionDto.prototype, "discountId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'My Company' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewSubscriptionDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '52464690B' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewSubscriptionDto.prototype, "taxId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewSubscriptionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewSubscriptionDto.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Main Street' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewSubscriptionDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewSubscriptionDto.prototype, "postalCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'New York' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewSubscriptionDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'US' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewSubscriptionDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@example.com' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], NewSubscriptionDto.prototype, "email", void 0);
class CancelSubscriptionDto {
}
exports.CancelSubscriptionDto = CancelSubscriptionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'sub_1R4GNoIcxYfPVpu4sERNkC1h',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CancelSubscriptionDto.prototype, "subscriptionId", void 0);
class ResumeSubscriptionDto {
}
exports.ResumeSubscriptionDto = ResumeSubscriptionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'sub_1R4GNoIcxYfPVpu4sERNkC1h',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResumeSubscriptionDto.prototype, "subscriptionId", void 0);
class CheckOutDto {
}
exports.CheckOutDto = CheckOutDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: constants_1.EXAMPLE_USER_ID,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CheckOutDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: constants_1.EXAMPLE_USER_ID,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CheckOutDto.prototype, "plan_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'US',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckOutDto.prototype, "country_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'USD',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckOutDto.prototype, "currency", void 0);
class UpdatePaymentMethodDto {
}
exports.UpdatePaymentMethodDto = UpdatePaymentMethodDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: constants_1.EXAMPLE_USER_ID,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdatePaymentMethodDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ert7346' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePaymentMethodDto.prototype, "paymentMethod", void 0);
//# sourceMappingURL=subscription.dto.js.map