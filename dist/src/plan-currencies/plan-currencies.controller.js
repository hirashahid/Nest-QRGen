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
exports.PlanCurrenciesController = void 0;
const common_1 = require("@nestjs/common");
const plan_currencies_service_1 = require("./plan-currencies.service");
const create_plan_currency_dto_1 = require("./dto/create-plan-currency.dto");
const update_plan_currency_dto_1 = require("./dto/update-plan-currency.dto");
const swagger_1 = require("@nestjs/swagger");
const plan_currency_entity_1 = require("./entities/plan-currency.entity");
let PlanCurrenciesController = class PlanCurrenciesController {
    constructor(planCurrenciesService) {
        this.planCurrenciesService = planCurrenciesService;
    }
    create(createPlanCurrencyDto) {
        return this.planCurrenciesService.create(createPlanCurrencyDto);
    }
    findAll() {
        return this.planCurrenciesService.findAll();
    }
    findOne(id) {
        return this.planCurrenciesService.findOne(+id);
    }
    update(id, updatePlanCurrencyDto) {
        return this.planCurrenciesService.update(+id, updatePlanCurrencyDto);
    }
    remove(id) {
        return this.planCurrenciesService.remove(+id);
    }
};
exports.PlanCurrenciesController = PlanCurrenciesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new plan currency' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Plan currency created successfully',
        type: plan_currency_entity_1.PlanCurrency,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_plan_currency_dto_1.CreatePlanCurrencyDto]),
    __metadata("design:returntype", void 0)
], PlanCurrenciesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all plan currencies' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully retrieved plan currencies',
        type: [plan_currency_entity_1.PlanCurrency],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlanCurrenciesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a plan currency by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully retrieved plan currency',
        type: plan_currency_entity_1.PlanCurrency,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlanCurrenciesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a plan currency by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully updated plan currency',
        type: plan_currency_entity_1.PlanCurrency,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_plan_currency_dto_1.UpdatePlanCurrencyDto]),
    __metadata("design:returntype", void 0)
], PlanCurrenciesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a plan currency by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully deleted plan currency',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlanCurrenciesController.prototype, "remove", null);
exports.PlanCurrenciesController = PlanCurrenciesController = __decorate([
    (0, swagger_1.ApiTags)('Plan Currencies'),
    (0, common_1.Controller)('plan-currencies'),
    __metadata("design:paramtypes", [plan_currencies_service_1.PlanCurrenciesService])
], PlanCurrenciesController);
//# sourceMappingURL=plan-currencies.controller.js.map