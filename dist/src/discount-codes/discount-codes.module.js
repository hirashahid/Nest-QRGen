"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountCodesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const discount_codes_service_1 = require("./discount-codes.service");
const discount_codes_controller_1 = require("./discount-codes.controller");
const discount_code_entity_1 = require("./entities/discount-code.entity");
const auth_module_1 = require("../auth/auth.module");
let DiscountCodesModule = class DiscountCodesModule {
};
exports.DiscountCodesModule = DiscountCodesModule;
exports.DiscountCodesModule = DiscountCodesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([discount_code_entity_1.DiscountCode]), auth_module_1.AuthModule],
        controllers: [discount_codes_controller_1.DiscountCodesController],
        providers: [discount_codes_service_1.DiscountCodesService],
        exports: [discount_codes_service_1.DiscountCodesService],
    })
], DiscountCodesModule);
//# sourceMappingURL=discount-codes.module.js.map