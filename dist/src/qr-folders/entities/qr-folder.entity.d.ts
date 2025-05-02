import { QrCode } from 'src/qr-codes/entities/qr-code.entity';
import { User } from '../../users/entities/user.entity';
export declare class QrFolder {
    id: number;
    name: string;
    user: User;
    user_id: number;
    status: number;
    parent_id: number;
    qrCodes?: QrCode[];
    created_at: Date;
    updated_at: Date;
}
