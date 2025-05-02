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
exports.FileUploadsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const file_uploads_service_1 = require("./file-uploads.service");
const swagger_1 = require("@nestjs/swagger");
const throttler_1 = require("@nestjs/throttler");
let FileUploadsController = class FileUploadsController {
    constructor(fileUploadsService) {
        this.fileUploadsService = fileUploadsService;
    }
    async uploadFile(file) {
        return this.fileUploadsService.create(file);
    }
};
exports.FileUploadsController = FileUploadsController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Upload a file' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'File uploaded successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request.' }),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 100 * 1024 * 1024 }),
            new common_1.FileTypeValidator({
                fileType: /image\/(jpeg|jpg|png|gif)|application\/(zip|pdf|msword|vnd.openxmlformats-officedocument.wordprocessingml.document|vnd.ms-excel|vnd.openxmlformats-officedocument.spreadsheetml.sheet)|text\/plain|video\/mp4|audio\/mpeg/,
            }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileUploadsController.prototype, "uploadFile", null);
exports.FileUploadsController = FileUploadsController = __decorate([
    (0, swagger_1.ApiTags)('File Uploads'),
    (0, common_1.Controller)('file-uploads'),
    (0, common_1.UseGuards)(throttler_1.ThrottlerGuard),
    __metadata("design:paramtypes", [file_uploads_service_1.FileUploadsService])
], FileUploadsController);
//# sourceMappingURL=file-uploads.controller.js.map