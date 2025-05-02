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
exports.Plan = void 0;
const plan_currency_entity_1 = require("../../plan-currencies/entities/plan-currency.entity");
const typeorm_1 = require("typeorm");
let Plan = class Plan {
};
exports.Plan = Plan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Plan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Plan.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Plan.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'duration_in_days' }),
    __metadata("design:type", Number)
], Plan.prototype, "durationInDays", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Plan.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_default' }),
    __metadata("design:type", Boolean)
], Plan.prototype, "isDefault", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Plan.prototype, "features", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'price_per_month',
        default: 0,
        type: 'decimal',
        precision: 10,
        scale: 2,
    }),
    __metadata("design:type", Number)
], Plan.prototype, "pricePerMonth", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'stripe_price_id' }),
    __metadata("design:type", String)
], Plan.prototype, "stripePriceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'max_qr_codes' }),
    __metadata("design:type", Number)
], Plan.prototype, "maxQrCodes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => plan_currency_entity_1.PlanCurrency, (planCurrency) => planCurrency.plan),
    __metadata("design:type", Array)
], Plan.prototype, "planCurrencies", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Plan.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Plan.prototype, "updatedAt", void 0);
exports.Plan = Plan = __decorate([
    (0, typeorm_1.Entity)('plans')
], Plan);
//# sourceMappingURL=plan.entity.js.map