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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsByUserDto = exports.CreateEventDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../../constants");
class CreateEventDto {
}
exports.CreateEventDto = CreateEventDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Event Name',
        example: 'User Signup',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^(?!\s*$)[A-Za-z0-9\s]+$/, {
        message: 'Name cannot be empty, only spaces, or contain special characters',
    }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of the event',
        example: 'This event is triggered when a user signs up',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9\s.,!?-]*$/, {
        message: 'Description should not contain special characters or HTML tags',
    }),
    __metadata("design:type", String)
], CreateEventDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL associated with the event',
        example: 'https://example.com/user/signup',
    }),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEventDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User ID associated with the event',
        example: 1,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(constants_1.SAFE_INTEGER_MAX),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Timestamp of when the event occurred',
        example: '2024-01-21T10:30:00Z',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateEventDto.prototype, "time", void 0);
class EventsByUserDto {
}
exports.EventsByUserDto = EventsByUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'User ID associated with the event' }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1, { message: 'id must be a positive number' }),
    __metadata("design:type", Number)
], EventsByUserDto.prototype, "userId", void 0);
//# sourceMappingURL=create-event.dto.js.map