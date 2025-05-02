"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadsModule = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const file_uploads_service_1 = require("./file-uploads.service");
const file_uploads_controller_1 = require("./file-uploads.controller");
const typeorm_1 = require("@nestjs/typeorm");
const file_upload_entity_1 = require("./entities/file-upload.entity");
let FileUploadsModule = class FileUploadsModule {
};
exports.FileUploadsModule = FileUploadsModule;
exports.FileUploadsModule = FileUploadsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                dest: './uploads',
            }),
            typeorm_1.TypeOrmModule.forFeature([file_upload_entity_1.FileUpload]),
        ],
        controllers: [file_uploads_controller_1.FileUploadsController],
        providers: [file_uploads_service_1.FileUploadsService],
        exports: [file_uploads_service_1.FileUploadsService],
    })
], FileUploadsModule);
//# sourceMappingURL=file-uploads.module.js.map