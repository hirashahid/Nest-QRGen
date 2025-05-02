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
exports.QrResourceSectionsController = void 0;
const common_1 = require("@nestjs/common");
const qr_resource_sections_service_1 = require("./qr-resource-sections.service");
const create_qr_resource_section_dto_1 = require("./dto/create-qr-resource-section.dto");
const update_qr_resource_section_dto_1 = require("./dto/update-qr-resource-section.dto");
const swagger_1 = require("@nestjs/swagger");
const qr_resource_section_entity_1 = require("./entities/qr-resource-section.entity");
let QrResourceSectionsController = class QrResourceSectionsController {
    constructor(qrResourceSectionsService) {
        this.qrResourceSectionsService = qrResourceSectionsService;
    }
    create(createQrResourceSectionDto) {
        return this.qrResourceSectionsService.create(createQrResourceSectionDto);
    }
    findAll() {
        return this.qrResourceSectionsService.findAll();
    }
    findByQrResourceId(qr_resource_id) {
        return this.qrResourceSectionsService.findByQrResourceId(qr_resource_id);
    }
    findOne(id) {
        return this.qrResourceSectionsService.findOne(+id);
    }
    update(id, updateQrResourceSectionDto) {
        return this.qrResourceSectionsService.update(+id, updateQrResourceSectionDto);
    }
    remove(id) {
        return this.qrResourceSectionsService.remove(+id);
    }
};
exports.QrResourceSectionsController = QrResourceSectionsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new QR Resource Section' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'QR Resource Section created successfully',
        type: qr_resource_section_entity_1.QrResourceSection,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qr_resource_section_dto_1.CreateQrResourceSectionDto]),
    __metadata("design:returntype", void 0)
], QrResourceSectionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all QR Resource Sections' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns an array of QR Resource Sections',
        type: [qr_resource_section_entity_1.QrResourceSection],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QrResourceSectionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('by-resource'),
    (0, swagger_1.ApiOperation)({ summary: 'Get QR Resource Sections by QR Resource ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns an array of QR Resource Sections',
        type: [qr_resource_section_entity_1.QrResourceSection],
    }),
    __param(0, (0, common_1.Query)('qr_resource_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QrResourceSectionsController.prototype, "findByQrResourceId", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific QR Resource Section by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns the QR Resource Section',
        type: qr_resource_section_entity_1.QrResourceSection,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QrResourceSectionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a QR Resource Section by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'QR Resource Section updated successfully',
        type: qr_resource_section_entity_1.QrResourceSection,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_qr_resource_section_dto_1.UpdateQrResourceSectionDto]),
    __metadata("design:returntype", void 0)
], QrResourceSectionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a QR Resource Section by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'QR Resource Section deleted successfully',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QrResourceSectionsController.prototype, "remove", null);
exports.QrResourceSectionsController = QrResourceSectionsController = __decorate([
    (0, swagger_1.ApiTags)('qr-resource-sections'),
    (0, common_1.Controller)('qr-resource-sections'),
    __metadata("design:paramtypes", [qr_resource_sections_service_1.QrResourceSectionsService])
], QrResourceSectionsController);
//# sourceMappingURL=qr-resource-sections.controller.js.map