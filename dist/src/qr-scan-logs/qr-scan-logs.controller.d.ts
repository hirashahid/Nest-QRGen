import { QrScanLogService } from './qr-scan-logs.service';
import { CreateQrScanLogDto } from './dto/create-qr-scan-log.dto';
import { AnalyticsDto } from './dto/analytics.dto';
export declare class QrScanLogController {
    private readonly qrScanLogService;
    constructor(qrScanLogService: QrScanLogService);
    store(createQrScanLogDto: CreateQrScanLogDto): Promise<import("./entities/qr-scan-log.entity").QrScanLog>;
    analytics(analyticsDto: AnalyticsDto): Promise<any>;
}
