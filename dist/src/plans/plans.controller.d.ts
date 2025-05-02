import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Plan } from './entities/plan.entity';
import { GetByCountryCodeDto } from './dto/get-by-country-code.dto';
export declare class PlansController {
    private readonly plansService;
    constructor(plansService: PlansService);
    create(createPlanDto: CreatePlanDto): Promise<Plan>;
    getPlansByCountryCode(dto: GetByCountryCodeDto): Promise<Plan[]>;
    findOne(id: string): Promise<Plan>;
    update(id: string, updatePlanDto: UpdatePlanDto): Promise<Plan>;
    getPlansByIpAddress(ipAddress: string): Promise<Plan[]>;
    remove(id: string): Promise<import("../interfaces/response-message.interface").IResponseMessage>;
}
