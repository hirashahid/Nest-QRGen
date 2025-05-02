import { Plan } from '../../plans/entities/plan.entity';
export declare class UserSubscription {
    id: number;
    user_id: number;
    type: string;
    stripe_id?: string;
    stripe_status?: string;
    stripe_price?: string;
    invoice_url?: string;
    amount?: number;
    currency?: string;
    trial_ends_at?: Date;
    ends_at?: Date;
    start_at?: Date;
    cancelled_at?: Date;
    plan?: Plan;
    plan_id?: number;
}
