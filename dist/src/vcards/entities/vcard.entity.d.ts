import { User } from '../../users/entities/user.entity';
export declare class VCard {
    id: number;
    user: User;
    user_id: number;
    name: string;
    title?: string;
    phone?: string;
    email?: string;
    address?: string;
    organization?: string;
    website?: string;
    created_at: Date;
    updated_at: Date;
}
