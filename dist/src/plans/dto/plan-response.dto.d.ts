export declare class PlanResponseDto {
    id: number;
    name: string;
    description?: string;
    price: number;
    duration_days: number;
    status: boolean;
    is_default: boolean;
    features: string;
    price_per_month: number;
    stripe_price_id: string;
    max_qr_codes: number;
}
