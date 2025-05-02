import { CrmAutomationService } from './crm-automation.service';
import { CreateCrmAutomationDto } from './dto/create-crm-automation.dto';
import { UpdateCrmAutomationDto } from './dto/update-crm-automation.dto';
export declare class CrmAutomationController {
    private readonly crmAutomationService;
    constructor(crmAutomationService: CrmAutomationService);
    create(createCrmAutomationDto: CreateCrmAutomationDto): Promise<import("./entities/crm-automation.entity").CrmAutomation>;
    findAll(): Promise<import("./entities/crm-automation.entity").CrmAutomation[]>;
    findActive(): Promise<import("./entities/crm-automation.entity").CrmAutomation[]>;
    findTrigger(trigger: string, when: string, userStatus?: string): Promise<import("./entities/crm-automation.entity").CrmAutomation[]>;
    findOne(id: string): Promise<import("./entities/crm-automation.entity").CrmAutomation>;
    update(id: string, updateCrmAutomationDto: UpdateCrmAutomationDto): Promise<import("./entities/crm-automation.entity").CrmAutomation>;
    remove(id: string): Promise<void>;
}
