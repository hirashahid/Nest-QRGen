import { Repository } from 'typeorm';
import { CreateUserSubscriptionDto } from './dto/create-user-subscription.dto';
import { UpdateUserSubscriptionDto } from './dto/update-user-subscription.dto';
import { UserSubscription } from './entities/user-subscription.entity';
import { CrmAutomationService } from '../crm-automation/crm-automation.service';
import { UsersService } from '../users/users.service';
export declare class UserSubscriptionsService {
    private readonly userSubscriptionRepository;
    private readonly crmAutomationService;
    private readonly userService;
    constructor(userSubscriptionRepository: Repository<UserSubscription>, crmAutomationService: CrmAutomationService, userService: UsersService);
    create(createUserSubscriptionDto: CreateUserSubscriptionDto): Promise<UserSubscription>;
    findAll(): Promise<UserSubscription[]>;
    findOne(stripe_id: string): Promise<UserSubscription>;
    findOneById(id: number): Promise<UserSubscription>;
    update(stripe_id: string, updateUserSubscriptionDto: UpdateUserSubscriptionDto): Promise<UserSubscription>;
    remove(stripe_id: string): Promise<void>;
    findByUserId(user_id: number): Promise<UserSubscription[]>;
    cancelSubscription(stripe_id: string): Promise<UserSubscription>;
    findActiveSubscription(user_id: number): Promise<UserSubscription>;
    findActiveCancellableSubscriptions(user_id: number): Promise<UserSubscription[]>;
}
