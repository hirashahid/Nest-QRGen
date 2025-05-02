import { QrTypeService } from './qr-types.service';
import { CreateQrTypeDto } from './dto/create-qr-type.dto';
import { QrType } from './entities/qr-type.entity';
import { UpdateQrTypeDto } from './dto/update-qr-type.dto';
export declare class QrTypeController {
    private readonly qrTypeService;
    constructor(qrTypeService: QrTypeService);
    create(createQrTypeDto: CreateQrTypeDto): Promise<QrType>;
    findAll(): Promise<QrType[]>;
    findOne(id: number): Promise<QrType>;
    update(id: number, updateQrTypeDto: UpdateQrTypeDto): Promise<QrType>;
    remove(id: number): Promise<void>;
}
