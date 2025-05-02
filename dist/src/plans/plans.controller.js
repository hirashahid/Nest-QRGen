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
exports.PlansController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const plans_service_1 = require("./plans.service");
const create_plan_dto_1 = require("./dto/create-plan.dto");
const update_plan_dto_1 = require("./dto/update-plan.dto");
const swagger_2 = require("@nestjs/swagger");
const plan_response_dto_1 = require("./dto/plan-response.dto");
const plan_entity_1 = require("./entities/plan.entity");
const get_by_country_code_dto_1 = require("./dto/get-by-country-code.dto");
let PlansController = class PlansController {
    constructor(plansService) {
        this.plansService = plansService;
    }
    create(createPlanDto) {
        return this.plansService.create(createPlanDto);
    }
    async getPlansByCountryCode(dto) {
        return this.plansService.findAll(dto.countryCode);
    }
    findOne(id) {
        return this.plansService.findOne(+id);
    }
    update(id, updatePlanDto) {
        return this.plansService.update(+id, updatePlanDto);
    }
    async getPlansByIpAddress(ipAddress) {
        return this.plansService.findByIpAddress(ipAddress);
    }
    remove(id) {
        return this.plansService.remove(+id);
    }
};
exports.PlansController = PlansController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_2.ApiOperation)({ summary: 'Create a new plan' }),
    (0, swagger_2.ApiResponse)({ status: 201, description: 'Plan created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_plan_dto_1.CreatePlanDto]),
    __metadata("design:returntype", void 0)
], PlansController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('by-country-code'),
    (0, swagger_1.ApiQuery)({ name: 'countryCode', description: 'Country Code' }),
    (0, swagger_2.ApiOperation)({ summary: 'Get plans by Country Code' }),
    (0, swagger_2.ApiResponse)({
        status: 200,
        description: 'List of available plans based on Country Code',
        type: [plan_entity_1.Plan],
    }),
    (0, swagger_2.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_by_country_code_dto_1.GetByCountryCodeDto]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "getPlansByCountryCode", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_2.ApiResponse)({ status: 200, type: plan_response_dto_1.PlanResponseDto }),
    (0, swagger_2.ApiOperation)({ summary: 'Get a plan by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlansController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_2.ApiResponse)({ status: 200, type: plan_response_dto_1.PlanResponseDto }),
    (0, swagger_2.ApiOperation)({ summary: 'Update a plan by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_plan_dto_1.UpdatePlanDto]),
    __metadata("design:returntype", void 0)
], PlansController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('by-ip-address/:ipAddress'),
    (0, swagger_2.ApiOperation)({ summary: 'Get plans by IP address' }),
    (0, swagger_2.ApiResponse)({
        status: 200,
        description: 'List of available plans based on IP address',
        type: [plan_entity_1.Plan],
    }),
    (0, swagger_2.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Param)('ipAddress')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "getPlansByIpAddress", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_2.ApiResponse)({ status: 200, type: plan_response_dto_1.PlanResponseDto }),
    (0, swagger_2.ApiOperation)({ summary: 'Delete a plan by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlansController.prototype, "remove", null);
exports.PlansController = PlansController = __decorate([
    (0, swagger_1.ApiTags)('Plans'),
    (0, common_1.Controller)('plans'),
    __metadata("design:paramtypes", [plans_service_1.PlansService])
], PlansController);
//# sourceMappingURL=plans.controller.js.map