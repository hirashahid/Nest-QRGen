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
exports.QrCodeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const qr_code_entity_1 = require("./entities/qr-code.entity");
const users_service_1 = require("../users/users.service");
const qr_scan_logs_service_1 = require("../qr-scan-logs/qr-scan-logs.service");
const qr_types_service_1 = require("../qr-types/qr-types.service");
const qr_folders_service_1 = require("../qr-folders/qr-folders.service");
const qr_domains_service_1 = require("../qr-domains/qr-domains.service");
const constants_1 = require("../constants");
const settings_service_1 = require("../settings/settings.service");
const helper_1 = require("../../utils/helper");
let QrCodeService = class QrCodeService {
    constructor(qrCodeRepository, userService, qrTypeService, qrFolderService, qrDomainService, qrScanLogService, settingsService) {
        this.qrCodeRepository = qrCodeRepository;
        this.userService = userService;
        this.qrTypeService = qrTypeService;
        this.qrFolderService = qrFolderService;
        this.qrDomainService = qrDomainService;
        this.qrScanLogService = qrScanLogService;
        this.settingsService = settingsService;
    }
    async create(createQrCodeDto) {
        const { user_id, qr_type_id, folder_id, domain_id, qr_string: reqQrString, } = createQrCodeDto;
        await this.userService.findOne(user_id);
        await this.qrTypeService.findOne(qr_type_id);
        if (folder_id)
            await this.qrFolderService.findOne(folder_id);
        if (domain_id)
            await this.qrDomainService.findOne(domain_id);
        const qrRedirectionDomain = await this.settingsService.findOneByKey('qr_redirection_domain');
        const qrString = reqQrString
            ? reqQrString
            : this.generateQrString(parseInt((await this.settingsService.findOneByKey('random_url_length'))
                .value));
        createQrCodeDto.qr_string = qrString;
        createQrCodeDto.redirectUrl = qrRedirectionDomain.value + qrString;
        const qrCode = this.qrCodeRepository.create(createQrCodeDto);
        return this.qrCodeRepository.save(qrCode);
    }
    async duplicateQrCode(qrCode) {
        const qrData = (0, helper_1.getQrCodeData)(qrCode);
        return this.create(qrData);
    }
    async bulkCreate(qrCodes, userId) {
        return await Promise.all(qrCodes.map(async (qrCode) => {
            await this.qrTypeService.findOneByName(qrCode.type);
            qrCode.user_id = userId;
            return await this.create(qrCode);
        }));
    }
    async bulkCreateForPublicApis(qrCodes, userId) {
        return await Promise.all(qrCodes.map(async (qrCode) => {
            const qrType = await this.qrTypeService.findOneByName(qrCode.type);
            if (qrCode.folder)
                await this.qrFolderService.findOneByUserId(qrCode.folder, userId);
            const updatedQrCode = new qr_code_entity_1.QrCode();
            updatedQrCode.qr_type_id = qrType.id;
            updatedQrCode.type = qrType.type;
            updatedQrCode.folder_id = qrCode?.folder;
            updatedQrCode.content = {
                formData: {
                    cardName: qrType.card_name,
                    ...qrCode.data,
                    globalGoogleAnalytics4TrackingID: qrCode.googleAnalyticsId,
                    globalFacebookID: qrCode.facebookPixelId,
                    globalGoogleTagManagerID: qrCode.googleTagManagerId,
                    globalEnableScanLimit: !!qrCode.scanLimit,
                },
                appearance: {
                    triggeredCard: qrType.card_name,
                    triggeredFrame: 1,
                    foregroundColor: '#9A9CEA',
                    backgroundColor: '#A2DCEE',
                    titleFontFamily: 'Lato',
                    textFontFamily: 'Lato',
                    triggeredQrType: qrType.type,
                },
                qrData: {
                    style: {
                        ...qrCode.style,
                    },
                },
            };
            if (qrCode.accessPassword) {
                updatedQrCode.activePassword = true;
                updatedQrCode.accessPassword = qrCode.accessPassword;
            }
            if (qrCode.scanLimit) {
                updatedQrCode.allowScanLimit = true;
                updatedQrCode.scanLimit = qrCode.scanLimit;
            }
            updatedQrCode.googleAnalyticsId = qrCode.googleAnalyticsId;
            updatedQrCode.facebookPixelId = qrCode.facebookPixelId;
            updatedQrCode.googleTagManagerId = qrCode.googleTagManagerId;
            updatedQrCode.user_id = userId;
            updatedQrCode.trackEvents = qrCode.trackEvents;
            updatedQrCode.name = qrCode.data?.qrName;
            updatedQrCode.isFavorite = !!qrCode.isFavorite;
            const savedQrCode = await this.create(updatedQrCode);
            return savedQrCode.id;
        }));
    }
    async bulkEditForPublicApis(qrCodes, userId) {
        return await Promise.all(qrCodes.map(async (qrCode) => {
            const existingQrCode = await this.qrCodeRepository.findOne({
                where: {
                    id: qrCode.id,
                    user_id: userId,
                },
            });
            if (!existingQrCode) {
                throw new common_1.NotFoundException(`QR Code with id: ${qrCode.id} not found`);
            }
            if (qrCode.folder)
                await this.qrFolderService.findOneByUserId(qrCode.folder, userId);
            const qrType = await this.qrTypeService.findOneByName(qrCode.type);
            existingQrCode.qr_type_id = qrType.id;
            existingQrCode.type = qrType.type;
            existingQrCode.name = qrCode?.name || existingQrCode.name;
            existingQrCode.folder_id = qrCode.folder || existingQrCode?.folder_id;
            existingQrCode.content = {
                ...existingQrCode.content,
                formData: {
                    cardName: qrType.card_name,
                    ...qrCode.data,
                    globalGoogleAnalytics4TrackingID: qrCode.googleAnalyticsId,
                    globalFacebookID: qrCode.facebookPixelId,
                    globalGoogleTagManagerID: qrCode.googleTagManagerId,
                    globalEnableScanLimit: !!qrCode.scanLimit,
                },
                qrData: {
                    style: {
                        ...qrCode.style,
                    },
                },
            };
            existingQrCode.activePassword = !!qrCode.accessPassword;
            existingQrCode.accessPassword = qrCode.accessPassword;
            existingQrCode.allowScanLimit = !!qrCode.scanLimit;
            existingQrCode.scanLimit = qrCode?.scanLimit;
            existingQrCode.googleAnalyticsId = qrCode.googleAnalyticsId;
            existingQrCode.facebookPixelId = qrCode.facebookPixelId;
            existingQrCode.googleTagManagerId = qrCode.googleTagManagerId;
            existingQrCode.trackEvents = qrCode.trackEvents;
            const saved = await this.qrCodeRepository.save(existingQrCode);
            return await this.findOneForPublicApi(saved.id, userId);
        }));
    }
    async findOneForPublicApi(id, userId) {
        try {
            const qrCode = await this.qrCodeRepository.findOne({
                where: { id, user_id: userId },
                relations: {
                    qr_type: true,
                    folder: true,
                },
                select: {
                    id: true,
                    name: true,
                    status: true,
                    user_id: true,
                    qr_type: {
                        id: true,
                        name: true,
                        type: true,
                    },
                    folder: {
                        id: true,
                        name: true,
                    },
                    content: {},
                    redirectUrl: true,
                    scanLimit: true,
                    allowScanLimit: true,
                    accessPassword: true,
                    activePassword: true,
                    googleAnalyticsId: true,
                    facebookPixelId: true,
                    trackEvents: true,
                    googleTagManagerId: true,
                    scanCount: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
            if (!qrCode) {
                throw new common_1.NotFoundException(`QR Code with id: ${id} not found`);
            }
            return qrCode;
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const qrCode = await this.qrCodeRepository.findOne({
                where: { id },
            });
            if (!qrCode) {
                throw new common_1.NotFoundException(`QR Code with id: ${id} not found`);
            }
            return qrCode;
        }
        catch (error) {
            throw error;
        }
    }
    async findByImageFormat(id, format, userId) {
        try {
            const qrCode = await this.qrCodeRepository.findOne({
                where: { id, user_id: userId, imageFormat: format },
                select: {
                    id: true,
                    qrImage: true,
                },
            });
            if (!qrCode) {
                throw new common_1.NotFoundException(`QR Code with id: ${id} or format: ${format} not found`);
            }
            return qrCode;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateQrCodeDto) {
        await this.findOne(id);
        if (updateQrCodeDto.folder_id)
            await this.qrFolderService.findOne(updateQrCodeDto.folder_id);
        await this.qrCodeRepository.update(id, updateQrCodeDto);
        return this.findOne(id);
    }
    async delete(id) {
        await this.findOne(id);
        const deletedQrCode = await this.qrCodeRepository.delete(id);
        if (!deletedQrCode.affected) {
            throw new common_1.HttpException('QR Code not deleted', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'QR Code is deleted' };
    }
    async getByStatus(query) {
        const { userId, status } = query;
        return this.qrCodeRepository.find({
            where: { user_id: userId, status },
            relations: constants_1.qrCodeRelations,
            select: constants_1.qrCodeSelectResponse,
        });
    }
    async get(dto) {
        const { page, per_page, user_id, name, status, favorites, types, sort_recent, sort_name, } = dto;
        return await this.fetchQrCodes({
            page,
            per_page,
            user_id,
            name,
            status,
            favorites,
            types,
            sort_recent,
            sort_name,
        });
    }
    async addToFavorites(id) {
        const qrCode = await this.findOne(id);
        qrCode.isFavorite = true;
        return this.qrCodeRepository.save(qrCode);
    }
    async removeFromFavorites(id) {
        const qrCode = await this.findOne(id);
        qrCode.isFavorite = false;
        return this.qrCodeRepository.save(qrCode);
    }
    async checkQrString(qrString) {
        const qrCode = await this.qrCodeRepository.findOne({
            where: { qr_string: qrString },
        });
        if (qrCode) {
            return { success: false, message: 'QR string already exist' };
        }
        return { success: true, message: 'QR string available' };
    }
    async updateText(qrCodeId, text) {
        const qrCode = await this.findOne(qrCodeId);
        qrCode.name = text;
        return this.qrCodeRepository.save(qrCode);
    }
    async getByRedirectUrl(redirectUrl) {
        const qrCode = await this.qrCodeRepository.findOne({
            where: { redirectUrl },
        });
        if (!qrCode) {
            throw new common_1.NotFoundException('QR Code not found');
        }
        return qrCode;
    }
    async getAnalytics(analyticsDto) {
        const { user_id, status, qr_code_type, start_date, end_date } = analyticsDto;
        const query = this.qrCodeRepository
            .createQueryBuilder('qrCode')
            .where('qrCode.user_id = :user_id', { user_id });
        if (status) {
            query.andWhere('qrCode.status = :status', { status });
        }
        if (qr_code_type) {
            query.andWhere('qrCode.qr_type_id = :qr_code_type', { qr_code_type });
        }
        if (start_date && end_date) {
            query.andWhere('qrCode.created_at BETWEEN :start_date AND :end_date', {
                start_date,
                end_date,
            });
        }
        return await query.getMany();
    }
    async getScanCount(qrId) {
        const qrCode = await this.findOne(qrId);
        return {
            total_scans: qrCode.scanCount,
            last_scan_at: qrCode.lastScanAt,
        };
    }
    async getQrTypeDistribution(userId) {
        try {
            await this.userService.findOne(userId);
            const data = await this.qrCodeRepository
                .createQueryBuilder('qrCode')
                .select('qrCode.qr_type_id', 'qr_type_id')
                .addSelect('COUNT(qrCode.id)', 'total')
                .where('qrCode.user_id = :userId', { userId })
                .groupBy('qrCode.qr_type_id')
                .getRawMany();
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async getQrCodeStats(qrStatsDto) {
        const { user_id } = qrStatsDto;
        await this.userService.findOne(user_id);
        const totalQrCodes = await this.qrCodeRepository.count({
            where: { user_id },
        });
        const totalScans = await this.qrCodeRepository
            .createQueryBuilder('qrCode')
            .select('SUM(qrCode.scan_count)', 'total_scans')
            .where('qrCode.user_id = :user_id', { user_id })
            .getRawOne();
        const recentlyGenerated = await this.qrCodeRepository.count({
            where: {
                user_id,
                createdAt: (0, typeorm_2.Between)(new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), new Date()),
            },
            order: { createdAt: 'DESC' },
        });
        const weeklyStats = await this.qrCodeRepository.find({
            where: {
                user_id,
                createdAt: (0, typeorm_2.Between)(new Date(new Date().setHours(0, 0, 0, 0)), new Date()),
            },
        });
        const monthlyStats = await this.qrCodeRepository.find({
            where: {
                user_id,
                createdAt: (0, typeorm_2.Between)(new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()),
            },
        });
        const weeklyGraphData = this.formatForGraph(weeklyStats);
        const monthlyGraphData = this.formatForGraph(monthlyStats);
        return {
            total_qr_codes: totalQrCodes,
            total_scans: totalScans.total_scans || 0,
            recently_generated: recentlyGenerated,
            weekly_stats: weeklyStats.length,
            monthly_stats: monthlyStats.length,
            weekly_graph: weeklyGraphData,
            monthly_graph: monthlyGraphData,
        };
    }
    formatForGraph(qrCodes) {
        const grouped = qrCodes.reduce((acc, qrCode) => {
            const date = qrCode.createdAt.toISOString().split('T')[0];
            if (!acc[date]) {
                acc[date] = { count: 0, types: {}, statuses: {} };
            }
            acc[date].count++;
            acc[date].types[qrCode.qr_type_id] =
                (acc[date].types[qrCode.qr_type_id] || 0) + 1;
            acc[date].statuses[qrCode.status] =
                (acc[date].statuses[qrCode.status] || 0) + 1;
            return acc;
        }, {});
        return grouped;
    }
    async getUserDashboardAnalytics(analyticsDto) {
        const { user_id, date_from, date_to } = analyticsDto;
        const qrCodes = await this.qrCodeRepository.find({
            where: {
                user_id,
                createdAt: date_from && date_to ? (0, typeorm_2.Between)(date_from, date_to) : undefined,
            },
        });
        const totalGeneratedQrCodes = qrCodes.length;
        const generatedWithContent = qrCodes.filter((qr) => qr.type !== 'static').length;
        const totalScans = qrCodes.reduce((sum, qr) => sum + (qr.scanCount || 0), 0);
        const dynamicQrCodes = qrCodes.filter((qr) => qr.type === 'dynamic').length;
        const staticQrCodes = qrCodes.filter((qr) => qr.type === 'static').length;
        const thisMonth = await this.qrCodeRepository.find({
            where: {
                user_id,
                createdAt: (0, typeorm_2.Between)(new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()),
            },
        });
        const thisMonthGeneratedQrCodes = thisMonth.length;
        const thisMonthGeneratedWithDates = await this.qrCodeRepository
            .createQueryBuilder('qr_code')
            .select([
            'qr_code.type',
            'DATE(qr_code.createdAt) as date',
            'COUNT(qr_code.id) as count',
        ])
            .where('qr_code.user_id = :user_id', { user_id })
            .andWhere('EXTRACT(MONTH FROM qr_code.createdAt) = EXTRACT(MONTH FROM CURRENT_DATE)')
            .groupBy('qr_code.type')
            .addGroupBy('DATE(qr_code.createdAt)')
            .orderBy('date', 'ASC')
            .getRawMany();
        const latestQr = await this.qrCodeRepository.find({
            where: { user_id },
            order: { createdAt: 'DESC' },
            take: 5,
        });
        const tenDaysVisitors = await this.qrScanLogService.getTenDaysVisitors(user_id);
        const dynamicQrCodesWithDates = this.qrScanLogService.getDynamicQrCodesWithDates(user_id, date_from, date_to);
        const staticQrCodesCountViews = await this.qrScanLogService.getStaticQrCodesCountViews(user_id, date_from, date_to);
        const staticQrCodesCountScans = await this.qrScanLogService.getStaticQrCodesCountScans(user_id, date_from, date_to);
        return {
            totalGeneratedQrCodes,
            generatedWithContent,
            totalScans,
            dynamicQrCodes,
            staticQrCodes,
            thisMonthGeneratedQrCodes,
            thisMonthGeneratedWithDates,
            tenDaysVisitors,
            latestQr,
            dynamicQrCodesWithDates,
            staticQrCodesCountViews,
            staticQrCodesCountScans,
        };
    }
    async fetchQrCodes({ page, per_page, user_id, name, status, favorites, types, sort_recent, sort_name, }) {
        const query = this.qrCodeRepository
            .createQueryBuilder('qrCode')
            .where('qrCode.user_id = :user_id', { user_id });
        if (name) {
            query.andWhere('qrCode.name LIKE :name', { name: `%${name}%` });
        }
        if (status) {
            query.andWhere('qrCode.status = :status', { status });
        }
        if (favorites) {
            query.andWhere('qrCode.isFavorite = :favorites', { favorites });
        }
        if (types && types.length) {
            query.andWhere('qrCode.type IN (:...types)', { types });
        }
        if (sort_name) {
            query.orderBy('qrCode.name', 'ASC');
        }
        if (sort_recent) {
            query.orderBy('qrCode.created_at', 'DESC');
        }
        const [result, total] = await query
            .skip((page - 1) * per_page)
            .take(per_page)
            .getManyAndCount();
        return {
            data: result,
            total,
            count: result.length,
            per_page,
            current_page: page,
            total_pages: Math.ceil(total / per_page),
        };
    }
    generateQrString(length = 10) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
};
exports.QrCodeService = QrCodeService;
exports.QrCodeService = QrCodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(qr_code_entity_1.QrCode)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        qr_types_service_1.QrTypeService,
        qr_folders_service_1.QrFoldersService,
        qr_domains_service_1.QrDomainsService,
        qr_scan_logs_service_1.QrScanLogService,
        settings_service_1.SettingsService])
], QrCodeService);
//# sourceMappingURL=qr-codes.service.js.map