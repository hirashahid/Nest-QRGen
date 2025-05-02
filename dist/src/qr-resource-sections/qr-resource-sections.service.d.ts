import { Repository } from 'typeorm';
import { CreateQrResourceSectionDto } from './dto/create-qr-resource-section.dto';
import { UpdateQrResourceSectionDto } from './dto/update-qr-resource-section.dto';
import { QrResourceSection } from './entities/qr-resource-section.entity';
export declare class QrResourceSectionsService {
    private qrResourceSectionRepository;
    constructor(qrResourceSectionRepository: Repository<QrResourceSection>);
    create(createQrResourceSectionDto: CreateQrResourceSectionDto): Promise<QrResourceSection>;
    findAll(): Promise<QrResourceSection[]>;
    findOne(id: number): Promise<QrResourceSection>;
    update(id: number, updateQrResourceSectionDto: UpdateQrResourceSectionDto): Promise<QrResourceSection>;
    remove(id: number): Promise<void>;
    findByQrResourceId(qr_resource_id: number): Promise<QrResourceSection[]>;
}
