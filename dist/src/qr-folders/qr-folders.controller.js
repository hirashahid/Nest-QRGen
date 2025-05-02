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
exports.QrFoldersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const qr_folders_service_1 = require("./qr-folders.service");
const create_qr_folder_dto_1 = require("./dto/create-qr-folder.dto");
const update_qr_folder_dto_1 = require("./dto/update-qr-folder.dto");
const qr_folder_dto_1 = require("./dto/qr-folder.dto");
const authentication_guard_1 = require("../guards/authentication.guard");
const constants_1 = require("../constants");
const get_current_user_id_decorator_1 = require("../decorators/get-current-user-id.decorator");
let QrFoldersController = class QrFoldersController {
    constructor(qrFoldersService) {
        this.qrFoldersService = qrFoldersService;
    }
    create(createQrFolderDto, userId) {
        return this.qrFoldersService.create(createQrFolderDto, userId);
    }
    getAllFolders(dto) {
        return this.qrFoldersService.findAll(dto.id);
    }
    findOne(id) {
        return this.qrFoldersService.findOne(id);
    }
    update(id, updateQrFolderDto, userId) {
        return this.qrFoldersService.update(id, updateQrFolderDto, userId);
    }
    remove(id, userId) {
        return this.qrFoldersService.remove(id, userId);
    }
};
exports.QrFoldersController = QrFoldersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new QR Folder' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'QR Folder created',
        type: qr_folder_dto_1.QrFolderDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qr_folder_dto_1.CreateQrFolderDto, Number]),
    __metadata("design:returntype", void 0)
], QrFoldersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all folders by user id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of folders',
        type: [qr_folder_dto_1.QrFolderDto],
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto]),
    __metadata("design:returntype", Promise)
], QrFoldersController.prototype, "getAllFolders", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single QR Folder by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'QR Folder found',
        type: qr_folder_dto_1.QrFolderDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Folder not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QrFoldersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a QR Folder' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'QR Folder updated',
        type: qr_folder_dto_1.QrFolderDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Folder not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_qr_folder_dto_1.UpdateQrFolderDto, Number]),
    __metadata("design:returntype", void 0)
], QrFoldersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a QR Folder' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'QR Folder deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'QR Folder not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], QrFoldersController.prototype, "remove", null);
exports.QrFoldersController = QrFoldersController = __decorate([
    (0, swagger_1.ApiTags)('QR Folders'),
    (0, common_1.Controller)('qr-folders'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [qr_folders_service_1.QrFoldersService])
], QrFoldersController);
//# sourceMappingURL=qr-folders.controller.js.map