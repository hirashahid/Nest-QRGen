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
exports.BulkEditQrCodeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const qr_type_enum_1 = require("../../enums/qr-type.enum");
const all_qr_types_form_data_dto_1 = require("./all-qr-types-form-data.dto");
const video_form_data_dto_1 = require("./video-form-data.dto");
const website_form_data_dto_1 = require("./website-form-data.dto");
const constants_1 = require("../../constants");
const class_transformer_1 = require("class-transformer");
const bulk_qr_code_dto_1 = require("./bulk-qr-code.dto");
const qr_style_dto_1 = require("./qr-style.dto");
class BulkEditQrCodeDto {
}
exports.BulkEditQrCodeDto = BulkEditQrCodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], BulkEditQrCodeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'QrName',
        type: String,
        maxLength: 100,
        example: 'My Awesome QR Code',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], BulkEditQrCodeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: qr_type_enum_1.QrTypeEnum,
        example: qr_type_enum_1.QrTypeEnum.EVENT,
    }),
    (0, class_validator_1.IsEnum)(qr_type_enum_1.QrTypeEnum),
    __metadata("design:type", String)
], BulkEditQrCodeDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BulkEditQrCodeDto.prototype, "folder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        oneOf: [
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.EventFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.VcardPlusFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.ProductFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.CouponFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.PdfFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.PlaylistFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.ImageFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.BusinessFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.AppsFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.SocialMediaFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(video_form_data_dto_1.VideoFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(website_form_data_dto_1.WebsiteFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.ListOfLinksFormDataDto) },
        ],
        example: constants_1.EXAMPLE_EVENT_PAYLOAD,
        description: 'Data specific to the QR code type',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(({ object }) => (0, bulk_qr_code_dto_1.polymorphicType)(object)),
    __metadata("design:type", Object)
], BulkEditQrCodeDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: qr_style_dto_1.QrStyleDataDto, example: constants_1.EXAMPLE_BULK_QR_STYLE }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => qr_style_dto_1.QrStyleDataDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", qr_style_dto_1.QrStyleDataDto)
], BulkEditQrCodeDto.prototype, "style", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 100 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BulkEditQrCodeDto.prototype, "scanLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'password' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BulkEditQrCodeDto.prototype, "accessPassword", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'google_analytics_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BulkEditQrCodeDto.prototype, "googleAnalyticsId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'facebook_pixel_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BulkEditQrCodeDto.prototype, "facebookPixelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], BulkEditQrCodeDto.prototype, "trackEvents", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'google_tag_manager_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BulkEditQrCodeDto.prototype, "googleTagManagerId", void 0);
//# sourceMappingURL=bulk-edit-qr-code.dto.js.map