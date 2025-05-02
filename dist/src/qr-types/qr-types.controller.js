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
exports.QrTypeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const qr_types_service_1 = require("./qr-types.service");
const create_qr_type_dto_1 = require("./dto/create-qr-type.dto");
const qr_type_entity_1 = require("./entities/qr-type.entity");
const update_qr_type_dto_1 = require("./dto/update-qr-type.dto");
let QrTypeController = class QrTypeController {
    constructor(qrTypeService) {
        this.qrTypeService = qrTypeService;
    }
    create(createQrTypeDto) {
        return this.qrTypeService.create(createQrTypeDto);
    }
    findAll() {
        return this.qrTypeService.findAll();
    }
    findOne(id) {
        return this.qrTypeService.findOne(id);
    }
    update(id, updateQrTypeDto) {
        return this.qrTypeService.update(id, updateQrTypeDto);
    }
    remove(id) {
        return this.qrTypeService.remove(id);
    }
};
exports.QrTypeController = QrTypeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new QR Type' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'QR Type created', type: qr_type_entity_1.QrType }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qr_type_dto_1.CreateQrTypeDto]),
    __metadata("design:returntype", Promise)
], QrTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all QR Types' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of all QR Types',
        type: [qr_type_entity_1.QrType],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QrTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single QR Type by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Type found', type: qr_type_entity_1.QrType }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QrTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing QR Type' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Type updated', type: qr_type_entity_1.QrType }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_qr_type_dto_1.UpdateQrTypeDto]),
    __metadata("design:returntype", Promise)
], QrTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete a QR Type' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Type soft deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QrTypeController.prototype, "remove", null);
exports.QrTypeController = QrTypeController = __decorate([
    (0, swagger_1.ApiTags)('QR Types'),
    (0, common_1.Controller)('qr-types'),
    __metadata("design:paramtypes", [qr_types_service_1.QrTypeService])
], QrTypeController);
//# sourceMappingURL=qr-types.controller.js.map