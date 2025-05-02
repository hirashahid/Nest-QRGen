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
exports.QrDomainsController = void 0;
const common_1 = require("@nestjs/common");
const qr_domains_service_1 = require("./qr-domains.service");
const create_qr_domain_dto_1 = require("./dto/create-qr-domain.dto");
const update_qr_domain_dto_1 = require("./dto/update-qr-domain.dto");
const swagger_1 = require("@nestjs/swagger");
const qr_domain_response_dto_1 = require("./dto/qr-domain-response.dto");
const authentication_guard_1 = require("../guards/authentication.guard");
const get_current_user_id_decorator_1 = require("../decorators/get-current-user-id.decorator");
let QrDomainsController = class QrDomainsController {
    constructor(qrDomainsService) {
        this.qrDomainsService = qrDomainsService;
    }
    create(createQrDomainDto, userId) {
        return this.qrDomainsService.create(createQrDomainDto, userId);
    }
    findAll(qrDomainByUserDto) {
        return this.qrDomainsService.findAll(qrDomainByUserDto.userId);
    }
    findOne(id) {
        return this.qrDomainsService.findData(+id);
    }
    update(id, updateQrDomainDto, userId) {
        return this.qrDomainsService.update(+id, updateQrDomainDto, userId);
    }
    remove(id, userId) {
        return this.qrDomainsService.remove(+id, userId);
    }
    verify(id) {
        return this.qrDomainsService.verify(+id);
    }
};
exports.QrDomainsController = QrDomainsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new domain' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Domain successfully created',
        type: qr_domain_response_dto_1.QrDomainResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qr_domain_dto_1.CreateQrDomainDto, Number]),
    __metadata("design:returntype", void 0)
], QrDomainsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('by-user-id/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all domains' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Domains successfully retrieved',
        type: [qr_domain_response_dto_1.QrDomainResponseDto],
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [qr_domain_response_dto_1.QrDomainByUserDto]),
    __metadata("design:returntype", void 0)
], QrDomainsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a domain by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Domain successfully retrieved',
        type: qr_domain_response_dto_1.QrDomainResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Domain not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QrDomainsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a domain by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Domain successfully updated',
        type: qr_domain_response_dto_1.QrDomainResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Domain not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_qr_domain_dto_1.UpdateQrDomainDto, Number]),
    __metadata("design:returntype", void 0)
], QrDomainsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a domain by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Domain successfully deleted',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Domain not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_current_user_id_decorator_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], QrDomainsController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/verify'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify a domain by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Domain successfully verified',
        type: qr_domain_response_dto_1.QrDomainResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Domain not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QrDomainsController.prototype, "verify", null);
exports.QrDomainsController = QrDomainsController = __decorate([
    (0, swagger_1.ApiTags)('QR Domains'),
    (0, common_1.Controller)('qr-domains'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [qr_domains_service_1.QrDomainsService])
], QrDomainsController);
//# sourceMappingURL=qr-domains.controller.js.map