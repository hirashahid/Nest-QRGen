import { Repository } from 'typeorm';
import { CreateQrStyleDto } from './dto/create-qr-style.dto';
import { UpdateQrStyleDto } from './dto/update-qr-style.dto';
import { QrStyle } from './entities/qr-style.entity';
import { IResponseMessage } from '../interfaces/response-message.interface';
export declare class QrStylesService {
    private readonly qrStyleRepository;
    constructor(qrStyleRepository: Repository<QrStyle>);
    create(dto: CreateQrStyleDto): Promise<QrStyle>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<QrStyle>;
    update(id: number, dto: UpdateQrStyleDto): Promise<QrStyle>;
    remove(id: number): Promise<IResponseMessage>;
    private mapQrStyle;
}
