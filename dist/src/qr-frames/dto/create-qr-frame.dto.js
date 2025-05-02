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
exports.CreateQrFrameDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateQrFrameDto {
}
exports.CreateQrFrameDto = CreateQrFrameDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the frame',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQrFrameDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The path where the frame is stored',
    }),
    __metadata("design:type", String)
], CreateQrFrameDto.prototype, "file", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The settings of the frame',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrFrameDto.prototype, "settings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The class of the frame',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrFrameDto.prototype, "class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The text settings of the frame',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrFrameDto.prototype, "frame_text_settings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The svg code of the frame',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrFrameDto.prototype, "svg_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The class of the frame',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrFrameDto.prototype, "my_class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The text settings of the frame',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrFrameDto.prototype, "my_frame_text_setting", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The svg code of the frame',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrFrameDto.prototype, "my_svg_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The class of the landing page',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQrFrameDto.prototype, "landing_page_class", void 0);
//# sourceMappingURL=create-qr-frame.dto.js.map