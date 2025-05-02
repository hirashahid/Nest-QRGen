import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsService } from './events.service';
import { GetByIdDto } from '../constants';
export declare class EventsController {
    private readonly eventService;
    constructor(eventService: EventsService);
    create(createEventDto: CreateEventDto): Promise<import("./entities/event.entity").Event>;
    findAll(dto: GetByIdDto): Promise<import("./entities/event.entity").Event[]>;
    findOne(dto: GetByIdDto): Promise<import("./entities/event.entity").Event>;
    update(dto: GetByIdDto, updateEventDto: UpdateEventDto): Promise<import("./entities/event.entity").Event>;
    remove(dto: GetByIdDto): Promise<import("../interfaces/response-message.interface").IResponseMessage>;
}
