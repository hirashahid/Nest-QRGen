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
exports.GenerateQrDto = exports.ImageStyleDto = exports.ImageShapeDto = exports.ImageFrameDto = exports.ImageCornersDto = exports.WhatsappBodyDto = exports.WifiBodyDto = exports.VCardBodyDto = exports.VCardPhoneDto = exports.UrlStaticBodyDto = exports.TextBodyDto = exports.SmsBodyDto = exports.EmailBodyDto = exports.ColorOrGradientDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const error_correction_level_enum_1 = require("../../enums/error-correction-level.enum");
const qr_data_type_enum_1 = require("../../enums/qr-data-type.enum");
const constants_1 = require("../../constants");
class ColorStopDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '#6a1a4c', description: 'Color value' }),
    (0, class_validator_1.IsHexColor)(),
    __metadata("design:type", String)
], ColorStopDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0, description: 'Color stop position (0-1)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1),
    __metadata("design:type", Number)
], ColorStopDto.prototype, "offset", void 0);
class GradientDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['linear', 'radial'],
        example: 'linear',
        default: 'linear',
    }),
    (0, class_validator_1.IsIn)(['linear', 'radial']),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GradientDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 0,
        description: 'Rotation angle',
        default: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], GradientDto.prototype, "rotation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ColorStopDto], minItems: 1 }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ColorStopDto),
    __metadata("design:type", Array)
], GradientDto.prototype, "colorStops", void 0);
class ColorOrGradientDto {
}
exports.ColorOrGradientDto = ColorOrGradientDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['color', 'gradient'],
        description: 'Type of QR color definition',
    }),
    (0, class_validator_1.IsIn)(['color', 'gradient']),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ColorOrGradientDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.type === 'color'),
    (0, swagger_1.ApiPropertyOptional)({ example: '#ffffff', default: '#ffffff' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ColorOrGradientDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.type === 'gradient'),
    (0, swagger_1.ApiProperty)({ type: GradientDto, required: false }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => GradientDto),
    __metadata("design:type", GradientDto)
], ColorOrGradientDto.prototype, "gradient", void 0);
class EmailBodyDto {
}
exports.EmailBodyDto = EmailBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test@example.com', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], EmailBodyDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Subject line', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], EmailBodyDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Body of the email', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], EmailBodyDto.prototype, "body", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], EmailBodyDto.prototype, "hidden", void 0);
class SmsBodyDto {
}
exports.SmsBodyDto = SmsBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], SmsBodyDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'This is a message', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(160),
    __metadata("design:type", String)
], SmsBodyDto.prototype, "message", void 0);
class TextBodyDto {
}
exports.TextBodyDto = TextBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'This is a simple text QR', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TextBodyDto.prototype, "text", void 0);
class UrlStaticBodyDto {
}
exports.UrlStaticBodyDto = UrlStaticBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UrlStaticBodyDto.prototype, "url", void 0);
class VCardPhoneDto {
}
exports.VCardPhoneDto = VCardPhoneDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VCardPhoneDto.prototype, "phone", void 0);
class VCardBodyDto {
}
exports.VCardBodyDto = VCardBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(70),
    __metadata("design:type", String)
], VCardBodyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(70),
    __metadata("design:type", String)
], VCardBodyDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [VCardPhoneDto], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => VCardPhoneDto),
    __metadata("design:type", Array)
], VCardBodyDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@example.com', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], VCardBodyDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'OpenAI Inc.', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], VCardBodyDto.prototype, "org", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Software Engineer', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], VCardBodyDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1234 Main St', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(70),
    __metadata("design:type", String)
], VCardBodyDto.prototype, "adr", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'San Francisco', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(40),
    __metadata("design:type", String)
], VCardBodyDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '94105', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(15),
    __metadata("design:type", String)
], VCardBodyDto.prototype, "zip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'California', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(40),
    __metadata("design:type", String)
], VCardBodyDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'USA', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], VCardBodyDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], VCardBodyDto.prototype, "url", void 0);
class WifiBodyDto {
}
exports.WifiBodyDto = WifiBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['WEP', 'WPA', 'WPA-EAP', 'nopass'],
        default: 'WPA',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['WEP', 'WPA', 'WPA-EAP', 'nopass']),
    __metadata("design:type", String)
], WifiBodyDto.prototype, "authType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'MyWiFiNetwork', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], WifiBodyDto.prototype, "ssid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'supersecretpassword', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], WifiBodyDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], WifiBodyDto.prototype, "hidden", void 0);
class WhatsappBodyDto {
}
exports.WhatsappBodyDto = WhatsappBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], WhatsappBodyDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Hello from WhatsApp QR', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(160),
    __metadata("design:type", String)
], WhatsappBodyDto.prototype, "message", void 0);
class ImageCornersDto {
}
exports.ImageCornersDto = ImageCornersDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: [
            'dot',
            'square',
            'extra-rounded',
            'rounded',
            'dots',
            'classy',
            'classy-rounded',
        ],
        default: 'square',
        example: 'square',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ImageCornersDto.prototype, "squareStyle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: [
            'dot',
            'square',
            'extra-rounded',
            'rounded',
            'dots',
            'classy',
            'classy-rounded',
        ],
        default: 'square',
        example: 'square',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ImageCornersDto.prototype, "dotStyle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: ColorOrGradientDto,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ColorOrGradientDto),
    __metadata("design:type", ColorOrGradientDto)
], ImageCornersDto.prototype, "dotColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: ColorOrGradientDto,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ColorOrGradientDto),
    __metadata("design:type", ColorOrGradientDto)
], ImageCornersDto.prototype, "squareColor", void 0);
class ImageFrameDto {
}
exports.ImageFrameDto = ImageFrameDto;
__decorate([
    (0, swagger_1.ApiProperty)({ minimum: 0, maximum: 30, example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(30),
    __metadata("design:type", Number)
], ImageFrameDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: ColorOrGradientDto,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ColorOrGradientDto),
    __metadata("design:type", ColorOrGradientDto)
], ImageFrameDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ maxLength: 30, example: 'Scan Me' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], ImageFrameDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ minimum: 30, maximum: 98, example: '16' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(30),
    (0, class_validator_1.Max)(98),
    __metadata("design:type", Number)
], ImageFrameDto.prototype, "fontSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: ColorOrGradientDto,
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ColorOrGradientDto),
    __metadata("design:type", ColorOrGradientDto)
], ImageFrameDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '#000000' }),
    (0, class_validator_1.IsHexColor)(),
    __metadata("design:type", String)
], ImageFrameDto.prototype, "textColor", void 0);
class ImageShapeDto {
}
exports.ImageShapeDto = ImageShapeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: ColorOrGradientDto,
        description: 'Background color/gradient for the QR shape',
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ColorOrGradientDto),
    __metadata("design:type", ColorOrGradientDto)
], ImageShapeDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: ColorOrGradientDto,
        description: 'Foreground color/gradient for the QR elements',
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ColorOrGradientDto),
    __metadata("design:type", ColorOrGradientDto)
], ImageShapeDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: [
            'rounded',
            'dots',
            'classy',
            'classy-rounded',
            'square',
            'extra-rounded',
        ],
        default: 'square',
        description: 'Style of the QR code elements',
        example: 'square',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)([
        'rounded',
        'dots',
        'classy',
        'classy-rounded',
        'square',
        'extra-rounded',
    ]),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ImageShapeDto.prototype, "style", void 0);
