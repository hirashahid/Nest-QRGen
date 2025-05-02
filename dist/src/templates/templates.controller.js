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
exports.TemplatesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const update_template_dto_1 = require("./dto/update-template.dto");
const create_template_dto_1 = require("./dto/create-template.dto");
const template_entity_1 = require("./entities/template.entity");
const templates_service_1 = require("./templates.service");
const template_response_dto_1 = require("./dto/template-response.dto");
const constants_1 = require("../constants");
const authentication_guard_1 = require("../guards/authentication.guard");
const get_current_user_id_decorator_1 = require("../decorators/get-current-user-id.decorator");
let TemplatesController = class TemplatesController {
    constructor(templatesService) {
        this.templatesService = templatesService;
    }
    create(createTemplateDto, userId) {
        return this.templatesService.create(createTemplateDto, userId);
    }
    getAllTemplates(dto) {
        return this.templatesService.findAllByUserId(dto.id);
    }
    getTemplateById(dto) {
        return this.templatesService.findOne(dto.id);
    }
    updateTemplate(dto, updateTemplateDto, userId) {
        return this.templatesService.update(dto.id, updateTemplateDto, userId);
    }
    deleteTemplate(dto, userId) {
        return this.templatesService.remove(dto.id, userId);
    }
};
exports.TemplatesController = TemplatesController;
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new template' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Template successfully created',
        type: template_response_dto_1.TemplateResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_template_dto_1.CreateTemplateDto, Number]),
    __metadata("design:returntype", Promise)
], TemplatesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all templates by user id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of templates',
        type: [template_response_dto_1.TemplateResponseDto],
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto]),
    __metadata("design:returntype", Promise)
], TemplatesController.prototype, "getAllTemplates", null);
__decorate([
    (0, common_1.Get)('get-by-id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a template by ID' }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, description: 'Template ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Template found',
        type: template_response_dto_1.TemplateResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Template not found' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto]),
    __metadata("design:returntype", Promise)
], TemplatesController.prototype, "getTemplateById", null);
__decorate([
    (0, common_1.Patch)('update'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a template by ID' }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, description: 'Template ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Template successfully updated',
        type: template_entity_1.Template,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Template not found' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto,
        update_template_dto_1.UpdateTemplateDto, Number]),
    __metadata("design:returntype", Promise)
], TemplatesController.prototype, "updateTemplate", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, description: 'Template ID' }),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a template by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Template successfully deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Template not found' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto, Number]),
    __metadata("design:returntype", Promise)
], TemplatesController.prototype, "deleteTemplate", null);
exports.TemplatesController = TemplatesController = __decorate([
    (0, swagger_1.ApiTags)('Templates'),
    (0, common_1.Controller)('templates'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [templates_service_1.TemplatesService])
], TemplatesController);
//# sourceMappingURL=templates.controller.js.map