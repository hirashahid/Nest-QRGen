export declare class CreateUserDiscountDto {
    userId: number;
    discountId: number;
    redeemedAt?: Date;
    expiresAt?: Date;
    discount: number;
    code: string;
    status?: number;
}
