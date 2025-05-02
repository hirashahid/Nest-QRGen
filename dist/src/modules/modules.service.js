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
exports.ModulesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const module_entity_1 = require("./entities/module.entity");
let ModulesService = class ModulesService {
    constructor(moduleRepository) {
        this.moduleRepository = moduleRepository;
    }
    async create(createModuleDto) {
        const existingModule = await this.moduleRepository.findOne({
            where: { name: createModuleDto.name },
        });
        if (existingModule) {
            throw new common_1.BadRequestException(`Module with name '${createModuleDto.name}' already exists`);
        }
        const module = this.moduleRepository.create(createModuleDto);
        return this.moduleRepository.save(module);
    }
    async findAll() {
        return this.moduleRepository.find();
    }
    async findOne(id) {
        const module = await this.moduleRepository.findOne({ where: { id } });
        if (!module) {
            throw new common_1.NotFoundException(`Module with ID ${id} not found`);
        }
        return module;
    }
    async findByIds(moduleIds) {
        return this.moduleRepository.find({
            where: { id: (0, typeorm_2.In)(moduleIds) },
            select: {
                id: true,
                name: true,
            },
        });
    }
    async update(id, updateModuleDto) {
        await this.findOne(id);
        await this.moduleRepository.update(id, updateModuleDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        const page = await this.moduleRepository.delete(id);
        if (!page.affected) {
            throw new common_1.HttpException('Module not deleted', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'Module is deleted' };
    }
};
exports.ModulesService = ModulesService;
exports.ModulesService = ModulesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(module_entity_1.Module)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ModulesService);
//# sourceMappingURL=modules.service.js.map