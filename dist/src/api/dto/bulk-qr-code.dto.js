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
exports.BulkQrCodeDto = exports.polymorphicType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const all_qr_types_form_data_dto_1 = require("./all-qr-types-form-data.dto");
const qr_type_enum_1 = require("../../enums/qr-type.enum");
const video_form_data_dto_1 = require("./video-form-data.dto");
const website_form_data_dto_1 = require("./website-form-data.dto");
const qr_style_dto_1 = require("./qr-style.dto");
const constants_1 = require("../../constants");
const polymorphicType = (obj) => {
    switch (obj?.type) {
        case qr_type_enum_1.QrTypeEnum.VCARD_PLUS:
            return all_qr_types_form_data_dto_1.VcardPlusFormDataDto;
        case qr_type_enum_1.QrTypeEnum.EVENT:
            return all_qr_types_form_data_dto_1.EventFormDataDto;
        case qr_type_enum_1.QrTypeEnum.PRODUCT:
            return all_qr_types_form_data_dto_1.ProductFormDataDto;
        case qr_type_enum_1.QrTypeEnum.COUPON:
            return all_qr_types_form_data_dto_1.CouponFormDataDto;
        case qr_type_enum_1.QrTypeEnum.PDF:
            return all_qr_types_form_data_dto_1.PdfFormDataDto;
        case qr_type_enum_1.QrTypeEnum.PLAYLIST:
            return all_qr_types_form_data_dto_1.PlaylistFormDataDto;
        case qr_type_enum_1.QrTypeEnum.IMAGE:
            return all_qr_types_form_data_dto_1.ImageFormDataDto;
        case qr_type_enum_1.QrTypeEnum.BUSINESS:
            return all_qr_types_form_data_dto_1.BusinessFormDataDto;
        case qr_type_enum_1.QrTypeEnum.APPS:
            return all_qr_types_form_data_dto_1.AppsFormDataDto;
        case qr_type_enum_1.QrTypeEnum.SOCIAL_MEDIA:
            return all_qr_types_form_data_dto_1.SocialMediaFormDataDto;
        case qr_type_enum_1.QrTypeEnum.VIDEO:
            return video_form_data_dto_1.VideoFormDataDto;
        case qr_type_enum_1.QrTypeEnum.WEBSITE:
            return website_form_data_dto_1.WebsiteFormDataDto;
        case qr_type_enum_1.QrTypeEnum.LIST_OF_LINKS:
            return all_qr_types_form_data_dto_1.ListOfLinksFormDataDto;
        case qr_type_enum_1.QrTypeEnum.WHATSAPP:
            return all_qr_types_form_data_dto_1.WhatsAppFormDataDto;
        case qr_type_enum_1.QrTypeEnum.WIFI:
            return all_qr_types_form_data_dto_1.WifiFormDataDto;
        case qr_type_enum_1.QrTypeEnum.VCARD:
            return all_qr_types_form_data_dto_1.VcardFormDataDto;
        case qr_type_enum_1.QrTypeEnum.EMAIL:
            return all_qr_types_form_data_dto_1.EmailFormDataDto;
        case qr_type_enum_1.QrTypeEnum.TEXT:
            return all_qr_types_form_data_dto_1.TextFormDataDto;
        case qr_type_enum_1.QrTypeEnum.URL:
            return all_qr_types_form_data_dto_1.URLFormData;
        default:
            return Object;
    }
};
exports.polymorphicType = polymorphicType;
let BulkQrCodeDto = class BulkQrCodeDto {
};
exports.BulkQrCodeDto = BulkQrCodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: qr_type_enum_1.QrTypeEnum,
        example: qr_type_enum_1.QrTypeEnum.EVENT,
    }),
    (0, class_validator_1.IsEnum)(qr_type_enum_1.QrTypeEnum),
    __metadata("design:type", String)
], BulkQrCodeDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BulkQrCodeDto.prototype, "folder", void 0);
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
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.WifiFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.VcardFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.EmailFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.TextFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.WhatsAppFormDataDto) },
            { $ref: (0, swagger_1.getSchemaPath)(all_qr_types_form_data_dto_1.URLFormData) },
        ],
        example: constants_1.EXAMPLE_EVENT_PAYLOAD,
        description: 'Data specific to the QR code type',
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(({ object }) => (0, exports.polymorphicType)(object)),
    __metadata("design:type", Object)
], BulkQrCodeDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: qr_style_dto_1.QrStyleDataDto, example: constants_1.EXAMPLE_BULK_QR_STYLE }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => qr_style_dto_1.QrStyleDataDto),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", qr_style_dto_1.QrStyleDataDto)
], BulkQrCodeDto.prototype, "style", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 100 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BulkQrCodeDto.prototype, "scanLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'password' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BulkQrCodeDto.prototype, "accessPassword", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'google_analytics_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BulkQrCodeDto.prototype, "googleAnalyticsId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'facebook_pixel_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BulkQrCodeDto.prototype, "facebookPixelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], BulkQrCodeDto.prototype, "trackEvents", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], BulkQrCodeDto.prototype, "isFavorite", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'google_tag_manager_id' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BulkQrCodeDto.prototype, "googleTagManagerId", void 0);
exports.BulkQrCodeDto = BulkQrCodeDto = __decorate([
    (0, swagger_1.ApiExtraModels)(all_qr_types_form_data_dto_1.EventFormDataDto, all_qr_types_form_data_dto_1.VcardPlusFormDataDto, all_qr_types_form_data_dto_1.ProductFormDataDto, all_qr_types_form_data_dto_1.CouponFormDataDto, all_qr_types_form_data_dto_1.PdfFormDataDto, all_qr_types_form_data_dto_1.PlaylistFormDataDto, all_qr_types_form_data_dto_1.ImageFormDataDto, all_qr_types_form_data_dto_1.BusinessFormDataDto, all_qr_types_form_data_dto_1.AppsFormDataDto, all_qr_types_form_data_dto_1.SocialMediaFormDataDto, video_form_data_dto_1.VideoFormDataDto, website_form_data_dto_1.WebsiteFormDataDto, all_qr_types_form_data_dto_1.ListOfLinksFormDataDto, all_qr_types_form_data_dto_1.WifiFormDataDto, all_qr_types_form_data_dto_1.VcardFormDataDto, all_qr_types_form_data_dto_1.EmailFormDataDto, all_qr_types_form_data_dto_1.TextFormDataDto, all_qr_types_form_data_dto_1.WhatsAppFormDataDto, all_qr_types_form_data_dto_1.URLFormData)
], BulkQrCodeDto);
//# sourceMappingURL=bulk-qr-code.dto.js.map