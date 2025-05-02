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
exports.ValidateQrCodeQuery = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class ValidateQrCodeQuery {
    constructor() {
        this.page = 1;
        this.per_page = 10;
    }
}
exports.ValidateQrCodeQuery = ValidateQrCodeQuery;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 1,
        description: 'Page number for pagination',
        example: 1
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], ValidateQrCodeQuery.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        default: 10,
        description: 'Number of items per page',
        example: 10
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], ValidateQrCodeQuery.prototype, "per_page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Search term for QR code name', example: 'qr name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidateQrCodeQuery.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        enum: [0, 1],
        description: 'Status of the QR code',
        example: 1
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsEnum)([0, 1]),
    __metadata("design:type", Number)
], ValidateQrCodeQuery.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Favorites status (true or false)',
        example: true
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], ValidateQrCodeQuery.prototype, "favorites", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [String],
        example: ['static', 'dynamic'],
        description: 'Array of QR code types (static or dynamic)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ValidateQrCodeQuery.prototype, "types", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Sort by recent', example: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ValidateQrCodeQuery.prototype, "sort_recent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Sort by name', example: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ValidateQrCodeQuery.prototype, "sort_name", void 0);
//# sourceMappingURL=validate-qr-code-query.dto.js.map