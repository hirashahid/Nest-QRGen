import { ECountryCodeIso2 } from 'src/enums/e-country-code-iso-2';
import { Plan } from 'src/plans/entities/plan.entity';
export declare class PlanCurrency {
    id: number;
    planId: number;
    plan?: Plan;
    currencyCode: string;
    price: number;
    countryCode: ECountryCodeIso2;
    perMonthPrice: number;
    stripePriceId?: string;
    createdAt: Date;
    updatedAt: Date;
}
