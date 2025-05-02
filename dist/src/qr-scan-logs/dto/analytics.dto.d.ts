import { Period } from 'src/enums/period.enum';
export declare class AnalyticsDto {
    user_id: number;
    qr_code_id?: number[];
    folderIds?: number[];
    date_from?: string;
    date_to?: string;
    countries?: string[];
    platform?: string[];
    period?: Period;
}
export declare class AnalyticsPublicDto {
    qr_code_id?: number[];
    folderIds?: number[];
    date_from?: string;
    date_to?: string;
    countries?: string[];
    platform?: string[];
    period?: Period;
}
