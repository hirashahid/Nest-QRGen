import { PlanCurrenciesService } from './plan-currencies.service';
import { CreatePlanCurrencyDto } from './dto/create-plan-currency.dto';
import { UpdatePlanCurrencyDto } from './dto/update-plan-currency.dto';
import { PlanCurrency } from './entities/plan-currency.entity';
export declare class PlanCurrenciesController {
    private readonly planCurrenciesService;
    constructor(planCurrenciesService: PlanCurrenciesService);
    create(createPlanCurrencyDto: CreatePlanCurrencyDto): Promise<PlanCurrency>;
    findAll(): Promise<PlanCurrency[]>;
    findOne(id: string): Promise<PlanCurrency>;
    update(id: string, updatePlanCurrencyDto: UpdatePlanCurrencyDto): Promise<PlanCurrency>;
    remove(id: string): Promise<void>;
}
