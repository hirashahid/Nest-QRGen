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
exports.QrType = void 0;
const typeorm_1 = require("typeorm");
let QrType = class QrType {
};
exports.QrType = QrType;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QrType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], QrType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', nullable: true }),
    __metadata("design:type", String)
], QrType.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'icon', nullable: true }),
    __metadata("design:type", String)
], QrType.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', default: true }),
    __metadata("design:type", Boolean)
], QrType.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'thumbnail', nullable: true }),
    __metadata("design:type", String)
], QrType.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'display_order', default: 0 }),
    __metadata("design:type", Number)
], QrType.prototype, "displayOrder", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', default: 'static' }),
    __metadata("design:type", String)
], QrType.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'card_name', nullable: true }),
    __metadata("design:type", String)
], QrType.prototype, "card_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bulk_file_sample', nullable: true }),
    __metadata("design:type", String)
], QrType.prototype, "bulk_file_sample", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], QrType.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], QrType.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], QrType.prototype, "deletedAt", void 0);
exports.QrType = QrType = __decorate([
    (0, typeorm_1.Entity)()
], QrType);
//# sourceMappingURL=qr-type.entity.js.map