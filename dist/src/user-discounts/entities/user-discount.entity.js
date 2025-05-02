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
exports.UserDiscount = void 0;
const typeorm_1 = require("typeorm");
const discount_code_entity_1 = require("../../discount-codes/entities/discount-code.entity");
let UserDiscount = class UserDiscount {
};
exports.UserDiscount = UserDiscount;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserDiscount.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], UserDiscount.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'discount_id' }),
    __metadata("design:type", Number)
], UserDiscount.prototype, "discountId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => discount_code_entity_1.DiscountCode),
    (0, typeorm_1.JoinColumn)({ name: 'discount_id' }),
    __metadata("design:type", discount_code_entity_1.DiscountCode)
], UserDiscount.prototype, "discountCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', name: 'redeemed_at', nullable: true }),
    __metadata("design:type", Date)
], UserDiscount.prototype, "redeemedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', name: 'expires_at', nullable: true }),
    __metadata("design:type", Date)
], UserDiscount.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], UserDiscount.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserDiscount.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], UserDiscount.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], UserDiscount.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], UserDiscount.prototype, "updatedAt", void 0);
exports.UserDiscount = UserDiscount = __decorate([
    (0, typeorm_1.Entity)('user_discounts')
], UserDiscount);
//# sourceMappingURL=user-discount.entity.js.map