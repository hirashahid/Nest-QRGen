import { Repository } from 'typeorm';
import { CreateQrFolderDto } from './dto/create-qr-folder.dto';
import { UpdateQrFolderDto } from './dto/update-qr-folder.dto';
import { QrFolder } from './entities/qr-folder.entity';
import { IResponseMessage } from '../interfaces/response-message.interface';
import { UsersService } from '../users/users.service';
export declare class QrFoldersService {
    private readonly qrFolderRepository;
    private readonly usersService;
    constructor(qrFolderRepository: Repository<QrFolder>, usersService: UsersService);
    create(dto: CreateQrFolderDto, userId: number): Promise<QrFolder>;
    findAll(user_id: number): Promise<QrFolder[]>;
    findByIds(folderIds: number[]): Promise<QrFolder[]>;
    findOne(id: number): Promise<QrFolder>;
    findOneByUserId(id: number, userid: number): Promise<QrFolder>;
    update(id: number, dto: UpdateQrFolderDto, userId: number): Promise<QrFolder>;
    remove(id: number, userId: number): Promise<IResponseMessage>;
    getByName(name: string, user_id: number): Promise<QrFolder>;
    getFoldersByUserId(user_id: number): Promise<QrFolder[]>;
    bulkUpdateQrCodes(qrCodeIds: number[]): Promise<void>;
    private checkPermissions;
}
