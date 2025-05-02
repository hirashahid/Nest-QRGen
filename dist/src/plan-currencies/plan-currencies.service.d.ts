import { Repository } from 'typeorm';
import { PlanCurrency } from './entities/plan-currency.entity';
import { CreatePlanCurrencyDto } from './dto/create-plan-currency.dto';
import { UpdatePlanCurrencyDto } from './dto/update-plan-currency.dto';
import { PlansService } from 'src/plans/plans.service';
import { ECountryCodeIso2 } from '../enums/e-country-code-iso-2';
export declare class PlanCurrenciesService {
    private readonly planCurrencyRepository;
    private readonly planService;
    constructor(planCurrencyRepository: Repository<PlanCurrency>, planService: PlansService);
    create(createPlanCurrencyDto: CreatePlanCurrencyDto): Promise<PlanCurrency>;
    findAll(): Promise<PlanCurrency[]>;
    findOne(id: number): Promise<PlanCurrency>;
    update(id: number, updatePlanCurrencyDto: UpdatePlanCurrencyDto): Promise<PlanCurrency>;
    remove(id: number): Promise<void>;
    findByCountryCode(countryCode: ECountryCodeIso2, planId: number): Promise<any>;
}
