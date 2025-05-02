import { QrTypeEnum } from 'src/enums/qr-type.enum';
import { AppsFormDataDto, BusinessFormDataDto, CouponFormDataDto, EventFormDataDto, ImageFormDataDto, ListOfLinksFormDataDto, PdfFormDataDto, PlaylistFormDataDto, ProductFormDataDto, SocialMediaFormDataDto, VcardPlusFormDataDto } from './all-qr-types-form-data.dto';
import { QrStyleDataDto } from './qr-style.dto';
export declare class BulkEditQrCodeDto {
    id: number;
    name: string;
    type: QrTypeEnum;
    folder: number;
    data: EventFormDataDto | VcardPlusFormDataDto | ProductFormDataDto | CouponFormDataDto | PdfFormDataDto | PlaylistFormDataDto | ImageFormDataDto | BusinessFormDataDto | AppsFormDataDto | SocialMediaFormDataDto | ListOfLinksFormDataDto;
    style: QrStyleDataDto;
    scanLimit?: number;
    accessPassword?: string;
    googleAnalyticsId?: string;
    facebookPixelId?: string;
    trackEvents?: boolean;
    googleTagManagerId?: string;
}
