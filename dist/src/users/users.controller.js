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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_entity_1 = require("./entities/user.entity");
const user_response_dto_1 = require("./dto/user-response.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const constants_1 = require("../constants");
const authentication_guard_1 = require("../guards/authentication.guard");
const create_member_dto_1 = require("./dto/create-member.dto");
const update_password_dto_1 = require("./dto/update-password.dto");
const update_member_dto_1 = require("./dto/update-member.dto");
const get_current_user_id_decorator_1 = require("../decorators/get-current-user-id.decorator");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    generateToken(dto) {
        return this.usersService.generateToken(dto.id);
    }
    getAllUsers() {
        return this.usersService.findAll();
    }
    getUserById(dto) {
        return this.usersService.findOne(dto.id);
    }
    updateUser(dto, updateUserDto) {
        return this.usersService.update(dto.id, updateUserDto);
    }
    deleteUser(dto) {
        return this.usersService.remove(dto.id);
    }
    async addMember(addMemberDto, userId) {
        return this.usersService.addMember(userId, addMemberDto);
    }
    async getMembers(userId) {
        return this.usersService.getMembers(userId);
    }
    async updateMember(memberId, updateMemberDto, userId) {
        return this.usersService.updateMember(userId, +memberId, updateMemberDto);
    }
    async deleteMember(memberId, userId) {
        await this.usersService.deleteMember(userId, +memberId);
        return { message: 'Member successfully deleted' };
    }
    async updatePassword(userId, updatePasswordDto) {
        return this.usersService.updatePassword(userId, updatePasswordDto);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new user' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'User successfully created',
        type: user_response_dto_1.UserResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('generate-auth-token'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a token by user by ID' }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'token generated successfully updated',
        type: user_response_dto_1.UserResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "generateToken", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all users' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of users',
        type: [user_response_dto_1.UserResponseDto],
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('get-by-id'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a user by id' }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User found',
        type: user_response_dto_1.UserResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Patch)('update'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a user by ID' }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User successfully updated',
        type: user_entity_1.User,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto,
        update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a user by ID' }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User successfully deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Post)('add-member'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a member to a user' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Member successfully added' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_member_dto_1.AddMemberDto, Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addMember", null);
__decorate([
    (0, common_1.Get)('members'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a user with all members' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'user with members returned' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'user not found' }),
    __param(0, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMembers", null);
__decorate([
    (0, common_1.Patch)('update-member'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a member by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Member successfully updated' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Member not found' }),
    __param(0, (0, common_1.Query)('member-id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_member_dto_1.UpdateMemberDto, Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateMember", null);
__decorate([
    (0, common_1.Delete)('delete-member'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a member by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Member successfully deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Member not found' }),
    __param(0, (0, common_1.Query)('member-id')),
    __param(1, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteMember", null);
__decorate([
    (0, common_1.Patch)('update-password'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Update user password' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Password updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Passwords do not match' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_password_dto_1.UpdatePasswordDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updatePassword", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map