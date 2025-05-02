import { Repository } from 'typeorm';
import { CreateQrResourceDto } from './dto/create-qr-resource.dto';
import { UpdateQrResourceDto } from './dto/update-qr-resource.dto';
import { QrResource } from './entities/qr-resource.entity';
import { IResponseMessage } from '../interfaces/response-message.interface';
export declare class QrResourcesService {
    private readonly qrResourceRepository;
    constructor(qrResourceRepository: Repository<QrResource>);
    create(dto: CreateQrResourceDto): Promise<QrResource>;
    findAll(): Promise<QrResource[]>;
    findOne(id: number): Promise<QrResource>;
    update(id: number, dto: UpdateQrResourceDto): Promise<QrResource>;
    remove(id: number): Promise<IResponseMessage>;
}
