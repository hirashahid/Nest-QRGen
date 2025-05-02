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
exports.VCardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class VCardDto {
}
exports.VCardDto = VCardDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the VCard' }),
    __metadata("design:type", Number)
], VCardDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The ID of the user who owns the VCard',
    }),
    __metadata("design:type", Number)
], VCardDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John Doe',
        description: 'The name of the VCard owner',
    }),
    __metadata("design:type", String)
], VCardDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Software Engineer',
        description: 'The title or position of the VCard owner',
        required: false,
    }),
    __metadata("design:type", String)
], VCardDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+1234567890',
        description: 'The phone number of the VCard owner',
        required: false,
    }),
    __metadata("design:type", String)
], VCardDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'john.doe@example.com',
        description: 'The email address of the VCard owner',
        required: false,
    }),
    __metadata("design:type", String)
], VCardDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123 Main St, City, Country',
        description: 'The physical address',
        required: false,
    }),
    __metadata("design:type", String)
], VCardDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'TechCorp',
        description: 'The organization the VCard owner is affiliated with',
        required: false,
    }),
    __metadata("design:type", String)
], VCardDto.prototype, "organization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com',
        description: 'The website URL',
        required: false,
    }),
    __metadata("design:type", String)
], VCardDto.prototype, "website", void 0);
//# sourceMappingURL=vcard.dto.js.map