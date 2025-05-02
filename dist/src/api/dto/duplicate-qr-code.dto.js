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
exports.DuplicateQrCodeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../constants");
class DuplicateQrCodeDto {
}
exports.DuplicateQrCodeDto = DuplicateQrCodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'QR ID' }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)({
        message: 'id must be a valid integer without special characters or letters',
    }),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(constants_1.SAFE_INTEGER_MAX),
    __metadata("design:type", Number)
], DuplicateQrCodeDto.prototype, "id", void 0);
//# sourceMappingURL=duplicate-qr-code.dto.js.map