import { Repository } from 'typeorm';
import { QrType } from './entities/qr-type.entity';
import { CreateQrTypeDto } from './dto/create-qr-type.dto';
import { UpdateQrTypeDto } from './dto/update-qr-type.dto';
export declare class QrTypeService {
    private readonly qrTypeRepository;
    constructor(qrTypeRepository: Repository<QrType>);
    create(createQrTypeDto: CreateQrTypeDto): Promise<QrType>;
    findAll(): Promise<QrType[]>;
    findOne(id: number): Promise<QrType>;
    findOneByName(name: string): Promise<QrType>;
    update(id: number, updateQrTypeDto: UpdateQrTypeDto): Promise<QrType>;
    remove(id: number): Promise<void>;
}
