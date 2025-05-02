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
exports.VCardsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const vcard_entity_1 = require("./entities/vcard.entity");
const users_service_1 = require("../users/users.service");
let VCardsService = class VCardsService {
    constructor(vCardRepository, userService) {
        this.vCardRepository = vCardRepository;
        this.userService = userService;
    }
    async create(dto) {
        await this.userService.findOne(dto.user_id);
        const vCard = this.vCardRepository.create(dto);
        return await this.vCardRepository.save(vCard);
    }
    async findAll(userId) {
        await this.userService.findOne(userId);
        return await this.vCardRepository.find({ where: { user_id: userId } });
    }
    async findOne(id) {
        const vCard = await this.vCardRepository.findOne({ where: { id } });
        if (!vCard)
            throw new common_1.NotFoundException('VCard not found');
        return vCard;
    }
    async update(id, dto) {
        await this.findOne(id);
        await this.vCardRepository.update(id, dto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        const vCard = await this.vCardRepository.delete(id);
        if (!vCard.affected) {
            throw new common_1.HttpException('VCard not deleted', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'VCard is deleted' };
    }
};
exports.VCardsService = VCardsService;
exports.VCardsService = VCardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vcard_entity_1.VCard)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], VCardsService);
//# sourceMappingURL=vcards.service.js.map