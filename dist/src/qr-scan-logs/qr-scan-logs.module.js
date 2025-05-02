"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrScanLogsModule = void 0;
const common_1 = require("@nestjs/common");
const qr_scan_logs_controller_1 = require("./qr-scan-logs.controller");
const qr_scan_logs_service_1 = require("./qr-scan-logs.service");
const typeorm_1 = require("@nestjs/typeorm");
const qr_scan_log_entity_1 = require("./entities/qr-scan-log.entity");
const qr_code_entity_1 = require("../qr-codes/entities/qr-code.entity");
const users_module_1 = require("../users/users.module");
const jwt_1 = require("@nestjs/jwt");
let QrScanLogsModule = class QrScanLogsModule {
};
exports.QrScanLogsModule = QrScanLogsModule;
exports.QrScanLogsModule = QrScanLogsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([qr_scan_log_entity_1.QrScanLog, qr_code_entity_1.QrCode]),
            users_module_1.UsersModule,
            jwt_1.JwtModule,
        ],
        controllers: [qr_scan_logs_controller_1.QrScanLogController],
        providers: [qr_scan_logs_service_1.QrScanLogService],
        exports: [qr_scan_logs_service_1.QrScanLogService],
    })
], QrScanLogsModule);
//# sourceMappingURL=qr-scan-logs.module.js.map