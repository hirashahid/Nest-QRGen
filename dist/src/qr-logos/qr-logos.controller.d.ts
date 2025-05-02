import { QrLogosService } from './qr-logos.service';
import { CreateQrLogoDto } from './dto/create-qr-logo.dto';
import { UpdateQrLogoDto } from './dto/update-qr-logo.dto';
export declare class QrLogosController {
    private readonly qrLogosService;
    constructor(qrLogosService: QrLogosService);
    create(createQrLogoDto: CreateQrLogoDto): Promise<import("./entities/qr-logo.entity").QrLogo>;
    findAll(): Promise<import("./entities/qr-logo.entity").QrLogo[]>;
    findOne(id: number): Promise<import("./entities/qr-logo.entity").QrLogo>;
    update(id: number, updateQrLogoDto: UpdateQrLogoDto): Promise<import("./entities/qr-logo.entity").QrLogo>;
    remove(id: number): Promise<import("../interfaces/response-message.interface").IResponseMessage>;
}
