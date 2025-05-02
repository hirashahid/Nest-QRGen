import { Repository } from 'typeorm';
import { Banner } from './entities/banner.entity';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { IResponseMessage } from '../interfaces/response-message.interface';
export declare class BannerService {
    private readonly bannerRepository;
    constructor(bannerRepository: Repository<Banner>);
    create(createBannerDto: CreateBannerDto): Promise<Banner>;
    findAll(): Promise<Banner[]>;
    findOne(id: number): Promise<Banner>;
    update(id: number, updateBannerDto: UpdateBannerDto): Promise<Banner>;
    remove(id: number): Promise<IResponseMessage>;
}
