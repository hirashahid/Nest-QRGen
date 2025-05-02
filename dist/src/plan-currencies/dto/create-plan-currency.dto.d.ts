import { ECountryCodeIso2 } from 'src/enums/e-country-code-iso-2';
export declare class CreatePlanCurrencyDto {
    planId: number;
    currencyCode: string;
    price: number;
    countryCode: ECountryCodeIso2;
    perMonthPrice: number;
    stripePriceId?: string;
}
