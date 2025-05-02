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
exports.CrmAutomationController = void 0;
const common_1 = require("@nestjs/common");
const crm_automation_service_1 = require("./crm-automation.service");
const create_crm_automation_dto_1 = require("./dto/create-crm-automation.dto");
const update_crm_automation_dto_1 = require("./dto/update-crm-automation.dto");
const swagger_1 = require("@nestjs/swagger");
let CrmAutomationController = class CrmAutomationController {
    constructor(crmAutomationService) {
        this.crmAutomationService = crmAutomationService;
    }
    create(createCrmAutomationDto) {
        return this.crmAutomationService.create(createCrmAutomationDto);
    }
    findAll() {
        return this.crmAutomationService.findAll();
    }
    findActive() {
        return this.crmAutomationService.findActive();
    }
    findTrigger(trigger, when, userStatus) {
        return this.crmAutomationService.findTrigger(trigger, when, userStatus || '');
    }
    findOne(id) {
        return this.crmAutomationService.findOne(+id);
    }
    update(id, updateCrmAutomationDto) {
        return this.crmAutomationService.update(+id, updateCrmAutomationDto);
    }
    remove(id) {
        return this.crmAutomationService.remove(+id);
    }
};
exports.CrmAutomationController = CrmAutomationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_crm_automation_dto_1.CreateCrmAutomationDto }),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new CRM automation' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The CRM automation has been successfully created.',
        type: create_crm_automation_dto_1.CreateCrmAutomationDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_crm_automation_dto_1.CreateCrmAutomationDto]),
    __metadata("design:returntype", void 0)
], CrmAutomationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all CRM automations' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The CRM automations have been successfully retrieved.',
        type: [create_crm_automation_dto_1.CreateCrmAutomationDto],
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CrmAutomationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    (0, swagger_1.ApiOperation)({ summary: 'Get active CRM automations' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The active CRM automations have been successfully retrieved.',
        type: [create_crm_automation_dto_1.CreateCrmAutomationDto],
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CrmAutomationController.prototype, "findActive", null);
__decorate([
    (0, common_1.Get)('trigger'),
    __param(0, (0, common_1.Query)('trigger')),
    __param(1, (0, common_1.Query)('when')),
    __param(2, (0, common_1.Query)('user_status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], CrmAutomationController.prototype, "findTrigger", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a CRM automation by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The CRM automation has been successfully retrieved.',
        type: create_crm_automation_dto_1.CreateCrmAutomationDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CrmAutomationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a CRM automation by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The CRM automation has been successfully updated.',
        type: create_crm_automation_dto_1.CreateCrmAutomationDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_crm_automation_dto_1.UpdateCrmAutomationDto]),
    __metadata("design:returntype", void 0)
], CrmAutomationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a CRM automation by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The CRM automation has been successfully deleted.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CrmAutomationController.prototype, "remove", null);
exports.CrmAutomationController = CrmAutomationController = __decorate([
    (0, swagger_1.ApiTags)('CRM Automation'),
    (0, common_1.Controller)('crm-automation'),
    __metadata("design:paramtypes", [crm_automation_service_1.CrmAutomationService])
], CrmAutomationController);
//# sourceMappingURL=crm-automation.controller.js.map