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
exports.QrCodeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const qr_codes_service_1 = require("./qr-codes.service");
const create_qr_code_dto_1 = require("./dto/create-qr-code.dto");
const update_qr_code_dto_1 = require("./dto/update-qr-code.dto");
const qr_stats_dto_1 = require("./dto/qr-stats.dto");
const qr_analytics_dto_1 = require("./dto/qr-analytics.dto");
const user_dashboard_analytics_dto_1 = require("./dto/user-dashboard-analytics.dto");
const authentication_guard_1 = require("../guards/authentication.guard");
const get_by_pagination_query_dto_1 = require("./dto/get-by-pagination-query.dto");
const settings_service_1 = require("../settings/settings.service");
const get_current_user_id_decorator_1 = require("../decorators/get-current-user-id.decorator");
const get_by_status_dto_1 = require("./dto/get-by-status.dto");
let QrCodeController = class QrCodeController {
    constructor(qrCodeService, settingsService) {
        this.qrCodeService = qrCodeService;
        this.settingsService = settingsService;
    }
    async store(createQrCodeDto) {
        return this.qrCodeService.create(createQrCodeDto);
    }
    async bulkStore(qrCodes, userId) {
        return this.qrCodeService.bulkCreate(qrCodes, userId);
    }
    async update(id, updateQrCodeDto) {
        return this.qrCodeService.update(id, updateQrCodeDto);
    }
    async delete(id) {
        return this.qrCodeService.delete(id);
    }
    async getByStatus(query) {
        return this.qrCodeService.getByStatus(query);
    }
    async get(dto) {
        return this.qrCodeService.get(dto);
    }
    async addToFavorites(id) {
        return this.qrCodeService.addToFavorites(id);
    }
    async removeFromFavorites(id) {
        return this.qrCodeService.removeFromFavorites(id);
    }
    async checkQrString(qrString) {
        return this.qrCodeService.checkQrString(qrString);
    }
    async updateText(qrCodeId, text) {
        return this.qrCodeService.updateText(qrCodeId, text);
    }
    async getById(id) {
        return this.qrCodeService.findOne(id);
    }
    async getByRedirectUrl(redirectUrl) {
        return this.qrCodeService.getByRedirectUrl(redirectUrl);
    }
    async getAnalytics(analyticsDto) {
        return this.qrCodeService.getAnalytics(analyticsDto);
    }
    async getScanCount(qrId) {
        return this.qrCodeService.getScanCount(qrId);
    }
    async getQrTypeDistribution(userId) {
        return this.qrCodeService.getQrTypeDistribution(userId);
    }
    async getQrCodeStats(qrStatsDto) {
        return this.qrCodeService.getQrCodeStats(qrStatsDto);
    }
    async getUserDashboardAnalytics(analyticsDto) {
        return this.qrCodeService.getUserDashboardAnalytics(analyticsDto);
    }
    async duplicateQrCode(query) {
        const qrCode = await this.qrCodeService.findOne(query.id);
        return await this.qrCodeService.duplicateQrCode(qrCode);
    }
};
exports.QrCodeController = QrCodeController;
__decorate([
    (0, common_1.Post)('store'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Store a QR Code' }),
    (0, swagger_1.ApiBody)({ type: create_qr_code_dto_1.CreateQrCodeDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'QR Code created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qr_code_dto_1.CreateQrCodeDto]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "store", null);
__decorate([
    (0, common_1.Post)('bulk-store'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Bulk store QR Codes' }),
    (0, swagger_1.ApiBody)({ type: [create_qr_code_dto_1.CreateQrCodeDto] }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'QR Codes created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Number]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "bulkStore", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update a Qr Code by id' }),
    (0, swagger_1.ApiBody)({ type: update_qr_code_dto_1.UpdateQrCodeNewDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Code updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Qr code not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_qr_code_dto_1.UpdateQrCodeNewDto]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a Qr Code' }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, example: 1, description: 'QR Code ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Code deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Qr code not found' }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('get-by-status'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve QR Codes by status' }),
    (0, swagger_1.ApiQuery)({
        name: 'status',
        type: Number,
        example: 1,
        description: 'QR Code status',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Code retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_by_status_dto_1.GetByStatusDto]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "getByStatus", null);
__decorate([
    (0, common_1.Get)('get-by-pagination'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve QR Codes with Pagination' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Codes retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_by_pagination_query_dto_1.GetByPaginationQueryDto]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "get", null);
__decorate([
    (0, common_1.Post)('add-to-favorites'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Add a QR code to favorites' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Code successfully updated' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Code not found' }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "addToFavorites", null);
__decorate([
    (0, common_1.Post)('remove-from-favorites'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Remove QR code from favorites' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'QR Code removed from favorites successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Code not found' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "removeFromFavorites", null);
__decorate([
    (0, common_1.Get)('check-string-availability'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Check qr string is already exist or not' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR String Available' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR string already exist' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    __param(0, (0, common_1.Query)('qr_string')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "checkQrString", null);
__decorate([
    (0, common_1.Patch)('update-text'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update text of Qr Code' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Code updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Qr code not found' }),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Query)('text')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "updateText", null);
__decorate([
    (0, common_1.Get)('get-by-id'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve QR Codes by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Code fetched successfully' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Qr code not found' }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('get-by-redirect-url'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve QR Codes by redirect url' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Code fetched successfully' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Qr code not found' }),
    __param(0, (0, common_1.Query)('redirect_url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "getByRedirectUrl", null);
__decorate([
    (0, common_1.Get)('analytics'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get QR Code Analytics' }),
    (0, swagger_1.ApiQuery)({ name: 'user_id', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'qr_code_type', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'start_date', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'end_date', required: false }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'QR Code analytics retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [qr_analytics_dto_1.QrAnalyticsDto]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "getAnalytics", null);
__decorate([
    (0, common_1.Get)('scan-count/:qrId'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get Scan Count by QR Code' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Scan count retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Code not found' }),
    __param(0, (0, common_1.Param)('qrId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "getScanCount", null);
__decorate([
    (0, common_1.Get)('qr-type-distribution'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get QR Code Type Distribution' }),
    (0, swagger_1.ApiQuery)({ name: 'user_id', required: true }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'QR Code type distribution retrieved successfully',
    }),
    __param(0, (0, common_1.Query)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "getQrTypeDistribution", null);
__decorate([
    (0, common_1.Post)('qr-code-stats'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get QR Code Statistics' }),
    (0, swagger_1.ApiBody)({ type: qr_stats_dto_1.QrStatsDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'QR Code statistics retrieved successfully',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [qr_stats_dto_1.QrStatsDto]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "getQrCodeStats", null);
__decorate([
    (0, common_1.Post)('user-dashboard/analytic'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get analytics data for user dashboard' }),
    (0, swagger_1.ApiBody)({ type: user_dashboard_analytics_dto_1.UserDashboardAnalyticsDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Analytics data retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dashboard_analytics_dto_1.UserDashboardAnalyticsDto]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "getUserDashboardAnalytics", null);
__decorate([
    (0, common_1.Get)('create-duplicate'),
    (0, swagger_1.ApiOperation)({ summary: 'Duplicate QR Code' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR code created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Qr code not found' }),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        type: Number,
        example: 1,
        description: 'QR Code id',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QrCodeController.prototype, "duplicateQrCode", null);
exports.QrCodeController = QrCodeController = __decorate([
    (0, swagger_1.ApiTags)('QR Codes'),
    (0, common_1.Controller)('qr-code'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [qr_codes_service_1.QrCodeService,
        settings_service_1.SettingsService])
], QrCodeController);
//# sourceMappingURL=qr-codes.controller.js.map