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
exports.QrDomainsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const qr_domain_entity_1 = require("./entities/qr-domain.entity");
const users_service_1 = require("../users/users.service");
const util_1 = require("util");
const dns = require("dns");
const settings_service_1 = require("../settings/settings.service");
const permission_type_enum_1 = require("../enums/permission-type.enum");
const helper_1 = require("../../utils/helper");
const module_enum_1 = require("../enums/module.enum");
const custom_hostname_service_1 = require("../custom-hostname.service");
let QrDomainsService = class QrDomainsService {
    constructor(qrDomainRepository, usersService, settingService, customHostnameService) {
        this.qrDomainRepository = qrDomainRepository;
        this.usersService = usersService;
        this.settingService = settingService;
        this.customHostnameService = customHostnameService;
        this.resolveCname = (0, util_1.promisify)(dns.resolveCname);
        this.resolveTxt = (0, util_1.promisify)(dns.resolveTxt);
    }
    async create(createQrDomainDto, userId, isDefault = false) {
        try {
            await this.checkPermissions(userId, permission_type_enum_1.PermissionType.CREATE);
            const domain = await this.qrDomainRepository.findOne({
                where: {
                    domain: createQrDomainDto.domain,
                    userId,
                },
            });
            if (domain) {
                throw new common_1.HttpException(`Domain with name: ${createQrDomainDto.domain} already exists`, common_1.HttpStatus.BAD_REQUEST);
            }
            createQrDomainDto.tls_version = createQrDomainDto.tls_version.replace('TLS ', '');
            if (isDefault) {
                const qrDomain = this.qrDomainRepository.create(createQrDomainDto);
                qrDomain.userId = userId;
                qrDomain.cname = "custom.qr-gen.com";
                qrDomain.txt_record = "custom.qr-gen.com";
                qrDomain.is_verified = 1;
                qrDomain.is_default = 1;
                return this.qrDomainRepository.save(qrDomain);
            }
            else {
                const registerDomain = await this.customHostnameService.registerCustomDomain(createQrDomainDto.domain, createQrDomainDto.tls_version);
                const qrDomain = this.qrDomainRepository.create(createQrDomainDto);
                qrDomain.cname = "custom.qr-gen.com";
                qrDomain.userId = userId;
                qrDomain.txt_record = registerDomain.result.ownership_verification.name;
                qrDomain.txt_record_value = registerDomain.result.ownership_verification.value;
                qrDomain.cloudflare_id = registerDomain.result.id;
                qrDomain.cloudflare_data = { ...registerDomain };
                return await this.qrDomainRepository.save(qrDomain);
            }
        }
        catch (error) {
            throw error;
        }
    }
    async findAll(userId) {
        const defaultDomain = await this.qrDomainRepository.findOne({
            where: { userId, is_default: 1 },
        });
        if (!defaultDomain) {
            let defaultDomainName = 'qr-gen.com';
            const settingDefaultDomain = await this.settingService.findOneByKey('default_domain');
            if (settingDefaultDomain) {
                defaultDomainName = settingDefaultDomain.value;
            }
            await this.create({
                domain: defaultDomainName,
                tls_version: '1.2',
                status: 1,
            }, userId, true);
        }
        try {
            return await this.qrDomainRepository.find({
                where: { userId },
                relations: { qrCodes: true },
                select: {
                    id: true,
                    userId: true,
                    domain: true,
                    tls_version: true,
                    cname: true,
                    txt_record: true,
                    txt_record_value: true,
                    status: true,
                    is_verified: true,
                    is_default: true,
                    cloudflare_id: true,
                    qrCodes: {
                        id: true,
                        name: true,
                    },
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const qrDomain = await this.qrDomainRepository.findOne({
                where: { id },
            });
            if (!qrDomain) {
                throw new common_1.HttpException(`QrDomain with id: ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            return qrDomain;
        }
        catch (error) {
            throw error;
        }
    }
    async findData(id) {
        try {
            const qrDomain = await this.qrDomainRepository.findOne({
                where: { id },
                relations: { qrCodes: true },
                select: {
                    id: true,
                    userId: true,
                    domain: true,
                    tls_version: true,
                    cname: true,
                    txt_record: true,
                    txt_record_value: true,
                    cloudflare_id: true,
                    status: true,
                    is_verified: true,
                    is_default: true,
                    qrCodes: {
                        id: true,
                        name: true,
                    },
                },
            });
            if (!qrDomain) {
                throw new common_1.HttpException(`QrDomain with id: ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            const qrCodesCount = qrDomain.qrCodes ? qrDomain.qrCodes.length : 0;
            return {
                ...qrDomain,
                qr_codes: qrCodesCount,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateQrDomainDto, userId) {
        try {
            await this.checkPermissions(userId, permission_type_enum_1.PermissionType.EDIT);
            const existingRecord = await this.findOne(id);
            if (updateQrDomainDto.domain) {
                const domain = await this.qrDomainRepository.findOne({
                    where: { domain: updateQrDomainDto.domain },
                });
                updateQrDomainDto.tls_version = updateQrDomainDto.tls_version.replace('TSL ', '');
                if (domain && domain.id !== id) {
                    throw new common_1.HttpException(`Domain with name: ${updateQrDomainDto.domain} already exists`, common_1.HttpStatus.BAD_REQUEST);
                }
                else {
                    if (existingRecord.domain != updateQrDomainDto.domain) {
                        const registerDomain = await this.customHostnameService.registerCustomDomain(updateQrDomainDto.domain, updateQrDomainDto.tls_version);
                        updateQrDomainDto.txt_record = registerDomain.result.ownership_verification.name;
                        updateQrDomainDto.txt_record_value = registerDomain.result.ownership_verification.value;
                        updateQrDomainDto.cloudflare_id = registerDomain.result.id;
                        updateQrDomainDto.cloudflare_data = { ...registerDomain };
                    }
                }
            }
            await this.qrDomainRepository.update(id, updateQrDomainDto);
            return this.findOne(id);
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id, userId) {
        try {
            await this.checkPermissions(userId, permission_type_enum_1.PermissionType.DELETE);
            const domain = await this.findOne(id);
            if (domain.qrCodes?.length) {
                const qrCodeIds = domain.qrCodes.map((qrCode) => qrCode.id);
                await this.bulkUpdateQrCodes(qrCodeIds);
            }
            await this.qrDomainRepository.delete(id);
            return { message: 'QrDomain deleted successfully' };
        }
        catch (error) {
            throw error;
        }
    }
    async verify(id) {
        const qrDomain = await this.findOne(id);
        try {
            if (!qrDomain.is_verified) {
                await this.customHostnameService.installCertificates(qrDomain.domain);
            }
            const registerDomain = await this.customHostnameService.verifyDetails(qrDomain.cloudflare_id);
            if (registerDomain.result.status) {
                qrDomain.is_verified = registerDomain.result.status == 'pending' ? 0 : 1;
                qrDomain.status = registerDomain.result.status == 'pending' ? 0 : 1;
                await this.customHostnameService.verifyDetails(qrDomain.cloudflare_id);
            }
            await this.qrDomainRepository.update(id, qrDomain);
            return this.findOne(id);
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException(`Pending verification for domain: ${qrDomain.domain}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async bulkUpdateQrCodes(qrCodeIds) {
        await this.qrDomainRepository
            .createQueryBuilder()
            .update('qr_code')
            .set({ domain_id: null })
            .where('id IN (:...qrCodeIds)', { qrCodeIds })
            .execute();
    }
    async checkPermissions(userId, permissionType) {
        const user = await this.usersService.getMembers(userId);
        if (!(0, helper_1.hasPermission)(user, module_enum_1.ModuleEnum.MY_DOMAINS, permissionType)) {
            throw new common_1.HttpException('You are not authorized to perform this action', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
exports.QrDomainsService = QrDomainsService;
exports.QrDomainsService = QrDomainsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(qr_domain_entity_1.QrDomain)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        settings_service_1.SettingsService,
        custom_hostname_service_1.CustomHostnameService])
], QrDomainsService);
//# sourceMappingURL=qr-domains.service.js.map