class ImageStyleDto {
}
exports.ImageStyleDto = ImageStyleDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'image',
        example: 'https://example.com/image.png',
    }),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ImageStyleDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: [
            'rounded',
            'dots',
            'classy',
            'classy-rounded',
            'square',
            'extra-rounded',
        ],
        default: 'square',
        description: 'Style of the QR code elements',
        example: 'square',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ImageStyleDto.prototype, "style", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: ImageShapeDto, required: false }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ImageShapeDto),
    __metadata("design:type", ImageShapeDto)
], ImageStyleDto.prototype, "shape", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: ImageCornersDto, required: false }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ImageCornersDto),
    __metadata("design:type", ImageCornersDto)
], ImageStyleDto.prototype, "corners", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: ImageFrameDto, required: false }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ImageFrameDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", ImageFrameDto)
], ImageStyleDto.prototype, "frame", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: error_correction_level_enum_1.ErrorCorrectionLevel,
        default: error_correction_level_enum_1.ErrorCorrectionLevel.QUARTILE,
        example: error_correction_level_enum_1.ErrorCorrectionLevel.QUARTILE,
        required: false,
    }),
    (0, class_validator_1.IsEnum)(error_correction_level_enum_1.ErrorCorrectionLevel),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ImageStyleDto.prototype, "errorCorrectionLevel", void 0);
class GenerateQrDto {
}
exports.GenerateQrDto = GenerateQrDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: qr_data_type_enum_1.QrDataTypeEnum,
        example: qr_data_type_enum_1.QrDataTypeEnum.EMAIL,
    }),
    (0, class_validator_1.IsEnum)(qr_data_type_enum_1.QrDataTypeEnum),
    __metadata("design:type", String)
], GenerateQrDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        oneOf: [
            { $ref: (0, swagger_1.getSchemaPath)(EmailBodyDto) },
            { $ref: (0, swagger_1.getSchemaPath)(WifiBodyDto) },
            { $ref: (0, swagger_1.getSchemaPath)(VCardBodyDto) },
            { $ref: (0, swagger_1.getSchemaPath)(TextBodyDto) },
            { $ref: (0, swagger_1.getSchemaPath)(UrlStaticBodyDto) },
            { $ref: (0, swagger_1.getSchemaPath)(SmsBodyDto) },
            { $ref: (0, swagger_1.getSchemaPath)(WhatsappBodyDto) },
        ],
        example: constants_1.EXAMPLE_EMAIL_QR_DATA,
        description: 'Data for QR code (can be email, wifi, vcard, etc.)',
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => EmailBodyDto),
    __metadata("design:type", Object)
], GenerateQrDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: constants_1.EXAMPLE_QR_STYLE, required: true }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => ImageStyleDto),
    __metadata("design:type", ImageStyleDto)
], GenerateQrDto.prototype, "style", void 0);
//# sourceMappingURL=generate-qr-image.dto.js.map