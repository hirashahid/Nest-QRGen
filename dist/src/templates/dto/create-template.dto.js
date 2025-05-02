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
exports.CreateTemplateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../../constants");
const error_correction_level_enum_1 = require("../../enums/error-correction-level.enum");
const qr_template_type_enum_1 = require("../../enums/qr-template-type.enum");
class ShapeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Background color of the shape',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(constants_1.COLOR_REGEX, { message: constants_1.COLOR_VALIDATION_MESSAGE }),
    __metadata("design:type", String)
], ShapeDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Color of the shape' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(constants_1.COLOR_REGEX, { message: constants_1.COLOR_VALIDATION_MESSAGE }),
    __metadata("design:type", String)
], ShapeDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Style of the shape' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShapeDto.prototype, "style", void 0);
class CornersDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Dot color of the corners' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(constants_1.COLOR_REGEX, { message: constants_1.COLOR_VALIDATION_MESSAGE }),
    __metadata("design:type", String)
], CornersDto.prototype, "dotColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Square color of the corners',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(constants_1.COLOR_REGEX, { message: constants_1.COLOR_VALIDATION_MESSAGE }),
    __metadata("design:type", String)
], CornersDto.prototype, "squareColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Square style of the corners',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CornersDto.prototype, "squareStyle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Dot style of the corners' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CornersDto.prototype, "dotStyle", void 0);
class FrameDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID of the frame' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(constants_1.SAFE_INTEGER_MAX),
    __metadata("design:type", Number)
], FrameDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Color of the frame' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(constants_1.COLOR_REGEX, { message: constants_1.COLOR_VALIDATION_MESSAGE }),
    __metadata("design:type", String)
], FrameDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Text displayed on the frame',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9\s.,!?-]*$/, {
        message: 'Text should not contain special characters or HTML tags',
    }),
    __metadata("design:type", String)
], FrameDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 16,
        description: 'Font size of the text in the frame',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FrameDto.prototype, "fontSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Background color of the frame',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(constants_1.COLOR_REGEX, { message: constants_1.COLOR_VALIDATION_MESSAGE }),
    __metadata("design:type", String)
], FrameDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Text color of the frame' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(constants_1.COLOR_REGEX, { message: constants_1.COLOR_VALIDATION_MESSAGE }),
    __metadata("design:type", String)
], FrameDto.prototype, "textColor", void 0);
class StyleDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: ShapeDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ShapeDto),
    __metadata("design:type", ShapeDto)
], StyleDto.prototype, "shape", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CornersDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CornersDto),
    __metadata("design:type", CornersDto)
], StyleDto.prototype, "corners", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'for the logo' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], StyleDto.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: FrameDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => FrameDto),
    __metadata("design:type", FrameDto)
], StyleDto.prototype, "frame", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Error correction level',
        enum: error_correction_level_enum_1.ErrorCorrectionLevel,
    }),
    (0, class_validator_1.IsEnum)(error_correction_level_enum_1.ErrorCorrectionLevel),
    __metadata("design:type", String)
], StyleDto.prototype, "errorCorrectionLevel", void 0);
class CreateTemplateDto {
}
exports.CreateTemplateDto = CreateTemplateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: qr_template_type_enum_1.QRTemplateType.STATIC,
        description: 'Type of the QR template (static or dynamic)',
        enum: qr_template_type_enum_1.QRTemplateType,
    }),
    (0, class_validator_1.IsEnum)(qr_template_type_enum_1.QRTemplateType, { message: 'Type must be either static or dynamic' }),
    __metadata("design:type", String)
], CreateTemplateDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: StyleDto, example: constants_1.EXAMPLE_TEMPLATE_STYLE }),
    __metadata("design:type", Object)
], CreateTemplateDto.prototype, "style", void 0);
//# sourceMappingURL=create-template.dto.js.map