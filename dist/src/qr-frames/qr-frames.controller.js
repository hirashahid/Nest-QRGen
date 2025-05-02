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
exports.QrFramesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const qr_frames_service_1 = require("./qr-frames.service");
const create_qr_frame_dto_1 = require("./dto/create-qr-frame.dto");
const update_qr_frame_dto_1 = require("./dto/update-qr-frame.dto");
const swagger_1 = require("@nestjs/swagger");
let QrFramesController = class QrFramesController {
    constructor(qrFramesService) {
        this.qrFramesService = qrFramesService;
    }
    async uploadFile(file, createQrFrameDto) {
        return this.qrFramesService.create(file, createQrFrameDto);
    }
    async findAll() {
        return this.qrFramesService.findAll();
    }
    async findOne(id) {
        return this.qrFramesService.findOne(id);
    }
    async update(id, file, updateQrFrameDto) {
        return this.qrFramesService.update(id, file, updateQrFrameDto);
    }
    async remove(id) {
        return this.qrFramesService.remove(id);
    }
};
exports.QrFramesController = QrFramesController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                settings: { type: 'string' },
                class: { type: 'string' },
                frame_text_settings: { type: 'string' },
                svg_code: { type: 'string' },
                my_class: { type: 'string' },
                my_frame_text_setting: { type: 'string' },
                my_svg_code: { type: 'string' },
                landing_page_class: { type: 'string' },
                status: { type: 'number', default: 1 },
                file: { type: 'string', format: 'binary' },
            },
        },
    }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_qr_frame_dto_1.CreateQrFrameDto]),
    __metadata("design:returntype", Promise)
], QrFramesController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QrFramesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QrFramesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                settings: { type: 'string' },
                class: { type: 'string' },
                frame_text_settings: { type: 'string' },
                svg_code: { type: 'string' },
                my_class: { type: 'string' },
                my_frame_text_setting: { type: 'string' },
                my_svg_code: { type: 'string' },
                landing_page_class: { type: 'string' },
                status: { type: 'number', default: 1 },
                file: { type: 'string', format: 'binary' },
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, update_qr_frame_dto_1.UpdateQrFrameDto]),
    __metadata("design:returntype", Promise)
], QrFramesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QrFramesController.prototype, "remove", null);
exports.QrFramesController = QrFramesController = __decorate([
    (0, swagger_1.ApiTags)('QR Frames'),
    (0, common_1.Controller)('qr-frames'),
    __metadata("design:paramtypes", [qr_frames_service_1.QrFramesService])
], QrFramesController);
//# sourceMappingURL=qr-frames.controller.js.map