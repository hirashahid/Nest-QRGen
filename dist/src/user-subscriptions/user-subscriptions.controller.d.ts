import { UserSubscriptionsService } from './user-subscriptions.service';
import { CreateUserSubscriptionDto } from './dto/create-user-subscription.dto';
import { UpdateUserSubscriptionDto } from './dto/update-user-subscription.dto';
import { UserSubscription } from './entities/user-subscription.entity';
export declare class UserSubscriptionsController {
    private readonly userSubscriptionsService;
    constructor(userSubscriptionsService: UserSubscriptionsService);
    create(createUserSubscriptionDto: CreateUserSubscriptionDto): Promise<UserSubscription>;
    findAll(): Promise<UserSubscription[]>;
    findOne(stripe_id: string): Promise<UserSubscription>;
    findByUserId(user_id: number): Promise<UserSubscription[]>;
    update(stripe_id: string, updateUserSubscriptionDto: UpdateUserSubscriptionDto): Promise<UserSubscription>;
    remove(stripe_id: string): Promise<void>;
    cancelSubscription(stripe_id: string): Promise<UserSubscription>;
    findActiveCancellableSubscriptions(user_id: number): Promise<UserSubscription[]>;
}
