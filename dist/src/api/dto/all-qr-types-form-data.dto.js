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
exports.WhatsAppFormDataDto = exports.TextFormDataDto = exports.EmailFormDataDto = exports.VcardFormDataDto = exports.WifiFormDataDto = exports.URLFormData = exports.ListOfLinksFormDataDto = exports.AppearanceDto = exports.SocialMediaFormDataDto = exports.AppsFormDataDto = exports.BusinessFormDataDto = exports.ImageFormDataDto = exports.PlaylistFormDataDto = exports.PdfFormDataDto = exports.CouponFormDataDto = exports.ProductFormDataDto = exports.VcardPlusFormDataDto = exports.EventFormDataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class FileDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'File name',
        example: 'file name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FileDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'File URL',
        example: 'https://example.com/file.jpg',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FileDto.prototype, "file", void 0);
class CategoryDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Category Key',
        example: 'categoryKey',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CategoryDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Category value',
        example: 'category value',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CategoryDto.prototype, "categoryValue", void 0);
class NutrientDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nutrient Key',
        example: 'nutrientKey',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NutrientDto.prototype, "nutrient", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nutrient value',
        example: 'nutrient value',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NutrientDto.prototype, "nutrientvalue", void 0);
class IngredientDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Ingredient name',
        example: 'Potato 20gm',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IngredientDto.prototype, "ingredient", void 0);
class EventFormDataDto {
}
exports.EventFormDataDto = EventFormDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Image Grid Alignment',
        example: 'horizontalAlign',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EventFormDataDto.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Qr Code Name',
        example: 'Qr Code Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EventFormDataDto.prototype, "qrName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Title Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EventFormDataDto.prototype, "titleFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Text Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EventFormDataDto.prototype, "TextFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], EventFormDataDto.prototype, "eventImgUpload", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Event Description',
        example: 'Event Description',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EventFormDataDto.prototype, "eventDescription", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Event Website',
        example: 'https://example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EventFormDataDto.prototype, "eventWebsite", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Global Search Address',
        example: 'Mountain View, California, United States',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EventFormDataDto.prototype, "globalSearchAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Business Additional Info',
        example: 'Business Additional Info',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EventFormDataDto.prototype, "businessAdditionalInfo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Organization Name',
        example: 'Organization Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EventFormDataDto.prototype, "organizationName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Organization Website',
        example: 'https://example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], EventFormDataDto.prototype, "organizationWebsite", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Organization Telephone',
        example: '1234567890',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EventFormDataDto.prototype, "organizationtelephone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Organization Email',
        example: 'info@mail.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], EventFormDataDto.prototype, "organizationEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], EventFormDataDto.prototype, "welcomeScreenImage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'URL',
        example: 'https://example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EventFormDataDto.prototype, "globalUrl", void 0);
class VcardPlusFormDataDto {
}
exports.VcardPlusFormDataDto = VcardPlusFormDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Image Grid Alignment',
        example: 'horizontalAlign',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Qr Code Name',
        example: 'Qr Code Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "qrName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Title Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "titleFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Text Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "TextFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], VcardPlusFormDataDto.prototype, "vCardPlusprofileImage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'VCard Name',
        example: 'VCard Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "vCardName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'VCard Surname',
        example: 'VCard Surname',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "vCardSurname", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'VCard Plus About You Title',
        example: 'VCard Plus About You Title',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "vCardPlusAboutYouTitle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Text Align',
        example: 'left',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "textAlign", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Global Search Address',
        example: 'Mountain View, California, United States',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "globalSearchAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], VcardPlusFormDataDto.prototype, "imagePageCard", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'VCard Summary',
        example: 'VCard Summary',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "vCardSummary", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Global URL',
        example: 'https://example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "globalUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'VCard Company Name',
        example: 'VCard Company Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "vCardCompanyName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'VCard Company Profession Name',
        example: 'VCard Company Profession Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "vCardCompanyProfessionName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'VCard Customize Your Button Phone',
        example: 'VCard Customize Your Button Phone',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "vCardCustomizeYourButtonPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'VCard Customize Your Button Email',
        example: 'VCard Customize Your Button Email',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "vCardCustomizeYourButtonEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'VCard Customize Your Button Location',
        example: 'VCard Customize Your Button Location',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "vCardCustomizeYourButtonLocation", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'VCard Customize Your Button Contact',
        example: 'VCard Customize Your Button Contact',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "vCardCustomizeYourButtonContact", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Bitcoin URL',
        example: 'https://example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "Bitcoinurl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Bitcoin Text',
        example: 'Bitcoin Text',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "Bitcointext", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Bitcoin Button Text',
        example: 'Bitcoin Button Text',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VcardPlusFormDataDto.prototype, "Bitcoinbuttontext", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], VcardPlusFormDataDto.prototype, "welcomeScreenImage", void 0);
