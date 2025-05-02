import { SubscriptionService } from './subscription.service';
import { CheckOutDto, UpdatePaymentMethodDto } from './dto/subscription.dto';
import { CancelSubscriptionDto, NewSubscriptionDto, ResumeSubscriptionDto } from './dto/subscription.dto';
import { CalculateTaxUpdatedDto } from './dto/calculate-tax.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { PlansService } from '../plans/plans.service';
import { UserDiscountsService } from '../user-discounts/user-discounts.service';
import { DiscountCodesService } from '../discount-codes/discount-codes.service';
export declare class SubscriptionController {
    private readonly subscriptionService;
    private readonly planService;
    private readonly userDiscountsService;
    private readonly discountCodesService;
    constructor(subscriptionService: SubscriptionService, planService: PlansService, userDiscountsService: UserDiscountsService, discountCodesService: DiscountCodesService);
    createCustomer(createCustomerDto: CreateCustomerDto): Promise<import("stripe").Stripe.Customer>;
    checkout(checkOutDto: CheckOutDto): Promise<{
        plan: any;
        tax: number;
        intent: any;
        discount: {
            discountPercent: number;
            discountStripeId: string;
        };
    }>;
    calculateTax(calculateTaxDto: CalculateTaxUpdatedDto): Promise<{
        plan: any;
        tax: number;
        discount: {
            discountPercent: number;
            discountStripeId: string;
        };
    }>;
    createSubscription(newSubscriptionDto: NewSubscriptionDto): Promise<void | import("stripe").Stripe.Subscription>;
    cancelSubscription(cancelSubscriptionDto: CancelSubscriptionDto): Promise<{
        message: string;
    }>;
    resumeSubscription(resumeSubscriptionDto: ResumeSubscriptionDto): Promise<{
        message: string;
    }>;
    getCoupons(): Promise<{
        success: boolean;
        data: import("stripe").Stripe.Coupon[];
    }>;
    updatePaymentMethod(updatePaymentMethodDto: UpdatePaymentMethodDto): Promise<any>;
}
