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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const settings_service_1 = require("../settings/settings.service");
const qr_folders_service_1 = require("../qr-folders/qr-folders.service");
const modules_service_1 = require("../modules/modules.service");
const status_num_1 = require("../enums/status.num");
const auth_service_1 = require("../auth/auth.service");
const constants_1 = require("../constants");
let UsersService = class UsersService {
    constructor(userRepository, settingService, foldersService, modulesService, authService) {
        this.userRepository = userRepository;
        this.settingService = settingService;
        this.foldersService = foldersService;
        this.modulesService = modulesService;
        this.authService = authService;
    }
    async create(createUserDto) {
        try {
            const normalizedEmail = createUserDto.email.toLowerCase();
            const existingUser = await this.userRepository.findOneBy({
                email: normalizedEmail,
            });
            if (existingUser) {
                throw new common_1.HttpException(`User with email: ${createUserDto.email} already exists`, common_1.HttpStatus.BAD_REQUEST);
            }
            let expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
            const trialUserDaysSetting = await this.settingService.findOneByKey('trial_user_days');
            const trialUserDays = trialUserDaysSetting
                ? trialUserDaysSetting.value
                : null;
            if (trialUserDays) {
                expiredAt = new Date(Date.now() + parseInt(trialUserDays) * 24 * 60 * 60 * 1000);
            }
            const userToCreateData = {
                ...createUserDto,
                email: normalizedEmail,
                trial_ends_at: expiredAt,
                expired_at: expiredAt,
                registrationComplete: status_num_1.StatusEnum.ENABLED,
                password: await bcrypt.hash(createUserDto.password, 10),
            };
            const user = this.userRepository.create(userToCreateData);
            return await this.userRepository.save(user);
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const user = await this.userRepository.findOne({
                where: { id },
                relations: [
                    'folders',
                    'modules',
                    'memberRole',
                    'members',
                    'members.folders',
                    'members.modules',
                    'members.memberRole',
                ],
            });
            if (!user) {
                throw new common_1.NotFoundException(`User with id ${id} not found`);
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        try {
            const user = await this.userRepository.findOne({
                where: { id },
            });
            if (!user) {
                throw new common_1.NotFoundException(`User with id ${id} not found`);
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async findOneByEmail(email) {
        try {
            const user = await this.userRepository.findOne({
                where: { email },
            });
            if (!user) {
                throw new common_1.NotFoundException(`User with email ${email} not found`);
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async findOneByStripeId(stripeId) {
        const user = await this.userRepository.findOne({
            where: { stripeCustomerId: stripeId },
            relations: {
                role: true,
            },
        });
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async findAll() {
        return this.userRepository.find({
            select: { id: true, name: true, email: true, stripeCustomerId: true },
        });
    }
    async updateRefreshToken(userId, refreshToken) {
        try {
            const user = await this.findOne(userId);
            user.refreshToken = refreshToken;
            return await this.userRepository.save(user);
        }
        catch (error) {
            throw error;
        }
    }
    async validateUser(email, password) {
        const user = this.userRepository.findOneBy({ email, password });
        if (user) {
            return { ...user, password: undefined };
        }
        return undefined;
    }
    async update(id, updateUserDto) {
        try {
            await this.findOne(id);
            if (updateUserDto.email) {
                const normalizedEmail = updateUserDto.email.toLowerCase();
                const existingUser = await this.userRepository.findOneBy({
                    email: normalizedEmail,
                });
                if (existingUser) {
                    throw new common_1.HttpException(`User with email: ${updateUserDto.email} already exists`, common_1.HttpStatus.BAD_REQUEST);
                }
            }
            const updatedUser = await this.userRepository.update(id, updateUserDto);
            if (!updatedUser.affected) {
                throw new common_1.HttpException('Could not update the user', common_1.HttpStatus.BAD_REQUEST);
            }
            return await this.findOne(id);
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            await this.findOne(id);
            const deletedUser = await this.userRepository.delete(id);
            if (!deletedUser.affected) {
                throw new common_1.HttpException('User not deleted', common_1.HttpStatus.NOT_FOUND);
            }
            return { message: 'User deleted successfully' };
        }
        catch (error) {
            throw error;
        }
    }
    async addMember(parentAccountId, addMemberDto) {
        const { email, roleId, modules, canDeleteAccount, userPermissions, folders, } = addMemberDto;
        const parentUser = await this.userRepository.findOne({
            where: { id: parentAccountId },
        });
        if (!parentUser) {
            throw new common_1.NotFoundException(`User with ID ${parentAccountId} not found`);
        }
        const normalizedEmail = email.toLowerCase();
        const existingUser = await this.userRepository.findOneBy({
            email: normalizedEmail,
        });
        if (existingUser) {
            throw new common_1.HttpException(`User with email: ${email} already exists`, common_1.HttpStatus.BAD_REQUEST);
        }
        const newMember = this.userRepository.create({
            email: normalizedEmail,
            memberRoleId: roleId,
            canDeleteAccount,
            userPermissions,
            isMember: status_num_1.StatusEnum.ENABLED,
            parentAccountId: parentUser.id,
            expired_at: parentUser?.expired_at,
            trial_ends_at: parentUser?.trial_ends_at,
        });
        if (modules?.length) {
            newMember.modules = await this.modulesService.findByIds(modules);
        }
        if (folders?.length) {
            newMember.folders = await this.foldersService.findByIds(folders);
        }
        const member = await this.userRepository.save(newMember);
        await this.authService.sendInvite(member.email, parentAccountId);
        return member;
    }
    async getMembers(userId) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
            relations: [
                'folders',
                'modules',
                'memberRole',
                'members',
                'members.folders',
                'members.modules',
                'members.memberRole',
            ],
            select: constants_1.MEMBER_SELECT_RESPONSE,
        });
        if (!user) {
            throw new common_1.HttpException(`User with id: ${userId} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async updatePassword(userId, updatePasswordDto) {
        const user = await this.findOne(userId);
        user.password = await bcrypt.hash(updatePasswordDto.password, 10);
        if (user.isMember) {
            user.registrationComplete = status_num_1.StatusEnum.ENABLED;
        }
        await this.userRepository.save(user);
        return { message: 'Password updated successfully' };
    }
    async updateMember(userId, memberId, updateMemberDto) {
        const { folders, modules, ...updateData } = updateMemberDto;
        const user = await this.getMembers(userId);
        const member = user.members.find((m) => m.id === memberId);
        if (!member) {
            throw new common_1.NotFoundException('Member not found');
        }
        if (modules?.length) {
            member.modules = await this.modulesService.findByIds(modules);
        }
        if (folders?.length) {
            member.folders = await this.foldersService.findByIds(folders);
        }
        await this.userRepository.save(member);
        await this.userRepository.update(member.id, updateData);
        return { message: 'Member updated successfully' };
    }
    async deleteMember(userId, memberId) {
        const user = await this.getMembers(userId);
        const member = user.members.find((m) => m.id === memberId);
        if (!member) {
            throw new common_1.NotFoundException('Member not found');
        }
        await this.userRepository.remove(member);
    }
    async saveUser(user) {
        await this.userRepository.save(user);
    }
    async generateToken(id) {
        try {
            await this.userRepository.findOne({
                where: { id },
            });
            await this.userRepository.update(id, {
                authToken: this.generateUUID(20),
            });
            return await this.findOne(id);
        }
        catch (error) {
            throw error;
        }
    }
    async findByAuthToken(authToken) {
        try {
            const user = await this.userRepository.findOne({
                where: { authToken },
            });
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    generateUUID(total) {
        if (!total) {
            total = 10;
        }
        return new Date().getTime().toString(total);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => qr_folders_service_1.QrFoldersService))),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        settings_service_1.SettingsService,
        qr_folders_service_1.QrFoldersService,
        modules_service_1.ModulesService,
        auth_service_1.AuthService])
], UsersService);
//# sourceMappingURL=users.service.js.map