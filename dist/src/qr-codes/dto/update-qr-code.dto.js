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
exports.BulkDeleteQrCodeDto = exports.UpdateQrCodeNewDto = exports.UpdateQrCodeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_qr_code_dto_1 = require("./create-qr-code.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class UpdateQrCodeDto extends (0, swagger_1.PartialType)(create_qr_code_dto_1.CreateQrCodeDto) {
}
exports.UpdateQrCodeDto = UpdateQrCodeDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateQrCodeDto.prototype, "id", void 0);
class UpdateQrCodeNewDto {
}
exports.UpdateQrCodeNewDto = UpdateQrCodeNewDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateQrCodeNewDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'static' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQrCodeNewDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateQrCodeNewDto.prototype, "qr_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateQrCodeNewDto.prototype, "folder_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Name of the QR Code' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQrCodeNewDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: create_qr_code_dto_1.ContentDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_qr_code_dto_1.ContentDto),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", create_qr_code_dto_1.ContentDto)
], UpdateQrCodeNewDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: create_qr_code_dto_1.ContentDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_qr_code_dto_1.ContentDto),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", create_qr_code_dto_1.ContentDto)
], UpdateQrCodeNewDto.prototype, "style", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: create_qr_code_dto_1.ScheduleDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_qr_code_dto_1.ScheduleDto),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", create_qr_code_dto_1.ScheduleDto)
], UpdateQrCodeNewDto.prototype, "schedule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: create_qr_code_dto_1.StatsDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_qr_code_dto_1.StatsDto),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", create_qr_code_dto_1.StatsDto)
], UpdateQrCodeNewDto.prototype, "stats", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 100 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateQrCodeNewDto.prototype, "scanLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateQrCodeNewDto.prototype, "allowScanLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'password' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQrCodeNewDto.prototype, "accessPassword", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateQrCodeNewDto.prototype, "activePassword", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'google_analytics_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQrCodeNewDto.prototype, "googleAnalyticsId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'facebook_pixel_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQrCodeNewDto.prototype, "facebookPixelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateQrCodeNewDto.prototype, "trackEvents", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'google_tag_manager_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQrCodeNewDto.prototype, "googleTagManagerId", void 0);
class BulkDeleteQrCodeDto {
}
exports.BulkDeleteQrCodeDto = BulkDeleteQrCodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [1, 2, 3],
        description: 'Array of QR Code IDs to delete',
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], BulkDeleteQrCodeDto.prototype, "ids", void 0);
//# sourceMappingURL=update-qr-code.dto.js.map