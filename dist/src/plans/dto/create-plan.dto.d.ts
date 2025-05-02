export declare class CreatePlanDto {
    name: string;
    description?: string;
    price: number;
    currency: string;
    durationInDays: number;
    status: boolean;
    isDefault: boolean;
    features: object;
    pricePerMonth: number;
    stripePriceId: string;
    maxQrCodes: number;
}
