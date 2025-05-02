import { Repository } from 'typeorm';
import { CreateDiscountCodeDto } from './dto/create-discount-code.dto';
import { UpdateDiscountCodeDto } from './dto/update-discount-code.dto';
import { DiscountCode } from './entities/discount-code.entity';
export declare class DiscountCodesService {
    private discountCodeRepository;
    constructor(discountCodeRepository: Repository<DiscountCode>);
    create(createDiscountCodeDto: CreateDiscountCodeDto): Promise<DiscountCode>;
    findAll(): Promise<DiscountCode[]>;
    findOne(id: number): Promise<DiscountCode>;
    findByCode(code: string): Promise<DiscountCode>;
    update(id: number, updateDiscountCodeDto: UpdateDiscountCodeDto): Promise<DiscountCode>;
    remove(id: number): Promise<void>;
    validateDiscountCode(code: string): Promise<DiscountCode>;
    incrementUsage(code: string): Promise<DiscountCode>;
}
