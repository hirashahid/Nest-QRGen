import { QrCodeService } from './qr-codes.service';
import { CreateQrCodeDto } from './dto/create-qr-code.dto';
import { UpdateQrCodeNewDto } from './dto/update-qr-code.dto';
import { QrStatsDto } from './dto/qr-stats.dto';
import { QrAnalyticsDto } from './dto/qr-analytics.dto';
import { UserDashboardAnalyticsDto } from './dto/user-dashboard-analytics.dto';
import { GetByPaginationQueryDto } from './dto/get-by-pagination-query.dto';
import { SettingsService } from '../settings/settings.service';
import { GetByStatusDto } from './dto/get-by-status.dto';
export declare class QrCodeController {
    private readonly qrCodeService;
    private readonly settingsService;
    constructor(qrCodeService: QrCodeService, settingsService: SettingsService);
    store(createQrCodeDto: CreateQrCodeDto): Promise<import("./entities/qr-code.entity").QrCode>;
    bulkStore(qrCodes: CreateQrCodeDto[], userId: number): Promise<import("./entities/qr-code.entity").QrCode[]>;
    update(id: number, updateQrCodeDto: UpdateQrCodeNewDto): Promise<import("./entities/qr-code.entity").QrCode>;
    delete(id: number): Promise<import("../interfaces/response-message.interface").IResponseMessage>;
    getByStatus(query: GetByStatusDto): Promise<import("./entities/qr-code.entity").QrCode[]>;
    get(dto: GetByPaginationQueryDto): Promise<{
        data: import("./entities/qr-code.entity").QrCode[];
        pagination: any;
    }>;
    addToFavorites(id: number): Promise<import("./entities/qr-code.entity").QrCode>;
    removeFromFavorites(id: number): Promise<import("./entities/qr-code.entity").QrCode>;
    checkQrString(qrString: string): Promise<import("../interfaces/response-message.interface").IResponseMessage>;
    updateText(qrCodeId: number, text: string): Promise<import("./entities/qr-code.entity").QrCode>;
    getById(id: number): Promise<import("./entities/qr-code.entity").QrCode>;
    getByRedirectUrl(redirectUrl: string): Promise<import("./entities/qr-code.entity").QrCode>;
    getAnalytics(analyticsDto: QrAnalyticsDto): Promise<any>;
    getScanCount(qrId: number): Promise<any>;
    getQrTypeDistribution(userId: number): Promise<any>;
    getQrCodeStats(qrStatsDto: QrStatsDto): Promise<any>;
    getUserDashboardAnalytics(analyticsDto: UserDashboardAnalyticsDto): Promise<any>;
    duplicateQrCode(query: any): Promise<import("./entities/qr-code.entity").QrCode>;
}
