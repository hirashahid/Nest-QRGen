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
exports.QrLogosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const qr_logos_service_1 = require("./qr-logos.service");
const create_qr_logo_dto_1 = require("./dto/create-qr-logo.dto");
const update_qr_logo_dto_1 = require("./dto/update-qr-logo.dto");
const qr_logo_dto_1 = require("./dto/qr-logo.dto");
let QrLogosController = class QrLogosController {
    constructor(qrLogosService) {
        this.qrLogosService = qrLogosService;
    }
    create(createQrLogoDto) {
        return this.qrLogosService.create(createQrLogoDto);
    }
    findAll() {
        return this.qrLogosService.findAll();
    }
    findOne(id) {
        return this.qrLogosService.findOne(id);
    }
    update(id, updateQrLogoDto) {
        return this.qrLogosService.update(id, updateQrLogoDto);
    }
    remove(id) {
        return this.qrLogosService.remove(id);
    }
};
exports.QrLogosController = QrLogosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new QR Logo' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'QR Logo created', type: qr_logo_dto_1.QrLogoDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qr_logo_dto_1.CreateQrLogoDto]),
    __metadata("design:returntype", void 0)
], QrLogosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all QR Logos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of QR Logos',
        type: [qr_logo_dto_1.QrLogoDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QrLogosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single QR Logo by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Logo found', type: qr_logo_dto_1.QrLogoDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Logo not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QrLogosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a QR Logo' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Logo updated', type: qr_logo_dto_1.QrLogoDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Logo not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_qr_logo_dto_1.UpdateQrLogoDto]),
    __metadata("design:returntype", void 0)
], QrLogosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a QR Logo' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Logo deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Logo not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QrLogosController.prototype, "remove", null);
exports.QrLogosController = QrLogosController = __decorate([
    (0, swagger_1.ApiTags)('QR Logos'),
    (0, common_1.Controller)('qr-logos'),
    __metadata("design:paramtypes", [qr_logos_service_1.QrLogosService])
], QrLogosController);
//# sourceMappingURL=qr-logos.controller.js.map