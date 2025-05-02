import { Repository } from 'typeorm';
import { CreateQrLogoDto } from './dto/create-qr-logo.dto';
import { UpdateQrLogoDto } from './dto/update-qr-logo.dto';
import { QrLogo } from './entities/qr-logo.entity';
import { IResponseMessage } from '../interfaces/response-message.interface';
export declare class QrLogosService {
    private readonly qrLogoRepository;
    constructor(qrLogoRepository: Repository<QrLogo>);
    create(dto: CreateQrLogoDto): Promise<QrLogo>;
    findAll(): Promise<QrLogo[]>;
    findOne(id: number): Promise<QrLogo>;
    update(id: number, dto: UpdateQrLogoDto): Promise<QrLogo>;
    remove(id: number): Promise<IResponseMessage>;
}
