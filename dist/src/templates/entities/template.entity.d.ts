import { QRTemplateType } from 'src/enums/qr-template-type.enum';
import { IQrStyle } from '../../interfaces/qr-style.interface';
import { User } from '../../users/entities/user.entity';
export declare class Template {
    id: number;
    type: QRTemplateType;
    style: IQrStyle;
    user: User;
    userId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
