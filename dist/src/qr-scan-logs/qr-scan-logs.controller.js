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
exports.QrScanLogController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const qr_scan_logs_service_1 = require("./qr-scan-logs.service");
const create_qr_scan_log_dto_1 = require("./dto/create-qr-scan-log.dto");
const analytics_dto_1 = require("./dto/analytics.dto");
const authentication_guard_1 = require("../guards/authentication.guard");
let QrScanLogController = class QrScanLogController {
    constructor(qrScanLogService) {
        this.qrScanLogService = qrScanLogService;
    }
    async store(createQrScanLogDto) {
        return this.qrScanLogService.create(createQrScanLogDto);
    }
    async analytics(analyticsDto) {
        return this.qrScanLogService.analytics(analyticsDto);
    }
};
exports.QrScanLogController = QrScanLogController;
__decorate([
    (0, common_1.Post)('store'),
    (0, swagger_1.ApiOperation)({ summary: 'Store a new QrScanLog' }),
    (0, swagger_1.ApiBody)({ type: create_qr_scan_log_dto_1.CreateQrScanLogDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'QR Scan Log created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qr_scan_log_dto_1.CreateQrScanLogDto]),
    __metadata("design:returntype", Promise)
], QrScanLogController.prototype, "store", null);
__decorate([
    (0, common_1.Post)('analytics'),
    (0, swagger_1.ApiOperation)({ summary: 'Get analytics data for a QR code' }),
    (0, swagger_1.ApiBody)({ type: analytics_dto_1.AnalyticsDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Analytics data retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No QR Codes found' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.AnalyticsDto]),
    __metadata("design:returntype", Promise)
], QrScanLogController.prototype, "analytics", null);
exports.QrScanLogController = QrScanLogController = __decorate([
    (0, swagger_1.ApiTags)('QR Scan Log'),
    (0, common_1.Controller)('qr-scan-log'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [qr_scan_logs_service_1.QrScanLogService])
], QrScanLogController);
//# sourceMappingURL=qr-scan-logs.controller.js.map