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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountCodesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const discount_code_entity_1 = require("./entities/discount-code.entity");
let DiscountCodesService = class DiscountCodesService {
    constructor(discountCodeRepository) {
        this.discountCodeRepository = discountCodeRepository;
    }
    async create(createDiscountCodeDto) {
        const discountCode = this.discountCodeRepository.create(createDiscountCodeDto);
        return this.discountCodeRepository.save(discountCode);
    }
    async findAll() {
        return this.discountCodeRepository.find();
    }
    async findOne(id) {
        const discountCode = await this.discountCodeRepository.findOne({
            where: { id },
        });
        if (!discountCode) {
            throw new common_1.NotFoundException(`Discount code with ID ${id} not found`);
        }
        return discountCode;
    }
    async findByCode(code) {
        const discountCode = await this.discountCodeRepository.findOne({
            where: { code },
        });
        if (!discountCode) {
            throw new common_1.NotFoundException(`Discount code ${code} not found`);
        }
        return discountCode;
    }
    async update(id, updateDiscountCodeDto) {
        const discountCode = await this.findOne(id);
        const updatedDiscountCode = this.discountCodeRepository.merge(discountCode, updateDiscountCodeDto);
        return this.discountCodeRepository.save(updatedDiscountCode);
    }
    async remove(id) {
        const discountCode = await this.findOne(id);
        await this.discountCodeRepository.remove(discountCode);
    }
    async validateDiscountCode(code) {
        const discountCode = await this.findByCode(code);
        if (discountCode.status !== 1) {
            throw new common_1.NotFoundException('Discount code is not active');
        }
        return discountCode;
    }
    async incrementUsage(code) {
        const discountCode = await this.findByCode(code);
        discountCode.used += 1;
        return this.discountCodeRepository.save(discountCode);
    }
};
exports.DiscountCodesService = DiscountCodesService;
exports.DiscountCodesService = DiscountCodesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(discount_code_entity_1.DiscountCode)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DiscountCodesService);
//# sourceMappingURL=discount-codes.service.js.map