import { Repository } from 'typeorm';
import { Module } from './entities/module.entity';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { IResponseMessage } from 'src/interfaces/response-message.interface';
export declare class ModulesService {
    private readonly moduleRepository;
    constructor(moduleRepository: Repository<Module>);
    create(createModuleDto: CreateModuleDto): Promise<Module>;
    findAll(): Promise<Module[]>;
    findOne(id: number): Promise<Module>;
    findByIds(moduleIds: number[]): Promise<Module[]>;
    update(id: number, updateModuleDto: UpdateModuleDto): Promise<Module>;
    remove(id: number): Promise<IResponseMessage>;
}
