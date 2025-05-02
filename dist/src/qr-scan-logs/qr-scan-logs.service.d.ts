import { Repository } from 'typeorm';
import { QrScanLog } from './entities/qr-scan-log.entity';
import { QrCode } from '../qr-codes/entities/qr-code.entity';
import { CreateQrScanLogDto } from './dto/create-qr-scan-log.dto';
import { AnalyticsDto } from './dto/analytics.dto';
import { UsersService } from 'src/users/users.service';
export declare class QrScanLogService {
    private readonly qrScanLogRepository;
    private readonly qrCodeRepository;
    private readonly usersService;
    constructor(qrScanLogRepository: Repository<QrScanLog>, qrCodeRepository: Repository<QrCode>, usersService: UsersService);
    create(createQrScanLogDto: CreateQrScanLogDto): Promise<QrScanLog>;
    analytics(analyticsDto: AnalyticsDto): Promise<any>;
    getTenDaysVisitors(user_id: number): Promise<any[]>;
    getDynamicQrCodesWithDates(user_id: number, date_from: Date, date_to: Date): Promise<any[]>;
    getStaticQrCodesCountViews(user_id: number, date_from: Date, date_to: Date): Promise<number>;
    getStaticQrCodesCountScans(user_id: number, date_from: Date, date_to: Date): Promise<number>;
}
