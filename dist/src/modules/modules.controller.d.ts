import { ModulesService } from './modules.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Module } from './entities/module.entity';
export declare class ModulesController {
    private readonly modulesService;
    constructor(modulesService: ModulesService);
    create(createModuleDto: CreateModuleDto): Promise<Module>;
    findAll(): Promise<Module[]>;
    findOne(id: number): Promise<Module>;
    update(id: number, updateModuleDto: UpdateModuleDto): Promise<Module>;
    remove(id: number): Promise<import("../interfaces/response-message.interface").IResponseMessage>;
}
