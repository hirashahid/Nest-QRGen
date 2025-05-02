"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrCodesModule = void 0;
const common_1 = require("@nestjs/common");
const qr_codes_controller_1 = require("./qr-codes.controller");
const qr_codes_service_1 = require("./qr-codes.service");
const typeorm_1 = require("@nestjs/typeorm");
const qr_code_entity_1 = require("./entities/qr-code.entity");
const users_module_1 = require("../users/users.module");
const qr_scan_logs_module_1 = require("../qr-scan-logs/qr-scan-logs.module");
const jwt_1 = require("@nestjs/jwt");
const qr_types_module_1 = require("../qr-types/qr-types.module");
const qr_folders_module_1 = require("../qr-folders/qr-folders.module");
const qr_domains_module_1 = require("../qr-domains/qr-domains.module");
const settings_module_1 = require("../settings/settings.module");
let QrCodesModule = class QrCodesModule {
};
exports.QrCodesModule = QrCodesModule;
exports.QrCodesModule = QrCodesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([qr_code_entity_1.QrCode]),
            users_module_1.UsersModule,
            qr_scan_logs_module_1.QrScanLogsModule,
            qr_types_module_1.QrTypesModule,
            jwt_1.JwtModule,
            qr_folders_module_1.QrFoldersModule,
            qr_domains_module_1.QrDomainsModule,
            settings_module_1.SettingsModule,
        ],
        controllers: [qr_codes_controller_1.QrCodeController],
        providers: [qr_codes_service_1.QrCodeService],
        exports: [qr_codes_service_1.QrCodeService],
    })
], QrCodesModule);
//# sourceMappingURL=qr-codes.module.js.map