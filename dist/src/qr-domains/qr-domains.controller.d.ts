import { QrDomainsService } from './qr-domains.service';
import { CreateQrDomainDto } from './dto/create-qr-domain.dto';
import { UpdateQrDomainDto } from './dto/update-qr-domain.dto';
import { QrDomainByUserDto } from './dto/qr-domain-response.dto';
export declare class QrDomainsController {
    private readonly qrDomainsService;
    constructor(qrDomainsService: QrDomainsService);
    create(createQrDomainDto: CreateQrDomainDto, userId: number): Promise<import("./entities/qr-domain.entity").QrDomain>;
    findAll(qrDomainByUserDto: QrDomainByUserDto): Promise<import("./entities/qr-domain.entity").QrDomain[]>;
    findOne(id: string): Promise<import("./entities/qr-domain.entity").QrDomain>;
    update(id: string, updateQrDomainDto: UpdateQrDomainDto, userId: number): Promise<import("./entities/qr-domain.entity").QrDomain>;
    remove(id: string, userId: number): Promise<import("../interfaces/response-message.interface").IResponseMessage>;
    verify(id: string): Promise<import("./entities/qr-domain.entity").QrDomain>;
}
