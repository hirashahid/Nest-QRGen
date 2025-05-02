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
exports.CrmAutomationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const crm_automation_entity_1 = require("./entities/crm-automation.entity");
let CrmAutomationService = class CrmAutomationService {
    constructor(crmAutomationRepository) {
        this.crmAutomationRepository = crmAutomationRepository;
    }
    async create(createCrmAutomationDto) {
        const automation = this.crmAutomationRepository.create(createCrmAutomationDto);
        return await this.crmAutomationRepository.save(automation);
    }
    async findAll() {
        return await this.crmAutomationRepository.find();
    }
    async findActive() {
        return await this.crmAutomationRepository.find({ where: { status: 1 } });
    }
    async findTrigger(trigger, when, userStatus) {
        let condition = {};
        if (userStatus) {
            condition = { trigger: trigger, when: when, user_status: userStatus };
        }
        else {
            condition = { trigger: trigger, when: when };
        }
        return await this.crmAutomationRepository.find({ where: condition });
    }
    async findOne(id) {
        const automation = await this.crmAutomationRepository.findOne({
            where: { id },
        });
        if (!automation) {
            throw new common_1.NotFoundException(`CRM Automation with ID ${id} not found`);
        }
        return automation;
    }
    async update(id, updateCrmAutomationDto) {
        const automation = await this.findOne(id);
        const updatedAutomation = this.crmAutomationRepository.merge(automation, updateCrmAutomationDto);
        return await this.crmAutomationRepository.save(updatedAutomation);
    }
    async remove(id) {
        const result = await this.crmAutomationRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`CRM Automation with ID ${id} not found`);
        }
    }
};
exports.CrmAutomationService = CrmAutomationService;
exports.CrmAutomationService = CrmAutomationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(crm_automation_entity_1.CrmAutomation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CrmAutomationService);
//# sourceMappingURL=crm-automation.service.js.map