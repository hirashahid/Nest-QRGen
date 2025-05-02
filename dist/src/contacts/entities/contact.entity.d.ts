import { User } from '../../users/entities/user.entity';
export declare class Contact {
    id: number;
    user?: User;
    userId: number;
    subject: string;
    reason: string;
    query: string;
    files: string;
    notify_colleagues: string;
    email_status: boolean;
    is_read: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
