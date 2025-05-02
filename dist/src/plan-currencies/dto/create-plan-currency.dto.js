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
exports.CreatePlanCurrencyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const e_country_code_iso_2_1 = require("../../enums/e-country-code-iso-2");
class CreatePlanCurrencyDto {
}
exports.CreatePlanCurrencyDto = CreatePlanCurrencyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePlanCurrencyDto.prototype, "planId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'USD',
    }),
    (0, class_validator_1.IsISO4217CurrencyCode)(),
    __metadata("design:type", String)
], CreatePlanCurrencyDto.prototype, "currencyCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10.99,
    }),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    __metadata("design:type", Number)
], CreatePlanCurrencyDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: e_country_code_iso_2_1.ECountryCodeIso2.UnitedStates,
        enum: e_country_code_iso_2_1.ECountryCodeIso2,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(e_country_code_iso_2_1.ECountryCodeIso2),
    __metadata("design:type", String)
], CreatePlanCurrencyDto.prototype, "countryCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10.99,
    }),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    __metadata("design:type", Number)
], CreatePlanCurrencyDto.prototype, "perMonthPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'price_1NtG6dJXJXJXJXJXJXJXJXJX',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 255),
    __metadata("design:type", String)
], CreatePlanCurrencyDto.prototype, "stripePriceId", void 0);
//# sourceMappingURL=create-plan-currency.dto.js.map