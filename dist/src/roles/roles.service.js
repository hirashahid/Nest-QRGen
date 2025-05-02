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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./entities/role.entity");
let RolesService = class RolesService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async create(createRoleDto) {
        try {
            const role = await this.findOneByRole(createRoleDto.roleName);
            if (role) {
                throw new common_1.HttpException(`Role ${createRoleDto.roleName} already exists`, common_1.HttpStatus.BAD_REQUEST);
            }
            const newRole = this.roleRepository.create(createRoleDto);
            const savedRole = await this.roleRepository.save(newRole);
            return savedRole;
        }
        catch (error) {
            throw error;
        }
    }
    findAll() {
        return this.roleRepository.find({
            select: { id: true, roleName: true, description: true },
        });
    }
    async findOne(id) {
        try {
            const role = await this.roleRepository.findOne({
                where: { id },
                select: { id: true, roleName: true, description: true },
            });
            if (!role) {
                throw new common_1.HttpException(`Role with id: ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            return role;
        }
        catch (error) {
            throw error;
        }
    }
    async findOneByRole(role) {
        try {
            const newRole = await this.roleRepository.findOneBy({ roleName: role });
            return newRole;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateRoleDto) {
        try {
            await this.findOne(id);
            const updatedRole = await this.roleRepository.update(id, updateRoleDto);
            if (!updatedRole.affected) {
                return { message: 'Could not update the Role' };
            }
            return this.findOne(id);
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            await this.findOne(id);
            const deletedRole = await this.roleRepository.delete(id);
            if (!deletedRole.affected) {
                throw new common_1.HttpException('Role not deleted', common_1.HttpStatus.NOT_FOUND);
            }
            return { message: 'Role is deleted' };
        }
        catch (error) {
            throw error;
        }
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
//# sourceMappingURL=roles.service.js.map