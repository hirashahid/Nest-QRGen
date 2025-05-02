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
exports.QrStyleDataDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const error_correction_level_enum_1 = require("../../enums/error-correction-level.enum");
class QrStyleDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: ['absolute', 'relative'],
        default: 'absolute',
        description: 'Positioning of the QR code',
        example: 'absolute',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrStyleDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Top percentage',
        example: '40%',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrStyleDto.prototype, "top", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Left percentage',
        example: '40%',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrStyleDto.prototype, "left", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Width pixel',
        example: '150px',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrStyleDto.prototype, "width", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Height pixel',
        example: '150px',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrStyleDto.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'translateX(-50%) translateY(-50%)',
        example: 'translateX(-50%) translateY(-50%)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrStyleDto.prototype, "transform", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Margin in pixel',
        example: 'auto',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrStyleDto.prototype, "margin", void 0);
class QrTextStyleDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: ['absolute', 'relative'],
        default: 'absolute',
        description: 'Positioning of the QR code text',
        example: 'absolute',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrTextStyleDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Top percentage',
        example: '40%',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrTextStyleDto.prototype, "top", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Left percentage',
        example: '40%',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrTextStyleDto.prototype, "left", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Text Align',
        example: 'center',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrTextStyleDto.prototype, "textAlign", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'width in pixel',
        example: '150px',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrTextStyleDto.prototype, "width", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'color in hexadecimal',
        example: '#000000',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrTextStyleDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'overflow property',
        example: 'hidden',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrTextStyleDto.prototype, "overflow", void 0);
class DotColorDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ nullable: true, example: '#0000' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DotColorDto.prototype, "cornerColor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ nullable: true, example: '#0000' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DotColorDto.prototype, "centerColor", void 0);
class DotStyleDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ nullable: true, example: 'square' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DotStyleDto.prototype, "selectedCornerShape", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ nullable: true, example: 'square' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DotStyleDto.prototype, "selectedCenterShape", void 0);
class BulkQrCornersDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'color of dot',
        example: '#0000',
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DotColorDto),
    __metadata("design:type", DotColorDto)
], BulkQrCornersDto.prototype, "dotColor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ nullable: true, example: "#0000" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BulkQrCornersDto.prototype, "squareColor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'style of square',
        example: 'square',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BulkQrCornersDto.prototype, "squareStyle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DotStyleDto),
    __metadata("design:type", DotStyleDto)
], BulkQrCornersDto.prototype, "dotStyle", void 0);
class FrameDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Frame ID',
        example: 1,
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], FrameDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Frame color',
        example: '#0000',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FrameDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Frame text',
        example: 'Scan me!',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FrameDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Font size',
        example: '16px',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FrameDto.prototype, "fontSize", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Frame background color',
        example: '#FFFFFF',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FrameDto.prototype, "backgroundColor", void 0);
class BulkQrShapeDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Background Color',
        example: '#0000',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BulkQrShapeDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Color',
        example: "#0000",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BulkQrShapeDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Shape',
        example: 'square',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BulkQrShapeDto.prototype, "style", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Gradient',
        example: 'linear',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BulkQrShapeDto.prototype, "Value", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Template Name',
        example: 'template1',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BulkQrShapeDto.prototype, "templatename", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => QrStyleDto),
    __metadata("design:type", QrStyleDto)
], BulkQrShapeDto.prototype, "qrstyle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'QR Text',
        example: 'Hello World!',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BulkQrShapeDto.prototype, "qrtext", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => QrTextStyleDto),
    __metadata("design:type", QrTextStyleDto)
], BulkQrShapeDto.prototype, "qrtextstyle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Frame SVG Code',
        example: '<svg>...</svg>',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BulkQrShapeDto.prototype, "matchcomponent", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Active Index',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BulkQrShapeDto.prototype, "activeindex", void 0);
class QrStyleDataDto {
}
exports.QrStyleDataDto = QrStyleDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => BulkQrShapeDto),
    __metadata("design:type", BulkQrShapeDto)
], QrStyleDataDto.prototype, "shape", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => BulkQrCornersDto),
    __metadata("design:type", BulkQrCornersDto)
], QrStyleDataDto.prototype, "corners", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Logo URL',
        example: 'https://example.com/logo.png',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QrStyleDataDto.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => FrameDto),
    __metadata("design:type", FrameDto)
], QrStyleDataDto.prototype, "frame", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: error_correction_level_enum_1.ErrorCorrectionLevel,
        default: error_correction_level_enum_1.ErrorCorrectionLevel.QUARTILE,
        description: 'Error correction level',
        example: error_correction_level_enum_1.ErrorCorrectionLevel.QUARTILE,
    }),
    (0, class_validator_1.IsEnum)(error_correction_level_enum_1.ErrorCorrectionLevel),
    __metadata("design:type", String)
], QrStyleDataDto.prototype, "errorCorrectionLevel", void 0);
//# sourceMappingURL=qr-style.dto.js.map