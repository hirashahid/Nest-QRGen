"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrLogosModule = void 0;
const common_1 = require("@nestjs/common");
const qr_logos_service_1 = require("./qr-logos.service");
const qr_logos_controller_1 = require("./qr-logos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const qr_logo_entity_1 = require("./entities/qr-logo.entity");
const users_module_1 = require("../users/users.module");
const jwt_1 = require("@nestjs/jwt");
let QrLogosModule = class QrLogosModule {
};
exports.QrLogosModule = QrLogosModule;
exports.QrLogosModule = QrLogosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([qr_logo_entity_1.QrLogo]), users_module_1.UsersModule, jwt_1.JwtModule],
        controllers: [qr_logos_controller_1.QrLogosController],
        providers: [qr_logos_service_1.QrLogosService],
        exports: [qr_logos_service_1.QrLogosService],
    })
], QrLogosModule);
//# sourceMappingURL=qr-logos.module.js.map