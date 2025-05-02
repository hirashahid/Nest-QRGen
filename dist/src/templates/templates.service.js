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
exports.TemplatesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const template_entity_1 = require("./entities/template.entity");
const users_service_1 = require("../users/users.service");
const module_enum_1 = require("../enums/module.enum");
const helper_1 = require("../../utils/helper");
const permission_type_enum_1 = require("../enums/permission-type.enum");
let TemplatesService = class TemplatesService {
    constructor(templateRepository, usersService) {
        this.templateRepository = templateRepository;
        this.usersService = usersService;
    }
    async create(createTemplateDto, userId) {
        try {
            await this.checkPermissions(userId, permission_type_enum_1.PermissionType.CREATE);
            const template = this.templateRepository.create(createTemplateDto);
            template.userId = userId;
            return await this.templateRepository.save(template);
        }
        catch (error) {
            throw error;
        }
    }
    async findAllByUserId(userId) {
        const user = await this.usersService.findOne(userId);
        let userIds = [userId];
        if (!user.isMember) {
            const user = await this.usersService.getMembers(userId);
            userIds = [userId, ...user?.members.map((member) => member.id)];
        }
        else {
            const parentAccount = await this.usersService.findOne(user.parentAccountId);
            if (parentAccount) {
                const user = await this.usersService.getMembers(parentAccount.id);
                userIds = [
                    parentAccount.id,
                    ...user.members.map((member) => member.id),
                ];
            }
        }
        return await this.templateRepository.find({
            where: { userId: (0, typeorm_2.In)(userIds) },
        });
    }
    async findAll() {
        return await this.templateRepository.find();
    }
    async findOne(id) {
        try {
            const template = await this.templateRepository.findOne({ where: { id } });
            if (!template) {
                throw new common_1.HttpException(`Template with id: ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            return template;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateTemplateDto, userId) {
        try {
            await this.checkPermissions(userId, permission_type_enum_1.PermissionType.EDIT);
            await this.findOne(id);
            await this.templateRepository.update(id, updateTemplateDto);
            return this.findOne(id);
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id, userId) {
        try {
            await this.checkPermissions(userId, permission_type_enum_1.PermissionType.DELETE);
            await this.findOne(id);
            const deletedUser = await this.templateRepository.delete(id);
            if (!deletedUser.affected) {
                throw new common_1.HttpException('Template not deleted', common_1.HttpStatus.NOT_FOUND);
            }
            return { message: 'Template deleted successfully' };
        }
        catch (error) {
            throw error;
        }
    }
    async checkPermissions(userId, permissionType) {
        const user = await this.usersService.getMembers(userId);
        if (!(0, helper_1.hasPermission)(user, module_enum_1.ModuleEnum.TEMPLATES, permissionType)) {
            throw new common_1.HttpException('You are not authorized to perform this action', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
exports.TemplatesService = TemplatesService;
exports.TemplatesService = TemplatesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(template_entity_1.Template)),
    __metadata("design:paramtypes", [Function, users_service_1.UsersService])
], TemplatesService);
//# sourceMappingURL=templates.service.js.map