class ProductFormDataDto {
}
exports.ProductFormDataDto = ProductFormDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Image Grid Type',
        example: 'horizontalAlign',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFormDataDto.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [CategoryDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CategoryDto),
    __metadata("design:type", Array)
], ProductFormDataDto.prototype, "productCategories", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [NutrientDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => NutrientDto),
    __metadata("design:type", Array)
], ProductFormDataDto.prototype, "Nutrients", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [IngredientDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => IngredientDto),
    __metadata("design:type", Array)
], ProductFormDataDto.prototype, "productingredients", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Qr Code Name',
        example: 'Qr Code Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFormDataDto.prototype, "qrName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Title Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFormDataDto.prototype, "titleFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Text Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFormDataDto.prototype, "TextFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], ProductFormDataDto.prototype, "productAppLogo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Product App Name',
        example: 'Product App Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFormDataDto.prototype, "ProductAppName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Product Description',
        example: 'Product Description',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFormDataDto.prototype, "productDescription", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Product Developer',
        example: 'Product Developer',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFormDataDto.prototype, "ProductDeveloper", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nutritional Information Qualification',
        example: 'Nutritional Information Qualification',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductFormDataDto.prototype, "nutritionalInformationQualification", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [IngredientDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => IngredientDto),
    __metadata("design:type", Array)
], ProductFormDataDto.prototype, "productIngredients", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [NutrientDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => NutrientDto),
    __metadata("design:type", Array)
], ProductFormDataDto.prototype, "productNutrient", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], ProductFormDataDto.prototype, "Certificates", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], ProductFormDataDto.prototype, "Organic", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], ProductFormDataDto.prototype, "Responsibleconsumption", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], ProductFormDataDto.prototype, "RecyclingStamps", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], ProductFormDataDto.prototype, "welcomeScreenImage", void 0);
class CouponFormDataDto {
}
exports.CouponFormDataDto = CouponFormDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Image Grid Type',
        example: 'horizontalAlign',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Qr Code Name',
        example: 'Qr Code Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "qrName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Title Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "titleFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Text Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "TextFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], CouponFormDataDto.prototype, "CouponFIleCoverImage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Coupon Company',
        example: 'Coupon Company',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "couponCompany", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Coupon Title',
        example: 'Coupon Title',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "couponTitle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Coupon Description',
        example: 'Coupon Description',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "couponDescription", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Coupon Sales Badge',
        example: 'Coupon Sales Badge',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "couponSalesBadge", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Coupon Button To See',
        example: 'Coupon Button To See',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "couponButtonToSee", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Global Search Address',
        example: 'Global Search Address',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "globalSearchAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Coupon Code',
        example: 'Coupon Code',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "couponCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Coupon Valid Until',
        example: '2030-04-19T18:51:42.000Z',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "couponValidUntil", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Coupon Terms And Conditions',
        example: 'Coupon Terms And Conditions',
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CouponFormDataDto.prototype, "couponTermsAndConditions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Coupon Info Button',
        example: 'Coupon Info Button',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "couponInfoButton", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Coupon Info URL',
        example: 'https://example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CouponFormDataDto.prototype, "couponInfoURL", void 0);
