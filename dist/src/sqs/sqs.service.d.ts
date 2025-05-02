import { UserSubscriptionsService } from '../user-subscriptions/user-subscriptions.service';
import { UsersService } from 'src/users/users.service';
interface SqsMessage {
    Body: string;
    MessageId: string;
}
export declare class SqsSubscriptionService {
    private readonly subscriptionService;
    private readonly usersService;
    private readonly logger;
    constructor(subscriptionService: UserSubscriptionsService, usersService: UsersService);
    handleMessage(message: SqsMessage): Promise<void>;
}
export {};
