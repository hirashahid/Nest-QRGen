import { ContentDto, CreateQrCodeDto, ScheduleDto, StatsDto } from './create-qr-code.dto';
declare const UpdateQrCodeDto_base: import("@nestjs/common").Type<Partial<CreateQrCodeDto>>;
export declare class UpdateQrCodeDto extends UpdateQrCodeDto_base {
    id: number;
}
export declare class UpdateQrCodeNewDto {
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
export declare class BulkDeleteQrCodeDto {
    ids: number[];
}
export {};