class PdfFormDataDto {
}
exports.PdfFormDataDto = PdfFormDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Image Grid Type',
        example: 'horizontalAlign',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PdfFormDataDto.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Qr Code Name',
        example: 'Qr Code Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PdfFormDataDto.prototype, "qrName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Title Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PdfFormDataDto.prototype, "titleFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Text Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PdfFormDataDto.prototype, "TextFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], PdfFormDataDto.prototype, "pdfFIleCoverImage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], PdfFormDataDto.prototype, "pdfFiles", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], PdfFormDataDto.prototype, "pdfLogoCoverImage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pdf Company',
        example: 'Pdf Company',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PdfFormDataDto.prototype, "pdfCompany", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pdf Description',
        example: 'Pdf Description',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PdfFormDataDto.prototype, "pdfDescription", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pdf Website',
        example: 'https://example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], PdfFormDataDto.prototype, "pdfWebsite", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pdf Button Text',
        example: 'Pdf Button Text',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PdfFormDataDto.prototype, "pdfButtonText", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Global Time Scheduling Name',
        example: 'Global Time Scheduling Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PdfFormDataDto.prototype, "globalTimeSchedulingName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Global Time Scheduling Days',
        example: '["Monday", "Tuesday"]',
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], PdfFormDataDto.prototype, "globalTimeSchedulingDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], PdfFormDataDto.prototype, "welcomeScreenImage", void 0);
class PlaylistFormDataDto {
}
exports.PlaylistFormDataDto = PlaylistFormDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Image Grid Type',
        example: 'horizontalAlign',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlaylistFormDataDto.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Qr Code Name',
        example: 'Qr Code Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlaylistFormDataDto.prototype, "qrName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Title Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlaylistFormDataDto.prototype, "titleFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Text Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlaylistFormDataDto.prototype, "TextFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Playlist Info Title',
        example: 'Playlist Info Title',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlaylistFormDataDto.prototype, "playlistInfoTitle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Playlist Info Name',
        example: 'Playlist Info Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlaylistFormDataDto.prototype, "playlistInfoName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Playlist Info Description',
        example: 'Playlist Info Description',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PlaylistFormDataDto.prototype, "playlistInfoDescription", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], PlaylistFormDataDto.prototype, "playlistImg", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], PlaylistFormDataDto.prototype, "playlistItems", void 0);
class ImageFormDataDto {
}
exports.ImageFormDataDto = ImageFormDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Image Grid Type',
        example: 'horizontalAlign',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImageFormDataDto.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Qr Code Name',
        example: 'Qr Code Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImageFormDataDto.prototype, "qrName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Title Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImageFormDataDto.prototype, "titleFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Text Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImageFormDataDto.prototype, "TextFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], ImageFormDataDto.prototype, "imagePageCard", void 0);
class BusinessFormDataDto {
}
exports.BusinessFormDataDto = BusinessFormDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Image Grid Type',
        example: 'horizontalAlign',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BusinessFormDataDto.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Qr Code Name',
        example: 'Qr Code Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BusinessFormDataDto.prototype, "qrName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Title Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BusinessFormDataDto.prototype, "titleFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Text Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BusinessFormDataDto.prototype, "TextFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], BusinessFormDataDto.prototype, "businessCompanyImage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Business Content Company',
        example: 'Business Content Company',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BusinessFormDataDto.prototype, "businessContentCompany", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Business Content Title',
        example: 'Business Content Title',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BusinessFormDataDto.prototype, "businessContentTitle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Business Content Subtitle',
        example: 'Business Content Subtitle',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BusinessFormDataDto.prototype, "businessContentSubtitle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], BusinessFormDataDto.prototype, "imagePageCard", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Global Search Address',
        example: 'Mountain View, California, United States',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BusinessFormDataDto.prototype, "globalSearchAddress", void 0);
