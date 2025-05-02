import { PlanCurrency } from 'src/plan-currencies/entities/plan-currency.entity';
export declare class Plan {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    durationInDays: number;
    status: boolean;
    isDefault: boolean;
    features?: object;
    pricePerMonth: number;
    stripePriceId: string;
    maxQrCodes: number;
    planCurrencies?: PlanCurrency[];
    createdAt?: Date;
    updatedAt?: Date;
}
