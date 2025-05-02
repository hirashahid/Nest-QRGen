export declare class CrmAutomation {
    id: number;
    name: string;
    description: string | null;
    status: number;
    user_status: string | null;
    trigger: string;
    when: string;
    action: string | null;
    days: number | null;
    email_subject: string;
    email_content: string;
    created_at: Date;
    updated_at: Date;
    discount_expiry_days: number;
    discount_code_id: number | null;
}
