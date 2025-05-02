import { User } from '../../users/entities/user.entity';
export declare class Event {
    id: number;
    name: string;
    description: string;
    url: string;
    user?: User;
    userId: number;
    time: Date;
    createdAt?: Date;
}
