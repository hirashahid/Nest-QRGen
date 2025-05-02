import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Repository } from 'typeorm';
import { IResponseMessage } from '../interfaces/response-message.interface';
import { UsersService } from '../users/users.service';
import { Contact } from './entities/contact.entity';
export declare class ContactsService {
    private readonly contactRepository;
    private readonly usersService;
    constructor(contactRepository: Repository<Contact>, usersService: UsersService);
    create(createContactDto: CreateContactDto): Promise<Contact>;
    findAll(): Promise<Contact[]>;
    findOne(id: number): Promise<Contact>;
    update(id: number, updateContactDto: UpdateContactDto): Promise<Contact>;
    remove(id: number): Promise<IResponseMessage>;
}
