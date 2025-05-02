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
exports.VideoFormDataDto = exports.WelcomeScreenImageDto = exports.VideoFileDto = exports.VideoButtonDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class VideoButtonDto {
}
exports.VideoButtonDto = VideoButtonDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'button text' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VideoButtonDto.prototype, "videobutton", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'button url' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VideoButtonDto.prototype, "buttonurl", void 0);
class VideoFileDto {
}
exports.VideoFileDto = VideoFileDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'name of file' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VideoFileDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'file url' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VideoFileDto.prototype, "file", void 0);
class WelcomeScreenImageDto {
}
exports.WelcomeScreenImageDto = WelcomeScreenImageDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'image name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WelcomeScreenImageDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'image url' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WelcomeScreenImageDto.prototype, "file", void 0);
class VideoFormDataDto {
}
exports.VideoFormDataDto = VideoFormDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'horizontalAlign' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VideoFormDataDto.prototype, "imageGridType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [VideoButtonDto], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => VideoButtonDto),
    __metadata("design:type", Array)
], VideoFormDataDto.prototype, "videobuttons", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: "qr code name" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VideoFormDataDto.prototype, "qrName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'Lato' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VideoFormDataDto.prototype, "titleFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'Lato' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VideoFormDataDto.prototype, "TextFontFamily", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'video URL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], VideoFormDataDto.prototype, "Video_URL", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [VideoFileDto], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => VideoFileDto),
    __metadata("design:type", Array)
], VideoFormDataDto.prototype, "videoFiles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'video company name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VideoFormDataDto.prototype, "videoCropCompany", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'video tech' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VideoFormDataDto.prototype, "videoTech", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'video description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VideoFormDataDto.prototype, "videoDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [WelcomeScreenImageDto], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => WelcomeScreenImageDto),
    __metadata("design:type", Array)
], VideoFormDataDto.prototype, "welcomeScreenImage", void 0);
//# sourceMappingURL=video-form-data.dto.js.map