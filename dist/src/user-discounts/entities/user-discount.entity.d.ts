import { DiscountCode } from '../../discount-codes/entities/discount-code.entity';
export declare class UserDiscount {
    id: number;
    userId: number;
    discountId: number;
    discountCode: DiscountCode;
    redeemedAt: Date;
    expiresAt: Date;
    discount: number;
    code: string;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}
