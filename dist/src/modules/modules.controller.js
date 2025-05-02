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
exports.ModulesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const modules_service_1 = require("./modules.service");
const create_module_dto_1 = require("./dto/create-module.dto");
const update_module_dto_1 = require("./dto/update-module.dto");
const module_entity_1 = require("./entities/module.entity");
let ModulesController = class ModulesController {
    constructor(modulesService) {
        this.modulesService = modulesService;
    }
    create(createModuleDto) {
        return this.modulesService.create(createModuleDto);
    }
    findAll() {
        return this.modulesService.findAll();
    }
    findOne(id) {
        return this.modulesService.findOne(id);
    }
    update(id, updateModuleDto) {
        return this.modulesService.update(id, updateModuleDto);
    }
    remove(id) {
        return this.modulesService.remove(id);
    }
};
exports.ModulesController = ModulesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new module' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Module created successfully',
        type: module_entity_1.Module,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_module_dto_1.CreateModuleDto]),
    __metadata("design:returntype", void 0)
], ModulesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all modules' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of modules', type: [module_entity_1.Module] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ModulesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a module by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Module found', type: module_entity_1.Module }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Module not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ModulesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a module by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Module updated successfully',
        type: module_entity_1.Module,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Module not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_module_dto_1.UpdateModuleDto]),
    __metadata("design:returntype", void 0)
], ModulesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a module by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Module deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Module not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ModulesController.prototype, "remove", null);
exports.ModulesController = ModulesController = __decorate([
    (0, swagger_1.ApiTags)('Modules'),
    (0, common_1.Controller)('modules'),
    __metadata("design:paramtypes", [modules_service_1.ModulesService])
], ModulesController);
//# sourceMappingURL=modules.controller.js.map