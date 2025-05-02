import { QrStylesService } from './qr-styles.service';
import { CreateQrStyleDto } from './dto/create-qr-style.dto';
import { UpdateQrStyleDto } from './dto/update-qr-style.dto';
import { QrStyle } from './entities/qr-style.entity';
export declare class QrStylesController {
    private readonly qrStylesService;
    constructor(qrStylesService: QrStylesService);
    create(createQrStyleDto: CreateQrStyleDto): Promise<QrStyle>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<QrStyle>;
    update(id: number, updateQrStyleDto: UpdateQrStyleDto): Promise<QrStyle>;
    remove(id: number): Promise<import("../interfaces/response-message.interface").IResponseMessage>;
}
