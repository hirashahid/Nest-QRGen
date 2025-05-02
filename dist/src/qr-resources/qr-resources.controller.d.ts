import { QrResourcesService } from './qr-resources.service';
import { CreateQrResourceDto } from './dto/create-qr-resource.dto';
import { UpdateQrResourceDto } from './dto/update-qr-resource.dto';
export declare class QrResourcesController {
    private readonly qrResourcesService;
    constructor(qrResourcesService: QrResourcesService);
    create(createQrResourceDto: CreateQrResourceDto): Promise<import("./entities/qr-resource.entity").QrResource>;
    findAll(): Promise<import("./entities/qr-resource.entity").QrResource[]>;
    findOne(id: number): Promise<import("./entities/qr-resource.entity").QrResource>;
    update(id: number, updateQrResourceDto: UpdateQrResourceDto): Promise<import("./entities/qr-resource.entity").QrResource>;
    remove(id: number): Promise<import("../interfaces/response-message.interface").IResponseMessage>;
}
