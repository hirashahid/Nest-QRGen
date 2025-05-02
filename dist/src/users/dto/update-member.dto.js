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
exports.UpdateMemberDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateMemberDto {
}
exports.UpdateMemberDto = UpdateMemberDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Role ID of the member' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateMemberDto.prototype, "memberRoleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1, 2], description: 'Array of Module IDs' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], UpdateMemberDto.prototype, "modules", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Can delete account flag' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateMemberDto.prototype, "canDeleteAccount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: { create: true, edit: true, delete: true },
        description: 'Permissions object',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateMemberDto.prototype, "userPermissions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'folders',
        example: [1, 2],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], UpdateMemberDto.prototype, "folders", void 0);
//# sourceMappingURL=update-member.dto.js.map