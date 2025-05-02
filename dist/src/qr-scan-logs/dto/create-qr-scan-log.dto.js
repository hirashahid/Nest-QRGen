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
exports.CreateQrScanLogDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateQrScanLogDto {
}
exports.CreateQrScanLogDto = CreateQrScanLogDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateQrScanLogDto.prototype, "qr_code_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'scan', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQrScanLogDto.prototype, "log_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '192.168.1.1', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQrScanLogDto.prototype, "ip_address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'iPhone 13', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQrScanLogDto.prototype, "device", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Chrome', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQrScanLogDto.prototype, "browser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'MacOS', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQrScanLogDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'United States', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQrScanLogDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'New York', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQrScanLogDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'New York', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQrScanLogDto.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQrScanLogDto.prototype, "referrer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQrScanLogDto.prototype, "user_agent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '40.7128', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQrScanLogDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '-74.0060', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQrScanLogDto.prototype, "longitude", void 0);
//# sourceMappingURL=create-qr-scan-log.dto.js.map