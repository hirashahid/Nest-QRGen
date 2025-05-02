import { QrCode } from '../../qr-codes/entities/qr-code.entity';
export declare class QrScanLog {
    id: number;
    qr_code_id: number;
    log_type: string;
    ip_address: string;
    device: string;
    browser: string;
    platform: string;
    country: string;
    city: string;
    region: string;
    referrer: string;
    user_agent: string;
    latitude: string;
    longitude: string;
    created_at: Date;
    updated_at: Date;
    qrCode: QrCode;
}
