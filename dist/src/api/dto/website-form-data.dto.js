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
exports.WebsiteFormDataDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class WebsiteFormDataDto {
}
exports.WebsiteFormDataDto = WebsiteFormDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: "horizontalAlign" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WebsiteFormDataDto.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: "Qr Code name" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WebsiteFormDataDto.prototype, "qrName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Website URL',
        required: true,
        example: 'https://a2charge.com',
    }),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], WebsiteFormDataDto.prototype, "websiteUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: "https://a2charge.com" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WebsiteFormDataDto.prototype, "utm_source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: "medium" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WebsiteFormDataDto.prototype, "utm_medium", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: "campaign" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WebsiteFormDataDto.prototype, "utm_campaign", void 0);
//# sourceMappingURL=website-form-data.dto.js.map