"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicApiModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const public_api_controller_1 = require("./public-api.controller");
const public_api_service_1 = require("./public-api.service");
const qr_codes_service_1 = require("../qr-codes/qr-codes.service");
const qr_code_entity_1 = require("../qr-codes/entities/qr-code.entity");
const users_module_1 = require("../users/users.module");
const qr_scan_logs_module_1 = require("../qr-scan-logs/qr-scan-logs.module");
const qr_folders_module_1 = require("../qr-folders/qr-folders.module");
const settings_module_1 = require("../settings/settings.module");
const qr_types_module_1 = require("../qr-types/qr-types.module");
const qr_domains_module_1 = require("../qr-domains/qr-domains.module");
const file_uploads_module_1 = require("../file-uploads/file-uploads.module");
const qr_frames_service_1 = require("../qr-frames/qr-frames.service");
const qr_frame_entity_1 = require("../qr-frames/entities/qr-frame.entity");
let PublicApiModule = class PublicApiModule {
};
exports.PublicApiModule = PublicApiModule;
exports.PublicApiModule = PublicApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([qr_code_entity_1.QrCode, qr_frame_entity_1.QrFrame]),
            users_module_1.UsersModule,
            qr_types_module_1.QrTypesModule,
            qr_scan_logs_module_1.QrScanLogsModule,
            qr_folders_module_1.QrFoldersModule,
            qr_domains_module_1.QrDomainsModule,
            settings_module_1.SettingsModule,
            file_uploads_module_1.FileUploadsModule,
        ],
        controllers: [public_api_controller_1.PublicApiController],
        providers: [public_api_service_1.PublicApiService, qr_codes_service_1.QrCodeService, qr_frames_service_1.QrFramesService],
        exports: [public_api_service_1.PublicApiService],
    })
], PublicApiModule);
//# sourceMappingURL=public-api.module.js.map