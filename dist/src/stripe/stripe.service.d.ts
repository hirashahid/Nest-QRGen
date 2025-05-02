import { AddressDto } from 'src/subscription/dto/address.dto';
import Stripe from 'stripe';
export declare class StripeService {
    constructor();
    private stripe;
    private webhookSecret;
    constructEvent(payload: Buffer, signature: string): Stripe.Event;
    createCustomer(name: string, email: string, address: AddressDto): Promise<Stripe.Customer>;
    calculateTax(currency: string, amount: number, countryCode?: string, address?: AddressDto): Promise<Stripe.Response<Stripe.Tax.Calculation>>;
    generatePaymentIntent(customerId: string): Promise<Stripe.SetupIntent>;
    getPaymentMethodDetails(paymentMethodId: string): Promise<any>;
    createSubscription(customerId: string, priceId: string, paymentMethodId?: string, discountId?: string, subscriptionId?: string): Promise<Stripe.Subscription>;
    updatePaymentMethod(customerId: string, paymentMethodId?: string): Promise<any>;
    cancelSubscription(subscriptionId: string): Promise<Stripe.Subscription>;
    resumeSubscription(subscriptionId: string): Promise<Stripe.Subscription>;
    getSubscriptionById(id: string): Promise<Stripe.Response<Stripe.Subscription>>;
    listSubscriptions(customerId: string): Promise<Stripe.ApiList<Stripe.Subscription>>;
    listPaymentMethods(customerId: string): Promise<Stripe.ApiList<Stripe.PaymentMethod>>;
    listPlans(): Promise<Stripe.ApiList<Stripe.Price>>;
    getAllCoupons(): Promise<Stripe.Response<Stripe.ApiList<Stripe.Coupon>>>;
    retrieveLatestInvoice(invoiceId: string): Promise<Stripe.Invoice>;
}
