import { Repository } from 'typeorm';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { Page } from './entities/page.entity';
import { IResponseMessage } from '../interfaces/response-message.interface';
export declare class PagesService {
    private readonly pageRepository;
    constructor(pageRepository: Repository<Page>);
    create(createPageDto: CreatePageDto): Promise<Page>;
    findAll(): Promise<Page[]>;
    findOne(id: number): Promise<Page>;
    update(id: number, updatePageDto: UpdatePageDto): Promise<Page>;
    remove(id: number): Promise<IResponseMessage>;
}