class AppsFormDataDto {
}
exports.AppsFormDataDto = AppsFormDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Image Grid Type',
        example: 'horizontalAlign',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppsFormDataDto.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Qr Code Name',
        example: 'Qr Code Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppsFormDataDto.prototype, "qrName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Title Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppsFormDataDto.prototype, "titleFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Text Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppsFormDataDto.prototype, "TextFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'App Name',
        example: 'App Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppsFormDataDto.prototype, "Appname", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'App Developer Company',
        example: 'App Developer Company',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppsFormDataDto.prototype, "AppDeveloperCompany", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], AppsFormDataDto.prototype, "Applogo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'App Description',
        example: 'App Description',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppsFormDataDto.prototype, "Appdescription", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'App Website',
        example: 'https://example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], AppsFormDataDto.prototype, "Appwebsite", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Play Store Link',
        example: 'https://play.google.com/store',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], AppsFormDataDto.prototype, "appsPlayStoreLink", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'App Store Link',
        example: 'https://apps.apple.com/us/app/id123456789',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], AppsFormDataDto.prototype, "appsAppStoreLink", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Amazon Store Link',
        example: 'https://www.amazon.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], AppsFormDataDto.prototype, "appsAmazonStoreLink", void 0);
class SocialMediaFormDataDto {
}
exports.SocialMediaFormDataDto = SocialMediaFormDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Image Grid Type',
        example: 'horizontalAlign',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Qr Code Name',
        example: 'Qr Code Name',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "qrName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Title Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "titleFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Text Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "TextFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], SocialMediaFormDataDto.prototype, "socialMediaLogo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Social Media Title',
        example: 'Social Media Title',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "socialMediatitle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Social Media Description',
        example: 'Social Media Description',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "socialMediaDescription", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [FileDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], SocialMediaFormDataDto.prototype, "Coverimage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Global Search Address',
        example: 'Mountain View, California, United States',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "globalSearchAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Bitcoin URL',
        example: 'https://example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "Bitcoinurl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Bitcoin Text',
        example: 'Bitcoin Text',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "Bitcointext", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Bitcoin Button Text',
        example: 'Bitcoin Button Text',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "Bitcoinbuttontext", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Contact URL',
        example: 'https://example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "Contacturl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Contact Text',
        example: 'Contact Text',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "Contacttext", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Contact Button Text',
        example: 'Contact Button Text',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "Contactbuttontext", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Facebook URL',
        example: 'https://example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "Facebookurl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Facebook Text',
        example: 'Facebook Text',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "Facebooktext", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Facebook Button Text',
        example: 'Facebook Button Text',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "Facebookbuttontext", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Kitchen URL',
        example: 'https://example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "Kitchenurl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Kitchen Text',
        example: 'Kitchen Text',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "Kitchentext", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Kitchen Button Text',
        example: 'Kitchen Button Text',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SocialMediaFormDataDto.prototype, "Kitchenbuttontext", void 0);
class AppearanceDto {
}
exports.AppearanceDto = AppearanceDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Triggered Card Name',
        example: 'event',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppearanceDto.prototype, "triggeredCard", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Triggered Frame ID',
        example: '1',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppearanceDto.prototype, "triggeredFrame", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Foreground Color',
        example: '#000000',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppearanceDto.prototype, "foregroundColor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Background Color',
        example: '#000000',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppearanceDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Title Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppearanceDto.prototype, "titleFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Text Font Family',
        example: 'Arial',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppearanceDto.prototype, "textFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Triggered Qr Type static or dynamic',
        example: 'dynamic',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AppearanceDto.prototype, "triggeredQrType", void 0);
