export declare class CreateUserSubscriptionDto {
    user_id: number;
    type: string;
    stripe_id?: string;
    stripe_status?: string;
    stripe_price?: string;
    trial_ends_at?: Date;
    ends_at?: Date;
    start_at?: Date;
    cancelled_at?: Date;
    plan_id?: number;
}
