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
exports.QrResourceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class QrResourceDto {
}
exports.QrResourceDto = QrResourceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the QR resource' }),
    __metadata("design:type", Number)
], QrResourceDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Sample QR Code',
        description: 'The name of the QR resource',
    }),
    __metadata("design:type", String)
], QrResourceDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'This is a sample QR code.',
        description: 'The description of the QR resource',
    }),
    __metadata("design:type", String)
], QrResourceDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The status of the QR resource' }),
    __metadata("design:type", Number)
], QrResourceDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-10-15 12:45:00',
        description: 'The creation timestamp',
    }),
    __metadata("design:type", String)
], QrResourceDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-10-15 13:45:00',
        description: 'The last update timestamp',
    }),
    __metadata("design:type", String)
], QrResourceDto.prototype, "updated_at", void 0);
//# sourceMappingURL=qr-resource.dto.js.map