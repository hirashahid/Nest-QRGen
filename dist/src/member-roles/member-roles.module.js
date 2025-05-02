"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRolesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const member_roles_service_1 = require("./member-roles.service");
const member_roles_controller_1 = require("./member-roles.controller");
const member_role_entity_1 = require("./entities/member-role.entity");
let MemberRolesModule = class MemberRolesModule {
};
exports.MemberRolesModule = MemberRolesModule;
exports.MemberRolesModule = MemberRolesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([member_role_entity_1.MemberRole])],
        controllers: [member_roles_controller_1.MemberRolesController],
        providers: [member_roles_service_1.MemberRolesService],
        exports: [member_roles_service_1.MemberRolesService],
    })
], MemberRolesModule);
//# sourceMappingURL=member-roles.module.js.map