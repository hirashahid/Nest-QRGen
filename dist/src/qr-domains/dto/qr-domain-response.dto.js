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
exports.QrDomainByUserDto = exports.QrDomainResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_qr_domain_dto_1 = require("./create-qr-domain.dto");
const class_validator_1 = require("class-validator");
class QrDomainResponseDto extends (0, swagger_1.PartialType)(create_qr_domain_dto_1.CreateQrDomainDto) {
}
exports.QrDomainResponseDto = QrDomainResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id of the Domain',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], QrDomainResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cname of the Domain',
        example: 'cname.stage.qr-gen.com',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QrDomainResponseDto.prototype, "cname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Txt record of the Domain',
        example: 'txt.stage.qr-gen.com',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QrDomainResponseDto.prototype, "txt_record", void 0);
class QrDomainByUserDto {
}
exports.QrDomainByUserDto = QrDomainByUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User ID associated with the domain',
        example: 1,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], QrDomainByUserDto.prototype, "userId", void 0);
//# sourceMappingURL=qr-domain-response.dto.js.map