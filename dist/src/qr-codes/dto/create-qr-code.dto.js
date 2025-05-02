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
exports.CreateQrCodePublicDto = exports.CreateQrCodeDto = exports.StatsDto = exports.ScheduleDto = exports.ContentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ContentDto {
}
exports.ContentDto = ContentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '#000000' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContentDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ContentDto.prototype, "size", void 0);
class ScheduleDto {
}
exports.ScheduleDto = ScheduleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ScheduleDto.prototype, "timer_range", void 0);
class StatsDto {
}
exports.StatsDto = StatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '100' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StatsDto.prototype, "scan_limit", void 0);
class CreateQrCodeDto {
}
exports.CreateQrCodeDto = CreateQrCodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateQrCodeDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateQrCodeDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'static' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQrCodeDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://doamin.com/f34ffgf3' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrCodeDto.prototype, "redirectUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'f34ffgf3' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrCodeDto.prototype, "qr_string", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateQrCodeDto.prototype, "qr_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateQrCodeDto.prototype, "folder_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateQrCodeDto.prototype, "domain_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Name of the QR Code' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQrCodeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ContentDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ContentDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateQrCodeDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ContentDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ContentDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateQrCodeDto.prototype, "style", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ScheduleDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ScheduleDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateQrCodeDto.prototype, "schedule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: StatsDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => StatsDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateQrCodeDto.prototype, "stats", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'base64 Image string' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrCodeDto.prototype, "qrImage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 100 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateQrCodeDto.prototype, "scanLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateQrCodeDto.prototype, "allowScanLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'password' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrCodeDto.prototype, "accessPassword", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateQrCodeDto.prototype, "activePassword", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'google_analytics_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrCodeDto.prototype, "googleAnalyticsId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'facebook_pixel_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrCodeDto.prototype, "facebookPixelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateQrCodeDto.prototype, "trackEvents", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'google_tag_manager_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrCodeDto.prototype, "googleTagManagerId", void 0);
class CreateQrCodePublicDto {
}
exports.CreateQrCodePublicDto = CreateQrCodePublicDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateQrCodePublicDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'static' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQrCodePublicDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateQrCodePublicDto.prototype, "qr_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateQrCodePublicDto.prototype, "folder_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Name of the QR Code' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQrCodePublicDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ContentDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ContentDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", ContentDto)
], CreateQrCodePublicDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ContentDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ContentDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", ContentDto)
], CreateQrCodePublicDto.prototype, "style", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ScheduleDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ScheduleDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", ScheduleDto)
], CreateQrCodePublicDto.prototype, "schedule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: StatsDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => StatsDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", StatsDto)
], CreateQrCodePublicDto.prototype, "stats", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 100 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateQrCodePublicDto.prototype, "scanLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateQrCodePublicDto.prototype, "allowScanLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'password' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrCodePublicDto.prototype, "accessPassword", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateQrCodePublicDto.prototype, "activePassword", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'google_analytics_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrCodePublicDto.prototype, "googleAnalyticsId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'facebook_pixel_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrCodePublicDto.prototype, "facebookPixelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateQrCodePublicDto.prototype, "trackEvents", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'google_tag_manager_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrCodePublicDto.prototype, "googleTagManagerId", void 0);
//# sourceMappingURL=create-qr-code.dto.js.map