import { User } from '../../users/entities/user.entity';
import { QrCode } from 'src/qr-codes/entities/qr-code.entity';
export declare class QrDomain {
    id: number;
    user?: User;
    userId: number;
    domain: string;
    tls_version: string;
    cname: string;
    txt_record: string;
    status: number;
    is_verified: number;
    qrCodes?: QrCode[];
    qr_codes?: number;
    createdAt?: Date;
    updatedAt?: Date;
    is_default: number;
    cloudflare_id: string;
    txt_record_value: string;
    cloudflare_data: object;
}
