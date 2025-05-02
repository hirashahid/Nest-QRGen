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
exports.UserDiscountsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_discount_entity_1 = require("./entities/user-discount.entity");
let UserDiscountsService = class UserDiscountsService {
    constructor(userDiscountRepository) {
        this.userDiscountRepository = userDiscountRepository;
    }
    async create(createUserDiscountDto) {
        await this.userDiscountRepository.update({ userId: createUserDiscountDto.userId }, { status: 0 });
        const userDiscount = this.userDiscountRepository.create(createUserDiscountDto);
        return this.userDiscountRepository.save(userDiscount);
    }
    async findAll() {
        return this.userDiscountRepository.find();
    }
    async findOne(id) {
        const userDiscount = await this.userDiscountRepository.findOne({
            where: { id },
        });
        if (!userDiscount) {
            throw new common_1.NotFoundException(`User Discount with ID ${id} not found`);
        }
        return userDiscount;
    }
    async update(id, updateUserDiscountDto) {
        const userDiscount = await this.findOne(id);
        const updatedUserDiscount = this.userDiscountRepository.merge(userDiscount, updateUserDiscountDto);
        return this.userDiscountRepository.save(updatedUserDiscount);
    }
    async remove(id) {
        const userDiscount = await this.findOne(id);
        await this.userDiscountRepository.remove(userDiscount);
    }
    async findByUserId(userId) {
        return this.userDiscountRepository.find({ where: { userId } });
    }
    async findActiveDiscounts(userId) {
        const now = new Date();
        return this.userDiscountRepository
            .createQueryBuilder('userDiscount')
            .where('userDiscount.user_id = :userId', { userId })
            .andWhere('userDiscount.expires_at > :now', { now })
            .andWhere('userDiscount.status = :status', { status: 1 })
            .getMany();
    }
};
exports.UserDiscountsService = UserDiscountsService;
exports.UserDiscountsService = UserDiscountsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_discount_entity_1.UserDiscount)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserDiscountsService);
//# sourceMappingURL=user-discounts.service.js.map