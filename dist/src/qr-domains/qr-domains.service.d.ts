import { CreateQrDomainDto } from './dto/create-qr-domain.dto';
import { UpdateQrDomainDto } from './dto/update-qr-domain.dto';
import { Repository } from 'typeorm';
import { IResponseMessage } from '../interfaces/response-message.interface';
import { QrDomain } from './entities/qr-domain.entity';
import { UsersService } from '../users/users.service';
import { SettingsService } from '../settings/settings.service';
import { PermissionType } from 'src/enums/permission-type.enum';
import { CustomHostnameService } from '../custom-hostname.service';
export declare class QrDomainsService {
    private readonly qrDomainRepository;
    private readonly usersService;
    private readonly settingService;
    private readonly customHostnameService;
    private resolveCname;
    private resolveTxt;
    constructor(qrDomainRepository: Repository<QrDomain>, usersService: UsersService, settingService: SettingsService, customHostnameService: CustomHostnameService);
    create(createQrDomainDto: CreateQrDomainDto, userId: number, isDefault?: boolean): Promise<QrDomain>;
    findAll(userId: number): Promise<QrDomain[]>;
    findOne(id: number): Promise<QrDomain>;
    findData(id: number): Promise<QrDomain>;
    update(id: number, updateQrDomainDto: UpdateQrDomainDto, userId: number): Promise<QrDomain>;
    remove(id: number, userId: number): Promise<IResponseMessage>;
    verify(id: number): Promise<QrDomain>;
    bulkUpdateQrCodes(qrCodeIds: number[]): Promise<void>;
    checkPermissions(userId: number, permissionType: PermissionType): Promise<void>;
}
