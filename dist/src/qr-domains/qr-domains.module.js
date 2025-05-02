"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrDomainsModule = void 0;
const common_1 = require("@nestjs/common");
const qr_domains_service_1 = require("./qr-domains.service");
const qr_domains_controller_1 = require("./qr-domains.controller");
const typeorm_1 = require("@nestjs/typeorm");
const qr_domain_entity_1 = require("./entities/qr-domain.entity");
const users_module_1 = require("../users/users.module");
const settings_module_1 = require("../settings/settings.module");
const jwt_1 = require("@nestjs/jwt");
const custom_hostname_service_1 = require("../custom-hostname.service");
let QrDomainsModule = class QrDomainsModule {
};
exports.QrDomainsModule = QrDomainsModule;
exports.QrDomainsModule = QrDomainsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([qr_domain_entity_1.QrDomain]),
            users_module_1.UsersModule,
            settings_module_1.SettingsModule,
            jwt_1.JwtModule,
        ],
        controllers: [qr_domains_controller_1.QrDomainsController],
        providers: [qr_domains_service_1.QrDomainsService, custom_hostname_service_1.CustomHostnameService],
        exports: [qr_domains_service_1.QrDomainsService],
    })
], QrDomainsModule);
//# sourceMappingURL=qr-domains.module.js.map