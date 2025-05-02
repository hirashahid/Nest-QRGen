import { DiscountCodesService } from './discount-codes.service';
import { CreateDiscountCodeDto } from './dto/create-discount-code.dto';
import { UpdateDiscountCodeDto } from './dto/update-discount-code.dto';
import { DiscountCode } from './entities/discount-code.entity';
export declare class DiscountCodesController {
    private readonly discountCodesService;
    constructor(discountCodesService: DiscountCodesService);
    create(createDiscountCodeDto: CreateDiscountCodeDto): Promise<DiscountCode>;
    findAll(): Promise<DiscountCode[]>;
    findOne(id: string): Promise<DiscountCode>;
    findByCode(code: string): Promise<DiscountCode>;
    update(id: string, updateDiscountCodeDto: UpdateDiscountCodeDto): Promise<DiscountCode>;
    remove(id: string): Promise<void>;
    validateDiscountCode(code: string): Promise<DiscountCode>;
}
