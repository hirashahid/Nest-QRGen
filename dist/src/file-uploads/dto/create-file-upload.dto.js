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
exports.CreateFileUploadDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateFileUploadDto {
}
exports.CreateFileUploadDto = CreateFileUploadDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The original name of the file',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFileUploadDto.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The path where the file is stored',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFileUploadDto.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The mime type of the file',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFileUploadDto.prototype, "mimetype", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The size of the uploaded file in bytes',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateFileUploadDto.prototype, "size", void 0);
//# sourceMappingURL=create-file-upload.dto.js.map