import { UpdateTemplateDto } from './dto/update-template.dto';
import { IResponseMessage } from '../interfaces/response-message.interface';
import { CreateTemplateDto } from './dto/create-template.dto';
import { Template } from './entities/template.entity';
import { TemplatesService } from './templates.service';
import { TemplateResponseDto } from './dto/template-response.dto';
import { GetByIdDto } from '../constants';
export declare class TemplatesController {
    private readonly templatesService;
    constructor(templatesService: TemplatesService);
    create(createTemplateDto: CreateTemplateDto, userId: number): Promise<TemplateResponseDto>;
    getAllTemplates(dto: GetByIdDto): Promise<TemplateResponseDto[]>;
    getTemplateById(dto: GetByIdDto): Promise<TemplateResponseDto>;
    updateTemplate(dto: GetByIdDto, updateTemplateDto: UpdateTemplateDto, userId: number): Promise<Template>;
    deleteTemplate(dto: GetByIdDto, userId: number): Promise<IResponseMessage>;
}
