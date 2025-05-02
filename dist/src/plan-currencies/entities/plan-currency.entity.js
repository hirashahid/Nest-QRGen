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
exports.PlanCurrency = void 0;
const e_country_code_iso_2_1 = require("../../enums/e-country-code-iso-2");
const plan_entity_1 = require("../../plans/entities/plan.entity");
const typeorm_1 = require("typeorm");
let PlanCurrency = class PlanCurrency {
};
exports.PlanCurrency = PlanCurrency;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PlanCurrency.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'plan_id', type: 'int', nullable: false }),
    __metadata("design:type", Number)
], PlanCurrency.prototype, "planId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plan_entity_1.Plan, (user) => user),
    (0, typeorm_1.JoinColumn)({ name: 'plan_id' }),
    __metadata("design:type", plan_entity_1.Plan)
], PlanCurrency.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'currency_code',
        type: 'varchar',
        length: 3,
        nullable: false,
    }),
    __metadata("design:type", String)
], PlanCurrency.prototype, "currencyCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: false }),
    __metadata("design:type", Number)
], PlanCurrency.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'country_code', type: 'enum', enum: e_country_code_iso_2_1.ECountryCodeIso2 }),
    __metadata("design:type", String)
], PlanCurrency.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'per_month_price',
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false,
    }),
    __metadata("design:type", Number)
], PlanCurrency.prototype, "perMonthPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'stripe_price_id',
        type: 'varchar',
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], PlanCurrency.prototype, "stripePriceId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], PlanCurrency.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], PlanCurrency.prototype, "updatedAt", void 0);
exports.PlanCurrency = PlanCurrency = __decorate([
    (0, typeorm_1.Entity)('plan_currencies')
], PlanCurrency);
//# sourceMappingURL=plan-currency.entity.js.map