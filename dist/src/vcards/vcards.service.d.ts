import { Repository } from 'typeorm';
import { CreateVCardDto } from './dto/create-vcard.dto';
import { UpdateVCardDto } from './dto/update-vcard.dto';
import { VCard } from './entities/vcard.entity';
import { IResponseMessage } from '../interfaces/response-message.interface';
import { UsersService } from '../users/users.service';
export declare class VCardsService {
    private readonly vCardRepository;
    private readonly userService;
    constructor(vCardRepository: Repository<VCard>, userService: UsersService);
    create(dto: CreateVCardDto): Promise<VCard>;
    findAll(userId: number): Promise<VCard[]>;
    findOne(id: number): Promise<VCard>;
    update(id: number, dto: UpdateVCardDto): Promise<VCard>;
    remove(id: number): Promise<IResponseMessage>;
}
