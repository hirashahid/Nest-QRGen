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
exports.AnalyticsPublicDto = exports.AnalyticsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const period_enum_1 = require("../../enums/period.enum");
class AnalyticsDto {
}
exports.AnalyticsDto = AnalyticsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], AnalyticsDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1, 2, 3], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], AnalyticsDto.prototype, "qr_code_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1, 2, 3], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], AnalyticsDto.prototype, "folderIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-02-01T00:00:00.000Z', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AnalyticsDto.prototype, "date_from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-02-10T23:59:59.999Z', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AnalyticsDto.prototype, "date_to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['United States', 'Canada'], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], AnalyticsDto.prototype, "countries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Windows', 'MacOS', 'Android'], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], AnalyticsDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: period_enum_1.Period.DAY, enum: period_enum_1.Period, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(period_enum_1.Period),
    __metadata("design:type", String)
], AnalyticsDto.prototype, "period", void 0);
class AnalyticsPublicDto {
}
exports.AnalyticsPublicDto = AnalyticsPublicDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1, 2, 3], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], AnalyticsPublicDto.prototype, "qr_code_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1, 2, 3], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], AnalyticsPublicDto.prototype, "folderIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-02-01T00:00:00.000Z', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AnalyticsPublicDto.prototype, "date_from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-02-10T23:59:59.999Z', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], AnalyticsPublicDto.prototype, "date_to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['United States', 'Canada'], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], AnalyticsPublicDto.prototype, "countries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Windows', 'MacOS', 'Android'], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], AnalyticsPublicDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: period_enum_1.Period.DAY, enum: period_enum_1.Period, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(period_enum_1.Period),
    __metadata("design:type", String)
], AnalyticsPublicDto.prototype, "period", void 0);
//# sourceMappingURL=analytics.dto.js.map