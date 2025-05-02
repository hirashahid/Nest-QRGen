"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrResourceSectionsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const qr_resource_sections_service_1 = require("./qr-resource-sections.service");
const qr_resource_sections_controller_1 = require("./qr-resource-sections.controller");
const qr_resource_section_entity_1 = require("./entities/qr-resource-section.entity");
let QrResourceSectionsModule = class QrResourceSectionsModule {
};
exports.QrResourceSectionsModule = QrResourceSectionsModule;
exports.QrResourceSectionsModule = QrResourceSectionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([qr_resource_section_entity_1.QrResourceSection])],
        controllers: [qr_resource_sections_controller_1.QrResourceSectionsController],
        providers: [qr_resource_sections_service_1.QrResourceSectionsService],
        exports: [qr_resource_sections_service_1.QrResourceSectionsService],
    })
], QrResourceSectionsModule);
//# sourceMappingURL=qr-resource-sections.module.js.map