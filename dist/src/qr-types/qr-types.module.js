"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrTypesModule = void 0;
const common_1 = require("@nestjs/common");
const qr_types_controller_1 = require("./qr-types.controller");
const qr_types_service_1 = require("./qr-types.service");
const typeorm_1 = require("@nestjs/typeorm");
const qr_type_entity_1 = require("./entities/qr-type.entity");
const jwt_1 = require("@nestjs/jwt");
const users_module_1 = require("../users/users.module");
let QrTypesModule = class QrTypesModule {
};
exports.QrTypesModule = QrTypesModule;
exports.QrTypesModule = QrTypesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([qr_type_entity_1.QrType]), users_module_1.UsersModule, jwt_1.JwtModule],
        controllers: [qr_types_controller_1.QrTypeController],
        providers: [qr_types_service_1.QrTypeService],
        exports: [qr_types_service_1.QrTypeService],
    })
], QrTypesModule);
//# sourceMappingURL=qr-types.module.js.map