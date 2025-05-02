import { ErrorCorrectionLevel } from 'src/enums/error-correction-level.enum';
import { QrDataTypeEnum } from 'src/enums/qr-data-type.enum';
declare class ColorStopDto {
    color: string;
    offset: number;
}
declare class GradientDto {
    type: string;
    rotation?: number;
    colorStops: ColorStopDto[];
}
export declare class ColorOrGradientDto {
    type: string;
    color?: string;
    gradient?: GradientDto;
}
export declare class EmailBodyDto {
    email: string;
    subject: string;
    body: string;
    hidden?: boolean;
}
export declare class SmsBodyDto {
    number: string;
    message: string;
}
export declare class TextBodyDto {
    text: string;
}
export declare class UrlStaticBodyDto {
    url: string;
}
export declare class VCardPhoneDto {
    phone: string;
}
export declare class VCardBodyDto {
    name: string;
    lastName: string;
    phone: VCardPhoneDto[];
    email: string;
    org: string;
    title: string;
    adr: string;
    city: string;
    zip: string;
    state: string;
    country: string;
    url: string;
}
export declare class WifiBodyDto {
    authType: string;
    ssid: string;
    password: string;
    hidden?: boolean;
}
export declare class WhatsappBodyDto {
    number: string;
    message: string;
}
export declare class ImageCornersDto {
    squareStyle?: string;
    dotStyle?: string;
    dotColor: ColorOrGradientDto;
    squareColor: ColorOrGradientDto;
}
export declare class ImageFrameDto {
    id: number;
    color: ColorOrGradientDto;
    text: string;
    fontSize: number;
    backgroundColor: ColorOrGradientDto;
    textColor: string;
}
export declare class ImageShapeDto {
    backgroundColor: ColorOrGradientDto;
    color: ColorOrGradientDto;
    style?: string;
}
export declare class ImageStyleDto {
    image?: string;
    style?: string;
    shape: ImageShapeDto;
    corners: ImageCornersDto;
    frame?: ImageFrameDto;
    errorCorrectionLevel?: ErrorCorrectionLevel;
}
export declare class GenerateQrDto {
    type: QrDataTypeEnum;
    data: EmailBodyDto | WifiBodyDto | VCardBodyDto | TextBodyDto | UrlStaticBodyDto | SmsBodyDto | WhatsappBodyDto;
    style: ImageStyleDto;
}
export {};
