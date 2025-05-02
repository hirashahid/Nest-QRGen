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
exports.QrResourcesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const qr_resources_service_1 = require("./qr-resources.service");
const create_qr_resource_dto_1 = require("./dto/create-qr-resource.dto");
const update_qr_resource_dto_1 = require("./dto/update-qr-resource.dto");
const qr_resource_dto_1 = require("./dto/qr-resource.dto");
let QrResourcesController = class QrResourcesController {
    constructor(qrResourcesService) {
        this.qrResourcesService = qrResourcesService;
    }
    create(createQrResourceDto) {
        return this.qrResourcesService.create(createQrResourceDto);
    }
    findAll() {
        return this.qrResourcesService.findAll();
    }
    findOne(id) {
        return this.qrResourcesService.findOne(id);
    }
    update(id, updateQrResourceDto) {
        return this.qrResourcesService.update(id, updateQrResourceDto);
    }
    remove(id) {
        return this.qrResourcesService.remove(id);
    }
};
exports.QrResourcesController = QrResourcesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new QR Resource' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'QR Resource created',
        type: qr_resource_dto_1.QrResourceDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qr_resource_dto_1.CreateQrResourceDto]),
    __metadata("design:returntype", void 0)
], QrResourcesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all QR Resources' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of QR Resources',
        type: [qr_resource_dto_1.QrResourceDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QrResourcesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single QR Resource by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'QR Resource found',
        type: qr_resource_dto_1.QrResourceDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Resource not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QrResourcesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a QR Resource' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'QR Resource updated',
        type: qr_resource_dto_1.QrResourceDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Resource not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_qr_resource_dto_1.UpdateQrResourceDto]),
    __metadata("design:returntype", void 0)
], QrResourcesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a QR Resource' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Resource deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Resource not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QrResourcesController.prototype, "remove", null);
exports.QrResourcesController = QrResourcesController = __decorate([
    (0, swagger_1.ApiTags)('QR Resources'),
    (0, common_1.Controller)('qr-resources'),
    __metadata("design:paramtypes", [qr_resources_service_1.QrResourcesService])
], QrResourcesController);
//# sourceMappingURL=qr-resources.controller.js.map