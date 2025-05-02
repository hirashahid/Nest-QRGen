import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { IResponseMessage } from '../interfaces/response-message.interface';
import { UsersService } from '../users/users.service';
export declare class EventsService {
    private readonly eventRepository;
    private readonly usersService;
    constructor(eventRepository: Repository<Event>, usersService: UsersService);
    create(createEventDto: CreateEventDto): Promise<Event>;
    findAll(userId: number): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    update(id: number, updateEventDto: UpdateEventDto): Promise<Event>;
    remove(id: number): Promise<IResponseMessage>;
}
