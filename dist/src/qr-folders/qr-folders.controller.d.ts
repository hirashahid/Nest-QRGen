import { QrFoldersService } from './qr-folders.service';
import { CreateQrFolderDto } from './dto/create-qr-folder.dto';
import { UpdateQrFolderDto } from './dto/update-qr-folder.dto';
import { GetByIdDto } from 'src/constants';
import { QrFolder } from './entities/qr-folder.entity';
export declare class QrFoldersController {
    private readonly qrFoldersService;
    constructor(qrFoldersService: QrFoldersService);
    create(createQrFolderDto: CreateQrFolderDto, userId: number): Promise<QrFolder>;
    getAllFolders(dto: GetByIdDto): Promise<QrFolder[]>;
    findOne(id: number): Promise<QrFolder>;
    update(id: number, updateQrFolderDto: UpdateQrFolderDto, userId: number): Promise<QrFolder>;
    remove(id: number, userId: number): Promise<import("../interfaces/response-message.interface").IResponseMessage>;
}
