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
exports.PublicApiController = void 0;
const common_1 = require("@nestjs/common");
const qr_codes_service_1 = require("../qr-codes/qr-codes.service");
const qr_scan_logs_service_1 = require("../qr-scan-logs/qr-scan-logs.service");
const validate_qr_code_query_dto_1 = require("./dto/validate-qr-code-query.dto");
const public_api_check_guard_1 = require("../guards/public-api-check.guard");
const swagger_1 = require("@nestjs/swagger");
const update_qr_code_dto_1 = require("../qr-codes/dto/update-qr-code.dto");
const analytics_dto_1 = require("../qr-scan-logs/dto/analytics.dto");
const create_qr_folder_dto_1 = require("../qr-folders/dto/create-qr-folder.dto");
const qr_folders_service_1 = require("../qr-folders/qr-folders.service");
const throttler_1 = require("@nestjs/throttler");
const get_current_user_id_decorator_1 = require("../decorators/get-current-user-id.decorator");
const public_api_service_1 = require("./public-api.service");
const qr_image_format_enum_1 = require("../enums/qr-image-format.enum");
const generate_qr_image_dto_1 = require("./dto/generate-qr-image.dto");
const bulk_qr_code_dto_1 = require("./dto/bulk-qr-code.dto");
const bulk_edit_qr_code_dto_1 = require("./dto/bulk-edit-qr-code.dto");
const duplicate_qr_code_dto_1 = require("./dto/duplicate-qr-code.dto");
const generate_qr_image_response_dto_1 = require("./dto/generate-qr-image-response.dto");
let PublicApiController = class PublicApiController {
    constructor(publicApiService, qrCodeService, qrFolderService, qrScanLogService) {
        this.publicApiService = publicApiService;
        this.qrCodeService = qrCodeService;
        this.qrFolderService = qrFolderService;
        this.qrScanLogService = qrScanLogService;
    }
    async getQrCodes(query, userId, res) {
        const { page = 1, per_page = 10, name, status, favorites, types, sort_recent, sort_name, } = query;
        const qrCodes = await this.qrCodeService.fetchQrCodes({
            page,
            per_page,
            user_id: userId,
            name,
            status,
            favorites,
            types,
            sort_recent,
            sort_name,
        });
        return res.json({
            success: true,
            message: 'QR codes fetched successfully',
            data: qrCodes.data,
            pagination: {
                total: qrCodes.total,
                count: qrCodes.count,
                per_page: qrCodes.per_page,
                current_page: qrCodes.current_page,
                total_pages: qrCodes.total_pages,
            },
        });
    }
    async createQr(qrCodes, res, userId) {
        const bulkQrCodes = await this.qrCodeService.bulkCreateForPublicApis(qrCodes, userId);
        return res.json({
            success: true,
            message: 'QR code created successfully',
            data: bulkQrCodes,
        });
    }
    async BulkEdit(qrCodes, res, userId) {
        const bulkQrCodes = await this.qrCodeService.bulkEditForPublicApis(qrCodes, userId);
        return res.json({
            success: true,
            message: 'QR code created successfully',
            data: bulkQrCodes,
        });
    }
    async updateQr(qrCode, res, userId) {
        const updatedQrCode = await this.qrCodeService.bulkEditForPublicApis([qrCode], userId);
        return res.json({
            success: true,
            message: 'QR code updated successfully',
            data: updatedQrCode
        });
    }
    async deleteQr(dto, res) {
        await Promise.allSettled(dto.ids.map((id) => this.qrCodeService.delete(id)));
        return res.json({
            success: true,
            message: 'QR codes deleted successfully',
        });
    }
    async DuplicateQr(dto, userId) {
        return await this.publicApiService.duplicateQrCode(dto.id, userId);
    }
    async generateQrImage(format, dto, userId, res) {
        const finalSvg = await this.publicApiService.generateQrImage(dto, format, userId);
        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(finalSvg);
    }
    getQrImage(format, dto, userId) {
        return this.publicApiService.getQrImage(dto.id, format, userId);
    }
    async getAnalytics(analyticsPublicDto, userId) {
        const analyticsDto = {
            ...analyticsPublicDto,
            user_id: userId,
        };
        return this.qrScanLogService.analytics(analyticsDto);
    }
    async createFolder(createQrFolderPublicDto, res, userId) {
        try {
            const { name, status } = createQrFolderPublicDto;
            const existingFolder = await this.qrFolderService.getByName(name, userId);
            if (existingFolder) {
                return res.status(422).json({
                    success: false,
                    message: 'Folder already exists',
                });
            }
            const createFolderDto = {
                name,
                status,
            };
            const folder = await this.qrFolderService.create(createFolderDto, userId);
            return res.json({
                success: true,
                message: 'Folder created successfully',
                data: folder,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: 'An error occurred while creating the folder',
                error: error.message,
            });
        }
    }
    async getAllFolders(res, userId) {
        try {
            const folders = await this.qrFolderService.getFoldersByUserId(userId);
            return res.json({
                success: true,
                message: 'Folders fetched successfully',
                data: folders,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: 'An error occurred while fetching folders',
                error: error.message,
            });
        }
    }
    async getQrCode(id, res, userId) {
        const qrCode = await this.qrCodeService.findOne(id);
        if (!qrCode || qrCode.user_id !== userId) {
            return res.status(404).json({
                success: false,
                message: 'QR code not found',
            });
        }
        return res.json({
            success: true,
            message: 'QR code fetched successfully',
            data: {
                id: qrCode.id,
                name: qrCode.name,
                status: qrCode.status,
                favorites: qrCode.isFavorite,
                qr_type: qrCode.qr_type?.name,
                folder: qrCode.folder_id,
                style: qrCode.style,
                scan_limit: qrCode.scanLimit,
                scan_count: qrCode.scanCount,
                last_scan_at: qrCode.lastScanAt,
                expires_at: qrCode.expiresAt,
                redirect_url: qrCode.redirectUrl,
                access_password: qrCode.accessPassword,
                active_password: qrCode.activePassword,
                google_analytics_id: qrCode.googleAnalyticsId,
                facebook_pixel_id: qrCode.facebookPixelId,
                content: qrCode.content,
                created_at: qrCode.createdAt,
                updated_at: qrCode.updatedAt,
            },
        });
    }
};
exports.PublicApiController = PublicApiController;
__decorate([
    (0, common_1.Get)('/public/qrs'),
    (0, swagger_1.ApiHeader)({
        name: 'auth-token',
        required: true,
        description: 'Authorization token for accessing the API',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR codes fetched successfully.' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validate_qr_code_query_dto_1.ValidateQrCodeQuery, Number, Object]),
    __metadata("design:returntype", Promise)
], PublicApiController.prototype, "getQrCodes", null);
__decorate([
    (0, common_1.Post)('public/qrs/bulk-create'),
    (0, swagger_1.ApiBody)({ type: [bulk_qr_code_dto_1.BulkQrCodeDto] }),
    (0, swagger_1.ApiHeader)({
        name: 'auth-token',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR code created successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object, Number]),
    __metadata("design:returntype", Promise)
], PublicApiController.prototype, "createQr", null);
__decorate([
    (0, common_1.Put)('public/qrs/bulk-edit'),
    (0, swagger_1.ApiBody)({ type: [bulk_edit_qr_code_dto_1.BulkEditQrCodeDto] }),
    (0, swagger_1.ApiHeader)({
        name: 'auth-token',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR codes updated successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object, Number]),
    __metadata("design:returntype", Promise)
], PublicApiController.prototype, "BulkEdit", null);
__decorate([
    (0, common_1.Put)('public/qrs/:id'),
    (0, swagger_1.ApiHeader)({
        name: 'auth-token',
        required: true,
        description: 'Authorization token for accessing the API',
    }),
    (0, swagger_1.ApiBody)({ type: bulk_edit_qr_code_dto_1.BulkEditQrCodeDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR code updated successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR code not found.' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bulk_edit_qr_code_dto_1.BulkEditQrCodeDto, Object, Number]),
    __metadata("design:returntype", Promise)
], PublicApiController.prototype, "updateQr", null);
__decorate([
    (0, common_1.Delete)('public/qrs/bulk-delete'),
    (0, swagger_1.ApiHeader)({
        name: 'auth-token',
        required: true,
        description: 'Authorization token for accessing the API',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR codes deleted successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR code not found.' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_qr_code_dto_1.BulkDeleteQrCodeDto, Object]),
    __metadata("design:returntype", Promise)
], PublicApiController.prototype, "deleteQr", null);
__decorate([
    (0, common_1.Post)('public/qrs/:id/duplicate'),
    (0, swagger_1.ApiHeader)({
        name: 'auth-token',
        required: true,
        description: 'Authorization token for accessing the API',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'QR code duplicated successfully.',
        type: duplicate_qr_code_dto_1.DuplicateQrCodeDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR code not found.' }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [duplicate_qr_code_dto_1.DuplicateQrCodeDto, Number]),
    __metadata("design:returntype", Promise)
], PublicApiController.prototype, "DuplicateQr", null);
__decorate([
    (0, common_1.Post)('generate-image/:format'),
    (0, swagger_1.ApiParam)({
        name: 'format',
        enum: qr_image_format_enum_1.QrImageFormatEnum,
        required: true,
        description: 'Image format of the QR code',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'auth-token',
        required: true,
        description: 'Authorization token for accessing the API',
    }),
    (0, swagger_1.ApiBody)({
        type: generate_qr_image_dto_1.GenerateQrDto,
        description: 'The QR code generation request payload with style and data',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'QR image generation successfully',
        type: generate_qr_image_response_dto_1.GenerateQrImageResponseDto,
    }),
    __param(0, (0, common_1.Param)('format')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, generate_qr_image_dto_1.GenerateQrDto, Number, Object]),
    __metadata("design:returntype", Promise)
], PublicApiController.prototype, "generateQrImage", null);
__decorate([
    (0, common_1.Get)('retrieve-image/:id/:format'),
    (0, swagger_1.ApiParam)({
        name: 'format',
        enum: qr_image_format_enum_1.QrImageFormatEnum,
        required: true,
        description: 'Image format of the QR code',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'auth-token',
        required: true,
        description: 'Authorization token for accessing the API',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'QR image generation successfully',
        type: generate_qr_image_response_dto_1.GenerateQrImageResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR code not found.' }),
    __param(0, (0, common_1.Param)('format')),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, duplicate_qr_code_dto_1.DuplicateQrCodeDto, Number]),
    __metadata("design:returntype", void 0)
], PublicApiController.prototype, "getQrImage", null);
__decorate([
    (0, common_1.Get)('public/qrs/analytics'),
    (0, swagger_1.ApiHeader)({
        name: 'auth-token',
        required: true,
        description: 'Authorization token for accessing the API',
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Get QR Code Analytics' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'QR Code analytics retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.AnalyticsPublicDto, Number]),
    __metadata("design:returntype", Promise)
], PublicApiController.prototype, "getAnalytics", null);
__decorate([
    (0, common_1.Post)('public/folders/create'),
    (0, swagger_1.ApiHeader)({
        name: 'auth-token',
        required: true,
        description: 'Authorization token for accessing the API',
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Create QR Folder' }),
    (0, swagger_1.ApiBody)({ type: create_qr_folder_dto_1.CreateQrFolderPublicDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Folder created successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qr_folder_dto_1.CreateQrFolderPublicDto, Object, Number]),
    __metadata("design:returntype", Promise)
], PublicApiController.prototype, "createFolder", null);
__decorate([
    (0, common_1.Get)('public/folders'),
    (0, swagger_1.ApiHeader)({
        name: 'auth-token',
        required: true,
        description: 'Authorization token for accessing the API',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Folders fetched successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Validation errors.' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], PublicApiController.prototype, "getAllFolders", null);
__decorate([
    (0, common_1.Get)('public/qrs/:id'),
    (0, swagger_1.ApiHeader)({
        name: 'auth-token',
        required: true,
        description: 'Authorization token for accessing the API',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR code fetched successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR code not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Number]),
    __metadata("design:returntype", Promise)
], PublicApiController.prototype, "getQrCode", null);
exports.PublicApiController = PublicApiController = __decorate([
    (0, swagger_1.ApiExtraModels)(generate_qr_image_dto_1.EmailBodyDto, generate_qr_image_dto_1.WifiBodyDto, generate_qr_image_dto_1.VCardBodyDto, generate_qr_image_dto_1.TextBodyDto, generate_qr_image_dto_1.UrlStaticBodyDto, generate_qr_image_dto_1.SmsBodyDto, generate_qr_image_dto_1.WhatsappBodyDto),
    (0, swagger_1.ApiTags)('Public API'),
    (0, common_1.Controller)('api'),
    (0, common_1.UseGuards)(public_api_check_guard_1.PublicApiGuard, throttler_1.ThrottlerGuard),
    __metadata("design:paramtypes", [public_api_service_1.PublicApiService,
        qr_codes_service_1.QrCodeService,
        qr_folders_service_1.QrFoldersService,
        qr_scan_logs_service_1.QrScanLogService])
], PublicApiController);
//# sourceMappingURL=public-api.controller.js.map