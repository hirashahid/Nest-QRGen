"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_service_1 = require("./roles.service");
const update_role_dto_1 = require("./dto/update-role.dto");
const create_role_dto_1 = require("./dto/create-role.dto");
const role_response_dto_1 = require("./dto/role-response.dto");
const constants_1 = require("../constants");
const authentication_guard_1 = require("../guards/authentication.guard");
let RolesController = class RolesController {
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    create(createUserDto) {
        return this.rolesService.create(createUserDto);
    }
    findAll() {
        return this.rolesService.findAll();
    }
    findOne(dto) {
        return this.rolesService.findOne(dto.id);
    }
    update(dto, updateRoleDto) {
        return this.rolesService.update(dto.id, updateRoleDto);
    }
    remove(dto) {
        return this.rolesService.remove(dto.id);
    }
};
exports.RolesController = RolesController;
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new role' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The role has been successfully created.',
        type: role_response_dto_1.RoleResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all roles' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of roles retrieved successfully.',
        type: [role_response_dto_1.RoleResponseDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('get-by-id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a role by ID' }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, example: 1, description: 'Role ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The role has been successfully retrieved.',
        type: role_response_dto_1.RoleResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Role not found.' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a role by ID' }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, description: 'Role ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The role has been successfully updated.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Role not found.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input.' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto, update_role_dto_1.UpdateRoleDto]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a role by ID' }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, description: 'Role ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The role has been successfully deleted.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Role not found.' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "remove", null);
exports.RolesController = RolesController = __decorate([
    (0, swagger_1.ApiTags)('Roles'),
    (0, common_1.Controller)('roles'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
//# sourceMappingURL=roles.controller.js.map