import { RawBodyRequest } from '@nestjs/common';
import { Request, Response } from 'express';
import { StripeService } from './stripe.service';
import { UserSubscriptionsService } from 'src/user-subscriptions/user-subscriptions.service';
import { UsersService } from 'src/users/users.service';
export declare class StripeController {
    private readonly stripeService;
    private readonly subscriptionService;
    private readonly usersService;
    constructor(stripeService: StripeService, subscriptionService: UserSubscriptionsService, usersService: UsersService);
    handleWebhook(req: RawBodyRequest<Request>, res: Response): Promise<void>;
}
