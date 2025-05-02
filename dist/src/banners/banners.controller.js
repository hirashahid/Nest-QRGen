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
exports.BannerController = void 0;
const common_1 = require("@nestjs/common");
const create_banner_dto_1 = require("./dto/create-banner.dto");
const update_banner_dto_1 = require("./dto/update-banner.dto");
const swagger_1 = require("@nestjs/swagger");
const banner_entity_1 = require("./entities/banner.entity");
const banners_service_1 = require("./banners.service");
let BannerController = class BannerController {
    constructor(bannerService) {
        this.bannerService = bannerService;
    }
    async create(createBannerDto) {
        return await this.bannerService.create(createBannerDto);
    }
    async findAll() {
        return await this.bannerService.findAll();
    }
    async findOne(id) {
        return await this.bannerService.findOne(id);
    }
    async update(id, updateBannerDto) {
        return await this.bannerService.update(id, updateBannerDto);
    }
    async remove(id) {
        return await this.bannerService.remove(id);
    }
};
exports.BannerController = BannerController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new banner' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Banner created successfully',
        type: banner_entity_1.Banner,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_banner_dto_1.CreateBannerDto]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all banners' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of banners', type: [banner_entity_1.Banner] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a banner by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Banner found', type: banner_entity_1.Banner }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Banner not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a banner by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Banner updated successfully',
        type: banner_entity_1.Banner,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Banner not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_banner_dto_1.UpdateBannerDto]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a banner by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Banner deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Banner not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "remove", null);
exports.BannerController = BannerController = __decorate([
    (0, swagger_1.ApiTags)('Banners'),
    (0, common_1.Controller)('banners'),
    __metadata("design:paramtypes", [banners_service_1.BannerService])
], BannerController);
//# sourceMappingURL=banners.controller.js.map