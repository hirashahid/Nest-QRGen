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
exports.QrFolderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class QrFolderDto {
}
exports.QrFolderDto = QrFolderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the QR folder' }),
    __metadata("design:type", Number)
], QrFolderDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'QR Folder name',
        description: 'The name of the QR folder',
    }),
    __metadata("design:type", String)
], QrFolderDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The ID of the user who owns the folder',
    }),
    __metadata("design:type", Number)
], QrFolderDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The status of the folder' }),
    __metadata("design:type", Number)
], QrFolderDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The ID of the parent folder (null if root folder)',
        required: false,
    }),
    __metadata("design:type", Number)
], QrFolderDto.prototype, "parent_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-10-15 12:45:00',
        description: 'The creation timestamp',
    }),
    __metadata("design:type", String)
], QrFolderDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-10-15 13:45:00',
        description: 'The last update timestamp',
    }),
    __metadata("design:type", String)
], QrFolderDto.prototype, "updated_at", void 0);
//# sourceMappingURL=qr-folder.dto.js.map