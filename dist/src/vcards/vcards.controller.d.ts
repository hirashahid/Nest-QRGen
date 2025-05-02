import { VCardsService } from './vcards.service';
import { CreateVCardDto } from './dto/create-vcard.dto';
import { UpdateVCardDto } from './dto/update-vcard.dto';
export declare class VCardsController {
    private readonly vCardsService;
    constructor(vCardsService: VCardsService);
    create(createVCardDto: CreateVCardDto): Promise<import("./entities/vcard.entity").VCard>;
    findAll(user_id: number): Promise<import("./entities/vcard.entity").VCard[]>;
    findOne(id: number): Promise<import("./entities/vcard.entity").VCard>;
    update(id: number, updateVCardDto: UpdateVCardDto): Promise<import("./entities/vcard.entity").VCard>;
    remove(id: number): Promise<import("../interfaces/response-message.interface").IResponseMessage>;
}
