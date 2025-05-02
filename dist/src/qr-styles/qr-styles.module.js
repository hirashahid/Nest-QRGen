"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrStylesModule = void 0;
const common_1 = require("@nestjs/common");
const qr_styles_service_1 = require("./qr-styles.service");
const qr_styles_controller_1 = require("./qr-styles.controller");
const typeorm_1 = require("@nestjs/typeorm");
const qr_style_entity_1 = require("./entities/qr-style.entity");
const users_module_1 = require("../users/users.module");
const jwt_1 = require("@nestjs/jwt");
let QrStylesModule = class QrStylesModule {
};
exports.QrStylesModule = QrStylesModule;
exports.QrStylesModule = QrStylesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([qr_style_entity_1.QrStyle]), users_module_1.UsersModule, jwt_1.JwtModule],
        controllers: [qr_styles_controller_1.QrStylesController],
        providers: [qr_styles_service_1.QrStylesService],
        exports: [qr_styles_service_1.QrStylesService],
    })
], QrStylesModule);
//# sourceMappingURL=qr-styles.module.js.map