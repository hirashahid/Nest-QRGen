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
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
const contact_entity_1 = require("./entities/contact.entity");
let ContactsService = class ContactsService {
    constructor(contactRepository, usersService) {
        this.contactRepository = contactRepository;
        this.usersService = usersService;
    }
    async create(createContactDto) {
        try {
            await this.usersService.findOne(createContactDto.userId);
            const contact = this.contactRepository.create(createContactDto);
            return await this.contactRepository.save(contact);
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            return await this.contactRepository.find();
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const contact = await this.contactRepository.findOne({ where: { id } });
            if (!contact) {
                throw new common_1.HttpException(`Contact with id: ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            return contact;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateContactDto) {
        try {
            await this.findOne(id);
            await this.contactRepository.update(id, updateContactDto);
            return this.findOne(id);
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            await this.findOne(id);
            await this.contactRepository.delete(id);
            return { message: 'Contact deleted successfully' };
        }
        catch (error) {
            throw error;
        }
    }
};
exports.ContactsService = ContactsService;
exports.ContactsService = ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contact_entity_1.Contact)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], ContactsService);
//# sourceMappingURL=contacts.service.js.map