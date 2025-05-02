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
exports.QrScanLogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const qr_scan_log_entity_1 = require("./entities/qr-scan-log.entity");
const qr_code_entity_1 = require("../qr-codes/entities/qr-code.entity");
const period_enum_1 = require("../enums/period.enum");
const helper_1 = require("../../utils/helper");
const users_service_1 = require("../users/users.service");
let QrScanLogService = class QrScanLogService {
    constructor(qrScanLogRepository, qrCodeRepository, usersService) {
        this.qrScanLogRepository = qrScanLogRepository;
        this.qrCodeRepository = qrCodeRepository;
        this.usersService = usersService;
    }
    async create(createQrScanLogDto) {
        const qrCode = await this.qrCodeRepository.findOne({
            where: { id: createQrScanLogDto.qr_code_id },
        });
        if (!qrCode) {
            throw new common_1.NotFoundException('QR Code not found');
        }
        const qrScanLog = this.qrScanLogRepository.create(createQrScanLogDto);
        await this.qrScanLogRepository.save(qrScanLog);
        qrCode.scanCount += 1;
        qrCode.lastScanAt = new Date();
        await this.qrCodeRepository.save(qrCode);
        return qrScanLog;
    }
    async analytics(analyticsDto) {
        const { user_id, qr_code_id, folderIds, date_from, date_to, countries, platform, period = period_enum_1.Period.DAY, } = analyticsDto;
        const dateFrom = new Date(date_from);
        const dateTo = new Date(date_to);
        const dates = (0, helper_1.getDates)(dateFrom, dateTo, period);
        let qrCodes = await this.qrCodeRepository.find({
            where: { user_id },
            relations: ['scanLogs'],
        });
        if (qr_code_id) {
            qrCodes = qrCodes.filter((qrCode) => qr_code_id.includes(qrCode.id));
        }
        if (folderIds) {
            qrCodes = qrCodes.filter((qrCode) => folderIds.includes(qrCode.folder_id));
        }
        if (qrCodes.length === 0) {
            throw new common_1.NotFoundException('No QR Codes found');
        }
        const qrCodeIds = qrCodes.map((qrCode) => qrCode.id);
        const baseQuery = this.qrScanLogRepository
            .createQueryBuilder('log')
            .where('log.qr_code_id IN (:...qrCodeIds)', { qrCodeIds });
        if (date_from)
            baseQuery.andWhere('log.created_at >= :dateFrom', {
                dateFrom: date_from,
            });
        if (date_to)
            baseQuery.andWhere('log.created_at <= :dateTo', { dateTo: date_to });
        if (countries && countries.length > 0)
            baseQuery.andWhere('log.country IN (:...countries)', { countries });
        if (platform && platform.length)
            baseQuery.andWhere('log.platform IN (:...platform)', { platform });
        const scansLogs = await baseQuery.getRawMany();
        const logIds = scansLogs.map((log) => log.log_id);
        const totalScans = scansLogs.length;
        let totalUniqueScans = { total: 0 }, totalVisits = { total: 0 }, statisticsByCountry = [], statisticsByCity = [], statisticsByRegion = [], statisticsByPlatform = [], statisticsByBrowser = [], statisticsByTimeOfDay = [], statisticsByPeriod = [];
        if (logIds.length) {
            totalUniqueScans = await this.qrScanLogRepository
                .createQueryBuilder('log')
                .where('log.id IN (:...logIds)', { logIds })
                .select('COUNT(DISTINCT log.ip_address)', 'total')
                .getRawOne();
            totalVisits = await this.qrScanLogRepository
                .createQueryBuilder('log')
                .where('log.id IN (:...logIds)', { logIds })
                .andWhere('log.log_type = :type', { type: 'visit' })
                .select('COUNT(log.id)', 'total')
                .getRawOne();
            statisticsByCountry = await this.qrScanLogRepository
                .createQueryBuilder('log')
                .where('log.id IN (:...logIds)', { logIds })
                .select('log.country', 'country')
                .addSelect('COUNT(log.id)', 'total')
                .groupBy('log.country')
                .getRawMany();
            statisticsByCity = await this.qrScanLogRepository
                .createQueryBuilder('log')
                .where('log.id IN (:...logIds)', { logIds })
                .select('log.city', 'city')
                .addSelect('COUNT(log.id)', 'total')
                .groupBy('log.city')
                .getRawMany();
            statisticsByRegion = await this.qrScanLogRepository
                .createQueryBuilder('log')
                .where('log.id IN (:...logIds)', { logIds })
                .select('log.region', 'region')
                .addSelect('COUNT(log.id)', 'total')
                .groupBy('log.region')
                .getRawMany();
            statisticsByPlatform = await this.qrScanLogRepository
                .createQueryBuilder('log')
                .where('log.id IN (:...logIds)', { logIds })
                .select('log.platform', 'platform')
                .addSelect('COUNT(log.id)', 'total')
                .groupBy('log.platform')
                .getRawMany();
            statisticsByBrowser = await this.qrScanLogRepository
                .createQueryBuilder('log')
                .where('log.id IN (:...logIds)', { logIds })
                .select('log.browser', 'browser')
                .addSelect('COUNT(log.id)', 'total')
                .groupBy('log.browser')
                .getRawMany();
            statisticsByTimeOfDay = await this.qrScanLogRepository
                .createQueryBuilder('log')
                .where('log.id IN (:...logIds)', { logIds })
                .select("TO_CHAR(log.created_at, 'HH24:00')", 'hour')
                .addSelect("TRIM(TO_CHAR(log.created_at, 'Day'))", 'day')
                .addSelect('COUNT(log.id)', 'total')
                .groupBy('hour')
                .addGroupBy('day')
                .orderBy('day', 'ASC')
                .addOrderBy('hour', 'ASC')
                .getRawMany();
            statisticsByTimeOfDay = statisticsByTimeOfDay?.reduce((acc, curr) => {
                const { day, hour, total } = curr;
                let dayEntry = acc.find((entry) => entry.day === day);
                if (!dayEntry) {
                    dayEntry = { day, CountByHours: [] };
                    acc.push(dayEntry);
                }
                dayEntry.CountByHours.push({ hour, total });
                return acc;
            }, []);
            statisticsByPeriod = await this.qrScanLogRepository
                .createQueryBuilder('log')
                .where('log.id IN (:...logIds)', { logIds })
                .select(`DATE_TRUNC('${period}', log.created_at)`, 'period')
                .addSelect('COUNT(log.id)', 'totalScans')
                .addSelect('COUNT(DISTINCT log.ip_address)', 'totalUniqueScans')
                .addSelect("SUM(CASE WHEN log.log_type = 'visit' THEN 1 ELSE 0 END)", 'totalVisits')
                .groupBy('period')
                .orderBy('period', 'ASC')
                .getRawMany();
            statisticsByPeriod = (0, helper_1.mapItemsToDates)(dates, statisticsByPeriod);
        }
        return {
            totalQrCodes: qrCodes.length,
            totalScans,
            totalUniqueScans: totalUniqueScans.total,
            totalVisits: totalVisits.total,
            statisticsByCountry,
            statisticsByCity,
            statisticsByRegion,
            statisticsByPlatform,
            statisticsByBrowser,
            statisticsByTimeOfDay,
            statisticsByPeriod,
        };
    }
    async getTenDaysVisitors(user_id) {
        return await this.qrScanLogRepository
            .createQueryBuilder('log')
            .select(['DATE(log.created_at) as date', 'COUNT(log.id) as count'])
            .innerJoin('log.qrCode', 'qrCode')
            .where('qrCode.user_id = :user_id', { user_id })
            .andWhere('log.created_at >= :tenDaysAgo', {
            tenDaysAgo: new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000),
        })
            .groupBy('DATE(log.created_at)')
            .orderBy('date', 'ASC')
            .getRawMany();
    }
    async getDynamicQrCodesWithDates(user_id, date_from, date_to) {
        return await this.qrScanLogRepository
            .createQueryBuilder('log')
            .select(['DATE(log.created_at) as date', 'COUNT(log.id) as count'])
            .innerJoin('log.qrCode', 'qrCode')
            .where('qrCode.user_id = :user_id', { user_id })
            .andWhere('qrCode.type = :type', { type: 'dynamic' })
            .andWhere(date_from ? 'log.created_at >= :date_from' : '1=1', {
            date_from,
        })
            .andWhere(date_to ? 'log.created_at <= :date_to' : '1=1', { date_to })
            .groupBy('DATE(log.created_at)')
            .orderBy('date', 'ASC')
            .limit(10)
            .getRawMany();
    }
    async getStaticQrCodesCountViews(user_id, date_from, date_to) {
        return await this.qrScanLogRepository
            .createQueryBuilder('log')
            .innerJoin('log.qrCode', 'qrCode')
            .where('qrCode.user_id = :user_id', { user_id })
            .andWhere('qrCode.type = :type', { type: 'static' })
            .andWhere('log.log_type = :log_type', { log_type: 'view' })
            .andWhere(date_from ? 'log.created_at >= :date_from' : '1=1', {
            date_from,
        })
            .andWhere(date_to ? 'log.created_at <= :date_to' : '1=1', { date_to })
            .getCount();
    }
    async getStaticQrCodesCountScans(user_id, date_from, date_to) {
        return await this.qrScanLogRepository
            .createQueryBuilder('log')
            .innerJoin('log.qrCode', 'qrCode')
            .where('qrCode.user_id = :user_id', { user_id })
            .andWhere('qrCode.type = :type', { type: 'static' })
            .andWhere('log.log_type = :log_type', { log_type: 'scan' })
            .andWhere(date_from ? 'log.created_at >= :date_from' : '1=1', {
            date_from,
        })
            .andWhere(date_to ? 'log.created_at <= :date_to' : '1=1', { date_to })
            .getCount();
    }
};
exports.QrScanLogService = QrScanLogService;
exports.QrScanLogService = QrScanLogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(qr_scan_log_entity_1.QrScanLog)),
    __param(1, (0, typeorm_1.InjectRepository)(qr_code_entity_1.QrCode)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        users_service_1.UsersService])
], QrScanLogService);
//# sourceMappingURL=qr-scan-logs.service.js.map