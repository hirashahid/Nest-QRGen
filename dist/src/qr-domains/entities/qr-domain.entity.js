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
exports.QrDomain = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const class_validator_1 = require("class-validator");
const typeorm_2 = require("typeorm");
const qr_code_entity_1 = require("../../qr-codes/entities/qr-code.entity");
const class_transformer_1 = require("class-transformer");
let QrDomain = class QrDomain {
};
exports.QrDomain = QrDomain;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QrDomain.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], QrDomain.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], QrDomain.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name' }),
    __metadata("design:type", String)
], QrDomain.prototype, "domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tls_version' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QrDomain.prototype, "tls_version", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QrDomain.prototype, "cname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QrDomain.prototype, "txt_record", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], QrDomain.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_verified', default: 0 }),
    __metadata("design:type", Number)
], QrDomain.prototype, "is_verified", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => qr_code_entity_1.QrCode, (QrCode) => QrCode.domain),
    __metadata("design:type", Array)
], QrDomain.prototype, "qrCodes", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], QrDomain.prototype, "qr_codes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QrDomain.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QrDomain.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 1 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], QrDomain.prototype, "is_default", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QrDomain.prototype, "cloudflare_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QrDomain.prototype, "txt_record_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], QrDomain.prototype, "cloudflare_data", void 0);
exports.QrDomain = QrDomain = __decorate([
    (0, typeorm_2.Entity)('qr_domains')
], QrDomain);
//# sourceMappingURL=qr-domain.entity.js.map