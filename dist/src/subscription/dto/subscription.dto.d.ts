import { ECountryCodeIso2 } from '../../enums/e-country-code-iso-2';
export declare class NewSubscriptionDto {
    priceId: string;
    planId: number;
    userId: number;
    paymentMethod?: string;
    discountId?: string;
    companyName?: string;
    taxId?: string;
    name: string;
    surname: string;
    address: string;
    postalCode: string;
    city: string;
    country: string;
    email: string;
}
export declare class CancelSubscriptionDto {
    subscriptionId: string;
}
export declare class ResumeSubscriptionDto {
    subscriptionId: string;
}
export declare class CheckOutDto {
    user_id: number;
    plan_id: number;
    country_code: ECountryCodeIso2;
    currency: string;
}
export declare class UpdatePaymentMethodDto {
    user_id: number;
    paymentMethod?: string;
}
