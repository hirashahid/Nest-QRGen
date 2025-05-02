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
exports.VCardsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const vcards_service_1 = require("./vcards.service");
const create_vcard_dto_1 = require("./dto/create-vcard.dto");
const update_vcard_dto_1 = require("./dto/update-vcard.dto");
const vcard_dto_1 = require("./dto/vcard.dto");
const authentication_guard_1 = require("../guards/authentication.guard");
let VCardsController = class VCardsController {
    constructor(vCardsService) {
        this.vCardsService = vCardsService;
    }
    create(createVCardDto) {
        return this.vCardsService.create(createVCardDto);
    }
    findAll(user_id) {
        return this.vCardsService.findAll(user_id);
    }
    findOne(id) {
        return this.vCardsService.findOne(id);
    }
    update(id, updateVCardDto) {
        return this.vCardsService.update(id, updateVCardDto);
    }
    remove(id) {
        return this.vCardsService.remove(id);
    }
};
exports.VCardsController = VCardsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new VCard' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'VCard created', type: vcard_dto_1.VCardDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vcard_dto_1.CreateVCardDto]),
    __metadata("design:returntype", void 0)
], VCardsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all VCards by user id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of VCards', type: [vcard_dto_1.VCardDto] }),
    __param(0, (0, common_1.Query)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VCardsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single VCard by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'VCard found', type: vcard_dto_1.VCardDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'VCard not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VCardsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a VCard' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'VCard updated', type: vcard_dto_1.VCardDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'VCard not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_vcard_dto_1.UpdateVCardDto]),
    __metadata("design:returntype", void 0)
], VCardsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a VCard' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'VCard deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'VCard not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VCardsController.prototype, "remove", null);
exports.VCardsController = VCardsController = __decorate([
    (0, swagger_1.ApiTags)('VCards'),
    (0, common_1.Controller)('vcards'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [vcards_service_1.VCardsService])
], VCardsController);
//# sourceMappingURL=vcards.controller.js.map