class ListOfLinksFormDataDto {
}
exports.ListOfLinksFormDataDto = ListOfLinksFormDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListOfLinksFormDataDto.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'My QR Code Name', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListOfLinksFormDataDto.prototype, "qrName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Lato', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListOfLinksFormDataDto.prototype, "titleFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Lato', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListOfLinksFormDataDto.prototype, "TextFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [FileDto], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], ListOfLinksFormDataDto.prototype, "linkLogo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'This is the link title', required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListOfLinksFormDataDto.prototype, "linkTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'A short description of the link', required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListOfLinksFormDataDto.prototype, "linkDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [FileDto], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], ListOfLinksFormDataDto.prototype, "imagePageCard", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ListOfLinksFormDataDto.prototype, "contentLinks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [FileDto], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], ListOfLinksFormDataDto.prototype, "welcomeScreenImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://www.google.com', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], ListOfLinksFormDataDto.prototype, "Bitcoinurl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bitcoin CTA text', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListOfLinksFormDataDto.prototype, "Bitcointext", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bitcoin Button', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListOfLinksFormDataDto.prototype, "Bitcoinbuttontext", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://temp-mail.org/en/', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], ListOfLinksFormDataDto.prototype, "Kitchenurl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Kitchen CTA text', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListOfLinksFormDataDto.prototype, "Kitchentext", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Kitchen Button', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListOfLinksFormDataDto.prototype, "Kitchenbuttontext", void 0);
class URLFormData {
}
exports.URLFormData = URLFormData;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], URLFormData.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [FileDto], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FileDto),
    __metadata("design:type", Array)
], URLFormData.prototype, "welcomeScreenImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2.5,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], URLFormData.prototype, "welcomeScreenTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'My QR Code Name', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], URLFormData.prototype, "qrName", void 0);
class WifiFormDataDto extends (0, swagger_1.PartialType)(URLFormData) {
}
exports.WifiFormDataDto = WifiFormDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'MyWiFiNetwork', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], WifiFormDataDto.prototype, "ssid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'supersecretpassword', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], WifiFormDataDto.prototype, "password", void 0);
class InnerFormDataDto {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Test' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], InnerFormDataDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'User' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], InnerFormDataDto.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Test Company' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], InnerFormDataDto.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Test Title' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], InnerFormDataDto.prototype, "title", void 0);
class EmailInnerFormDataDto extends (0, swagger_1.PartialType)(InnerFormDataDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test@example.com', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], EmailInnerFormDataDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Subject line', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], EmailInnerFormDataDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Message of the email', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], EmailInnerFormDataDto.prototype, "message", void 0);
class WhatsAppInnerFormDataDto extends (0, swagger_1.PartialType)(EmailInnerFormDataDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Phone Number', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], WhatsAppInnerFormDataDto.prototype, "number", void 0);
class VcardFormDataDto extends (0, swagger_1.PartialType)(URLFormData) {
}
exports.VcardFormDataDto = VcardFormDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Main Street 1' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "globalSearchAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: InnerFormDataDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => InnerFormDataDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", InnerFormDataDto)
], VcardFormDataDto.prototype, "formData", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Phone' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "vCardPlusNumberLabel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '03332455555555' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "vCardPlusPersonalNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Email' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "vCardEmailLabel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'abc@mail.com' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "vCardPersonalEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Website' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "vCardwebLabel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://qr-genc.om' }),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "vCardPersonalWebsite", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Main Street' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "globalStreet", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '221B' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "globalNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '54500' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "globalPostalCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Lahore' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "globalCity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Punjab' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "globalState", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Pakistan' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "globalCountry", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://example.com' }),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "globalUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '31.5497' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "globalLatitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '74.3436' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], VcardFormDataDto.prototype, "globalLongitude", void 0);
class EmailFormDataDto extends (0, swagger_1.PartialType)(URLFormData) {
}
exports.EmailFormDataDto = EmailFormDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: EmailInnerFormDataDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => EmailInnerFormDataDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", EmailInnerFormDataDto)
], EmailFormDataDto.prototype, "formData", void 0);
class TextFormDataDto extends (0, swagger_1.PartialType)(URLFormData) {
}
exports.TextFormDataDto = TextFormDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Message of the email', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], TextFormDataDto.prototype, "message", void 0);
class WhatsAppFormDataDto extends (0, swagger_1.PartialType)(URLFormData) {
}
exports.WhatsAppFormDataDto = WhatsAppFormDataDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: WhatsAppInnerFormDataDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => WhatsAppInnerFormDataDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", WhatsAppInnerFormDataDto)
], WhatsAppFormDataDto.prototype, "formData", void 0);
//# sourceMappingURL=all-qr-types-form-data.dto.js.map