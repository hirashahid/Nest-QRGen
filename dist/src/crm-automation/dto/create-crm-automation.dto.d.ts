export declare enum AutomationStatus {
    ACTIVE = 1,
    INACTIVE = 0
}
export declare class CreateCrmAutomationDto {
    name: string;
    description?: string;
    status?: AutomationStatus;
    user_status?: string;
    trigger: string;
    when: string;
    action?: string;
    days?: number;
    discount?: number;
    email_subject: string;
    email_content: string;
    discount_expiry_days?: number;
    discount_code_id?: number;
}
