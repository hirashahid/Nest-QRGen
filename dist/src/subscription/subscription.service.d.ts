import { CancelSubscriptionDto, NewSubscriptionDto, ResumeSubscriptionDto } from './dto/subscription.dto';
import { CreatePaymentIntentDto } from './dto/create-payment-intent.dto';
import { StripeService } from 'src/stripe/stripe.service';
import Stripe from 'stripe';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UsersService } from 'src/users/users.service';
import { UserSubscriptionsService } from 'src/user-subscriptions/user-subscriptions.service';
import { AddressDto } from './dto/address.dto';
import { CrmAutomationService } from '../crm-automation/crm-automation.service';
import { EmailService } from '../email/email.service';
import { DiscountCodesService } from "../discount-codes/discount-codes.service";
import { UserDiscountsService } from "../user-discounts/user-discounts.service";
export declare class SubscriptionService {
    private readonly stripeService;
    private readonly usersService;
    private readonly userSubscriptionsService;
    private readonly crmAutomationService;
    private readonly emailService;
    private readonly discountCodesService;
    private readonly userDiscountService;
    constructor(stripeService: StripeService, usersService: UsersService, userSubscriptionsService: UserSubscriptionsService, crmAutomationService: CrmAutomationService, emailService: EmailService, discountCodesService: DiscountCodesService, userDiscountService: UserDiscountsService);
    createCustomer(createCustomerDto: CreateCustomerDto): Promise<Stripe.Customer>;
    generatePaymentIntent(createPaymentIntentDto: CreatePaymentIntentDto, countryCode: string): Promise<any>;
    createSubscription(createSubscriptionDto: NewSubscriptionDto): Promise<void | Stripe.Subscription>;
    calculateTax(currency: string, price: number, countryCode?: string, address?: AddressDto): Promise<number>;
    cancelSubscription(cancelSubscriptionDto: CancelSubscriptionDto): Promise<{
        message: string;
    }>;
    resumeSubscription(resumeSubscriptionDto: ResumeSubscriptionDto): Promise<{
        message: string;
    }>;
    getAllCoupons(): Promise<{
        success: boolean;
        data: Stripe.Coupon[];
    }>;
    retrieveLatestInvoice(invoiceId: string): Promise<Stripe.Invoice>;
    updatePaymentMethod(userId: number, paymentMethodId: string): Promise<any>;
}
