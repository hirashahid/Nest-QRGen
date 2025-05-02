import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Repository } from 'typeorm';
import { IResponseMessage } from '../interfaces/response-message.interface';
import { Plan } from './entities/plan.entity';
import { ECountryCodeIso2 } from 'src/enums/e-country-code-iso-2';
export declare class PlansService {
    private readonly planRepository;
    constructor(planRepository: Repository<Plan>);
    create(createPlanDto: CreatePlanDto): Promise<Plan>;
    findAll(countryCode: ECountryCodeIso2): Promise<Plan[]>;
    findOne(id: number): Promise<Plan>;
    findByIpAddress(ipAddress?: string): Promise<Plan[]>;
    findOneByStripeId(stripeId: string): Promise<Plan>;
    update(id: number, updatePlanDto: UpdatePlanDto): Promise<Plan>;
    remove(id: number): Promise<IResponseMessage>;
    private getCountryFromIP;
    getPlanCurrenciesData(countryCode: ECountryCodeIso2, planId: number): Promise<any>;
}
