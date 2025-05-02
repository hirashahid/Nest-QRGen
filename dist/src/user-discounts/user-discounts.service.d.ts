import { Repository } from 'typeorm';
import { CreateUserDiscountDto } from './dto/create-user-discount.dto';
import { UpdateUserDiscountDto } from './dto/update-user-discount.dto';
import { UserDiscount } from './entities/user-discount.entity';
export declare class UserDiscountsService {
    private userDiscountRepository;
    constructor(userDiscountRepository: Repository<UserDiscount>);
    create(createUserDiscountDto: CreateUserDiscountDto): Promise<UserDiscount>;
    findAll(): Promise<UserDiscount[]>;
    findOne(id: number): Promise<UserDiscount>;
    update(id: number, updateUserDiscountDto: UpdateUserDiscountDto): Promise<UserDiscount>;
    remove(id: number): Promise<void>;
    findByUserId(userId: number): Promise<UserDiscount[]>;
    findActiveDiscounts(userId: number): Promise<UserDiscount[]>;
}
