import { type Repository } from 'typeorm';
import { Template } from './entities/template.entity';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { IResponseMessage } from '../interfaces/response-message.interface';
import { UsersService } from '../users/users.service';
import { PermissionType } from 'src/enums/permission-type.enum';
export declare class TemplatesService {
    private templateRepository;
    private readonly usersService;
    constructor(templateRepository: Repository<Template>, usersService: UsersService);
    create(createTemplateDto: CreateTemplateDto, userId: number): Promise<Template>;
    findAllByUserId(userId: number): Promise<Template[]>;
    findAll(): Promise<Template[]>;
    findOne(id: number): Promise<Template>;
    update(id: number, updateTemplateDto: UpdateTemplateDto, userId: number): Promise<Template>;
    remove(id: number, userId: number): Promise<IResponseMessage>;
    checkPermissions(userId: number, permissionType: PermissionType): Promise<void>;
}
