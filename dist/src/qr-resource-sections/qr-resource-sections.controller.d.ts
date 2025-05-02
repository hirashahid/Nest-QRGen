import { QrResourceSectionsService } from './qr-resource-sections.service';
import { CreateQrResourceSectionDto } from './dto/create-qr-resource-section.dto';
import { UpdateQrResourceSectionDto } from './dto/update-qr-resource-section.dto';
import { QrResourceSection } from './entities/qr-resource-section.entity';
export declare class QrResourceSectionsController {
    private readonly qrResourceSectionsService;
    constructor(qrResourceSectionsService: QrResourceSectionsService);
    create(createQrResourceSectionDto: CreateQrResourceSectionDto): Promise<QrResourceSection>;
    findAll(): Promise<QrResourceSection[]>;
    findByQrResourceId(qr_resource_id: number): Promise<QrResourceSection[]>;
    findOne(id: string): Promise<QrResourceSection>;
    update(id: string, updateQrResourceSectionDto: UpdateQrResourceSectionDto): Promise<QrResourceSection>;
    remove(id: string): Promise<void>;
}
