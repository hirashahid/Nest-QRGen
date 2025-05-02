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
exports.QrFoldersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const qr_folder_entity_1 = require("./entities/qr-folder.entity");
const users_service_1 = require("../users/users.service");
const permission_type_enum_1 = require("../enums/permission-type.enum");
const helper_1 = require("../../utils/helper");
const module_enum_1 = require("../enums/module.enum");
const member_role_enum_1 = require("../enums/member-role.enum");
let QrFoldersService = class QrFoldersService {
    constructor(qrFolderRepository, usersService) {
        this.qrFolderRepository = qrFolderRepository;
        this.usersService = usersService;
    }
    async create(dto, userId) {
        await this.checkPermissions(userId, permission_type_enum_1.PermissionType.CREATE);
        const user = await this.usersService.getMembers(userId);
        const existingFolder = await this.getByName(dto.name, userId);
        if (existingFolder) {
            throw new common_1.HttpException('Folder name already exists for this user', common_1.HttpStatus.BAD_REQUEST);
        }
        const qrFolder = this.qrFolderRepository.create(dto);
        qrFolder.user_id = userId;
        const folder = await this.qrFolderRepository.save(qrFolder);
        if (user.isMember) {
            const userFolders = [...user.folders, folder];
            user.folders = userFolders;
            await this.usersService.saveUser(user);
        }
        return folder;
    }
    async findAll(user_id) {
        let user = await this.usersService.getMembers(user_id);
        let folderIds = [];
        const isAdminMember = user.isMember && user.memberRole?.name === member_role_enum_1.MemberRoleEnum.ADMIN;
        if (user.isMember && !isAdminMember) {
            folderIds = user.folders.map((folder) => folder.id);
        }
        else {
            if (isAdminMember) {
                user_id = user.parentAccountId;
                user = await this.usersService.getMembers(user_id);
            }
            const userFolders = await this.qrFolderRepository.find({
                where: { user_id },
            });
            folderIds.push(...userFolders.map((folder) => folder.id));
            user.members.forEach((member) => {
                folderIds.push(...member.folders.map((folder) => folder.id));
            });
        }
        if (!folderIds.length) {
            return [];
        }
        return this.qrFolderRepository
            .createQueryBuilder('folder')
            .leftJoinAndSelect('folder.qrCodes', 'qrCode')
            .where('folder.id IN (:...folderIds)', { folderIds })
            .select([
            'folder.id AS id',
            'folder.name AS name',
            'folder.status AS status',
            'folder.user_id AS "userId"',
            'folder.parent_id AS "parentId"',
            'folder.created_at AS "createdAt"',
            'CAST(COUNT(qrCode.id) AS INTEGER) AS "qrCodes"',
        ])
            .groupBy('folder.id')
            .getRawMany();
    }
    async findByIds(folderIds) {
        return this.qrFolderRepository.find({
            where: { id: (0, typeorm_2.In)(folderIds) },
            select: {
                id: true,
                name: true,
            },
        });
    }
    async findOne(id) {
        const qrFolder = await this.qrFolderRepository.findOne({
            where: { id },
            relations: { qrCodes: true },
        });
        if (!qrFolder)
            throw new common_1.NotFoundException(`QR Folder with ID ${id} not found`);
        return qrFolder;
    }
    async findOneByUserId(id, userid) {
        const qrFolder = await this.qrFolderRepository.findOne({
            where: { id, user_id: userid },
        });
        if (!qrFolder)
            throw new common_1.NotFoundException(`QR Folder with ID ${id} not found`);
        return qrFolder;
    }
    async update(id, dto, userId) {
        await this.checkPermissions(userId, permission_type_enum_1.PermissionType.EDIT);
        await this.findOne(id);
        const existingFolder = await this.getByName(dto.name, userId);
        if (existingFolder && existingFolder.id !== id) {
            throw new common_1.HttpException('Folder name already exists for this user', common_1.HttpStatus.BAD_REQUEST);
        }
        await this.qrFolderRepository.update(id, dto);
        return this.findOne(id);
    }
    async remove(id, userId) {
        const folder = await this.findOne(id);
        await this.checkPermissions(userId, permission_type_enum_1.PermissionType.DELETE);
        if (folder.qrCodes.length) {
            const qrCodeIds = folder.qrCodes.map((qrCode) => qrCode.id);
            await this.bulkUpdateQrCodes(qrCodeIds);
        }
        const deletedFolder = await this.qrFolderRepository.delete(id);
        if (!deletedFolder.affected) {
            throw new common_1.HttpException('Folder not deleted', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'Folder is deleted' };
    }
    getByName(name, user_id) {
        return this.qrFolderRepository.findOne({ where: { name, user_id } });
    }
    getFoldersByUserId(user_id) {
        return this.qrFolderRepository.find({
            where: { user_id },
        });
    }
    async bulkUpdateQrCodes(qrCodeIds) {
        await this.qrFolderRepository
            .createQueryBuilder()
            .update('qr_code')
            .set({ folder_id: null })
            .where('id IN (:...qrCodeIds)', { qrCodeIds })
            .execute();
    }
    async checkPermissions(userId, permissionType) {
        const user = await this.usersService.getMembers(userId);
        if (!(0, helper_1.hasPermission)(user, module_enum_1.ModuleEnum.MY_QR_CODES, permissionType)) {
            throw new common_1.HttpException('You are not authorized to perform this action', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
exports.QrFoldersService = QrFoldersService;
exports.QrFoldersService = QrFoldersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(qr_folder_entity_1.QrFolder)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], QrFoldersService);
//# sourceMappingURL=qr-folders.service.js.map