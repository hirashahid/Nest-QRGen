import { Repository } from 'typeorm';
import { CreateCrmAutomationDto } from './dto/create-crm-automation.dto';
import { UpdateCrmAutomationDto } from './dto/update-crm-automation.dto';
import { CrmAutomation } from './entities/crm-automation.entity';
export declare class CrmAutomationService {
    private readonly crmAutomationRepository;
    constructor(crmAutomationRepository: Repository<CrmAutomation>);
    create(createCrmAutomationDto: CreateCrmAutomationDto): Promise<CrmAutomation>;
    findAll(): Promise<CrmAutomation[]>;
    findActive(): Promise<CrmAutomation[]>;
    findTrigger(trigger: string, when: string, userStatus: string): Promise<CrmAutomation[]>;
    findOne(id: number): Promise<CrmAutomation>;
    update(id: number, updateCrmAutomationDto: UpdateCrmAutomationDto): Promise<CrmAutomation>;
    remove(id: number): Promise<void>;
}
