import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { Banner } from './entities/banner.entity';
import { BannerService } from './banners.service';
import { IResponseMessage } from '../interfaces/response-message.interface';
export declare class BannerController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    create(createBannerDto: CreateBannerDto): Promise<Banner>;
    findAll(): Promise<Banner[]>;
    findOne(id: number): Promise<Banner>;
    update(id: number, updateBannerDto: UpdateBannerDto): Promise<Banner>;
    remove(id: number): Promise<IResponseMessage>;
}
