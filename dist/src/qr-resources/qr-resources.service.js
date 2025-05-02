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
exports.QrResourcesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const qr_resource_entity_1 = require("./entities/qr-resource.entity");
let QrResourcesService = class QrResourcesService {
    constructor(qrResourceRepository) {
        this.qrResourceRepository = qrResourceRepository;
    }
    async create(dto) {
        const qrResource = this.qrResourceRepository.create(dto);
        return await this.qrResourceRepository.save(qrResource);
    }
    async findAll() {
        return await this.qrResourceRepository.find();
    }
    async findOne(id) {
        const qrResource = await this.qrResourceRepository.findOne({
            where: { id },
        });
        if (!qrResource)
            throw new common_1.NotFoundException('QR Resource not found');
        return qrResource;
    }
    async update(id, dto) {
        await this.findOne(id);
        await this.qrResourceRepository.update(id, dto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        const deletedQrResource = await this.qrResourceRepository.delete(id);
        if (!deletedQrResource.affected) {
            throw new common_1.HttpException('Resource not deleted', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'Resource is deleted' };
    }
};
exports.QrResourcesService = QrResourcesService;
exports.QrResourcesService = QrResourcesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(qr_resource_entity_1.QrResource)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], QrResourcesService);
//# sourceMappingURL=qr-resources.service.js.map