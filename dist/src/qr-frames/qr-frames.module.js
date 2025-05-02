"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrFramesModule = void 0;
const common_1 = require("@nestjs/common");
const qr_frames_service_1 = require("./qr-frames.service");
const qr_frames_controller_1 = require("./qr-frames.controller");
const typeorm_1 = require("@nestjs/typeorm");
const qr_frame_entity_1 = require("./entities/qr-frame.entity");
const users_module_1 = require("../users/users.module");
const jwt_1 = require("@nestjs/jwt");
let QrFramesModule = class QrFramesModule {
};
exports.QrFramesModule = QrFramesModule;
exports.QrFramesModule = QrFramesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([qr_frame_entity_1.QrFrame]), users_module_1.UsersModule, jwt_1.JwtModule],
        controllers: [qr_frames_controller_1.QrFramesController],
        providers: [qr_frames_service_1.QrFramesService],
        exports: [qr_frames_service_1.QrFramesService],
    })
], QrFramesModule);
//# sourceMappingURL=qr-frames.module.js.map