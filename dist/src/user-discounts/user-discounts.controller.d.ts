import { UserDiscountsService } from './user-discounts.service';
import { DiscountCodesService } from '../discount-codes/discount-codes.service';
import { CreateUserDiscountDto } from './dto/create-user-discount.dto';
import { UpdateUserDiscountDto } from './dto/update-user-discount.dto';
import { UsersService } from '../users/users.service';
export declare class UserDiscountsController {
    private readonly userDiscountsService;
    private readonly discountCodesService;
    private readonly usersService;
    constructor(userDiscountsService: UserDiscountsService, discountCodesService: DiscountCodesService, usersService: UsersService);
    create(createUserDiscountDto: CreateUserDiscountDto): Promise<import("./entities/user-discount.entity").UserDiscount>;
    findAll(): Promise<import("./entities/user-discount.entity").UserDiscount[]>;
    findOne(id: string): Promise<import("./entities/user-discount.entity").UserDiscount>;
    findByUserId(userId: string): Promise<import("./entities/user-discount.entity").UserDiscount[]>;
    findByStripeId(stripeId: string): Promise<import("./entities/user-discount.entity").UserDiscount[]>;
    findActiveDiscounts(userId: string): Promise<import("./entities/user-discount.entity").UserDiscount[]>;
    update(id: string, updateUserDiscountDto: UpdateUserDiscountDto): Promise<import("./entities/user-discount.entity").UserDiscount>;
    remove(id: string): Promise<void>;
}
