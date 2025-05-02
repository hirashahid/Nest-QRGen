export declare class ContentDto {
    color: string;
    size: number;
}
export declare class ScheduleDto {
    timer_range: string;
}
export declare class StatsDto {
    scan_limit: string;
}
export declare class CreateQrCodeDto {
    status: number;
    user_id: number;
    type: string;
    redirectUrl: string;
    qr_string: string;
    qr_type_id: number;
    folder_id: number;
    domain_id?: number;
    name: string;
    content: object;
    style: object;
    schedule: object;
    stats: object;
    qrImage?: string;
    scanLimit?: number;
    allowScanLimit?: boolean;
    accessPassword?: string;
    activePassword?: boolean;
    googleAnalyticsId?: string;
    facebookPixelId?: string;
    trackEvents?: boolean;
    googleTagManagerId?: string;
}
export declare class CreateQrCodePublicDto {
    status: number;
    type: string;
    qr_type_id: number;
    folder_id: number;
    name: string;
    content: ContentDto;
    style: ContentDto;
    schedule: ScheduleDto;
    stats: StatsDto;
    scanLimit?: number;
    allowScanLimit?: boolean;
    accessPassword?: string;
    activePassword?: boolean;
    googleAnalyticsId?: string;
    facebookPixelId?: string;
    trackEvents?: boolean;
    googleTagManagerId?: string;
}
