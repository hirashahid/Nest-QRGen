import { User } from '@sentry/nestjs';
import { ModuleEnum } from 'src/enums/module.enum';
import { CreateQrCodeDto } from 'src/qr-codes/dto/create-qr-code.dto';
import { QrCode } from 'src/qr-codes/entities/qr-code.entity';
import { StripeService } from 'src/stripe/stripe.service';
import { Stripe } from 'stripe';
export declare function parseStringToArray(str: string): {
    [k: string]: string;
};
export declare function stripSlashes(str: string): string;
export declare function filterSubscriptionData(stripeSubscription: Stripe.Subscription, stripeService: StripeService): Promise<any>;
export declare const getDates: (startDate: Date, endDate: Date, rate: string) => string[];
export declare const mapItemsToDates: (dates: string[], parsedResult: any[]) => {
    period: string;
    totalScans: number;
    totalUniqueScans: number;
    totalVisits: number;
}[];
export declare function hasPermission(user: User, moduleName: ModuleEnum, permissionType: keyof User['userPermissions']): boolean;
export declare function getQrCodeData(qrCode: QrCode): CreateQrCodeDto;
