import { VcardPlusFormDataDto, ProductFormDataDto, CouponFormDataDto, PdfFormDataDto, PlaylistFormDataDto, ImageFormDataDto, BusinessFormDataDto, AppsFormDataDto, SocialMediaFormDataDto, EventFormDataDto, ListOfLinksFormDataDto, WifiFormDataDto, VcardFormDataDto, EmailFormDataDto, TextFormDataDto, WhatsAppFormDataDto, URLFormData } from './all-qr-types-form-data.dto';
import { QrTypeEnum } from 'src/enums/qr-type.enum';
import { VideoFormDataDto } from './video-form-data.dto';
import { WebsiteFormDataDto } from './website-form-data.dto';
import { QrStyleDataDto } from './qr-style.dto';
export declare const polymorphicType: (obj: any) => ObjectConstructor | typeof EventFormDataDto | typeof ProductFormDataDto | typeof CouponFormDataDto | typeof PdfFormDataDto | typeof PlaylistFormDataDto | typeof ImageFormDataDto | typeof AppsFormDataDto | typeof SocialMediaFormDataDto | typeof ListOfLinksFormDataDto | typeof URLFormData | typeof WifiFormDataDto | typeof VcardFormDataDto | typeof EmailFormDataDto | typeof TextFormDataDto | typeof WhatsAppFormDataDto | typeof VideoFormDataDto | typeof WebsiteFormDataDto;
export declare class BulkQrCodeDto {
    type: QrTypeEnum;
    folder: number;
    data: EventFormDataDto | VcardPlusFormDataDto | ProductFormDataDto | CouponFormDataDto | PdfFormDataDto | PlaylistFormDataDto | ImageFormDataDto | BusinessFormDataDto | AppsFormDataDto | SocialMediaFormDataDto | ListOfLinksFormDataDto;
    style: QrStyleDataDto;
    scanLimit?: number;
    accessPassword?: string;
    googleAnalyticsId?: string;
    facebookPixelId?: string;
    trackEvents?: boolean;
    isFavorite?: boolean;
    googleTagManagerId?: string;
}
