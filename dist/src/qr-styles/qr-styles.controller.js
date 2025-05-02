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
exports.QrStylesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const qr_styles_service_1 = require("./qr-styles.service");
const create_qr_style_dto_1 = require("./dto/create-qr-style.dto");
const update_qr_style_dto_1 = require("./dto/update-qr-style.dto");
const qr_style_entity_1 = require("./entities/qr-style.entity");
let QrStylesController = class QrStylesController {
    constructor(qrStylesService) {
        this.qrStylesService = qrStylesService;
    }
    create(createQrStyleDto) {
        return this.qrStylesService.create(createQrStyleDto);
    }
    findAll() {
        return this.qrStylesService.findAll();
    }
    findOne(id) {
        return this.qrStylesService.findOne(id);
    }
    update(id, updateQrStyleDto) {
        return this.qrStylesService.update(id, updateQrStyleDto);
    }
    remove(id) {
        return this.qrStylesService.remove(id);
    }
};
exports.QrStylesController = QrStylesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new QR Style' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'QR Style created', type: qr_style_entity_1.QrStyle }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qr_style_dto_1.CreateQrStyleDto]),
    __metadata("design:returntype", void 0)
], QrStylesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all QR Styles' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of QR Styles',
        type: [qr_style_entity_1.QrStyle],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QrStylesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single QR Style by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Style found', type: qr_style_entity_1.QrStyle }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Style not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QrStylesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a QR Style' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Style updated', type: qr_style_entity_1.QrStyle }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Style not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_qr_style_dto_1.UpdateQrStyleDto]),
    __metadata("design:returntype", void 0)
], QrStylesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a QR Style' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Style deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Style not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QrStylesController.prototype, "remove", null);
exports.QrStylesController = QrStylesController = __decorate([
    (0, swagger_1.ApiTags)('QR Styles'),
    (0, common_1.Controller)('qr-styles'),
    __metadata("design:paramtypes", [qr_styles_service_1.QrStylesService])
], QrStylesController);
//# sourceMappingURL=qr-styles.controller.js.map