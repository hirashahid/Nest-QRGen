import { CreateQrDomainDto } from './create-qr-domain.dto';
declare const QrDomainResponseDto_base: import("@nestjs/common").Type<Partial<CreateQrDomainDto>>;
export declare class QrDomainResponseDto extends QrDomainResponseDto_base {
    id: number;
    cname: string;
    txt_record: string;
}
export declare class QrDomainByUserDto {
    userId: number;
}
export {};
