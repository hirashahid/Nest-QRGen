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
exports.CreateQrFolderPublicDto = exports.CreateQrFolderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateQrFolderDto {
}
exports.CreateQrFolderDto = CreateQrFolderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'QR Folder name',
        description: 'The name of the QR folder',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQrFolderDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The status of the folder (active/inactive)',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateQrFolderDto.prototype, "status", void 0);
class CreateQrFolderPublicDto {
}
exports.CreateQrFolderPublicDto = CreateQrFolderPublicDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'QR Folder name',
        description: 'The name of the QR folder',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQrFolderPublicDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The status of the folder (0,1)',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateQrFolderPublicDto.prototype, "status", void 0);
//# sourceMappingURL=create-qr-folder.dto.js.map