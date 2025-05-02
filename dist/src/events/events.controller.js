"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_event_dto_1 = require("./dto/create-event.dto");
const update_event_dto_1 = require("./dto/update-event.dto");
const events_service_1 = require("./events.service");
const event_response_dto_1 = require("./dto/event-response.dto");
const constants_1 = require("../constants");
const authentication_guard_1 = require("../guards/authentication.guard");
let EventsController = class EventsController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    create(createEventDto) {
        return this.eventService.create(createEventDto);
    }
    findAll(dto) {
        return this.eventService.findAll(dto.id);
    }
    findOne(dto) {
        return this.eventService.findOne(dto.id);
    }
    update(dto, updateEventDto) {
        return this.eventService.update(dto.id, updateEventDto);
    }
    remove(dto) {
        return this.eventService.remove(dto.id);
    }
};
exports.EventsController = EventsController;
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new event' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Event successfully created',
        type: event_response_dto_1.EventResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_dto_1.CreateEventDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('by-user-id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all events' }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of all events',
        type: [event_response_dto_1.EventResponseDto],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('get-by-id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get an event by ID' }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, description: 'Event ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Event details',
        type: event_response_dto_1.EventResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Event not found' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an event' }),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, description: 'Event ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Event successfully updated' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Event not found' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto, update_event_dto_1.UpdateEventDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, swagger_1.ApiQuery)({ name: 'id', type: Number, description: 'Event ID' }),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an event' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Event successfully deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Event not found' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [constants_1.GetByIdDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "remove", null);
exports.EventsController = EventsController = __decorate([
    (0, swagger_1.ApiTags)('Events'),
    (0, common_1.Controller)('events'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], EventsController);
//# sourceMappingURL=events.controller.js.map