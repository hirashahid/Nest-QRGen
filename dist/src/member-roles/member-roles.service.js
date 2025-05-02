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
exports.MemberRolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const member_role_entity_1 = require("./entities/member-role.entity");
let MemberRolesService = class MemberRolesService {
    constructor(memberRoleRepository) {
        this.memberRoleRepository = memberRoleRepository;
    }
    async create(createMemberRoleDto) {
        const existingRole = await this.memberRoleRepository.findOneBy({
            name: createMemberRoleDto.name,
        });
        if (existingRole) {
            throw new common_1.ConflictException(`Member role '${createMemberRoleDto.name}' already exists`);
        }
        const memberRole = this.memberRoleRepository.create(createMemberRoleDto);
        return this.memberRoleRepository.save(memberRole);
    }
    async findAll() {
        return this.memberRoleRepository.find();
    }
    async findOne(id) {
        const role = await this.memberRoleRepository.findOne({ where: { id } });
        if (!role) {
            throw new common_1.NotFoundException(`Member role with ID ${id} not found`);
        }
        return role;
    }
    async update(id, updateMemberRoleDto) {
        await this.findOne(id);
        await this.memberRoleRepository.update(id, updateMemberRoleDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        const role = await this.memberRoleRepository.delete(id);
        if (!role.affected) {
            throw new common_1.HttpException('Member Role not deleted', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'Member role is deleted' };
    }
};
exports.MemberRolesService = MemberRolesService;
exports.MemberRolesService = MemberRolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(member_role_entity_1.MemberRole)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MemberRolesService);
//# sourceMappingURL=member-roles.service.js.map