"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDiscountsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_discounts_service_1 = require("./user-discounts.service");
const user_discounts_controller_1 = require("./user-discounts.controller");
const user_discount_entity_1 = require("./entities/user-discount.entity");
const discount_codes_module_1 = require("../discount-codes/discount-codes.module");
const users_module_1 = require("../users/users.module");
const jwt_1 = require("@nestjs/jwt");
let UserDiscountsModule = class UserDiscountsModule {
};
exports.UserDiscountsModule = UserDiscountsModule;
exports.UserDiscountsModule = UserDiscountsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_discount_entity_1.UserDiscount]),
            users_module_1.UsersModule,
            jwt_1.JwtModule,
            discount_codes_module_1.DiscountCodesModule,
        ],
        controllers: [user_discounts_controller_1.UserDiscountsController],
        providers: [user_discounts_service_1.UserDiscountsService],
        exports: [user_discounts_service_1.UserDiscountsService],
    })
], UserDiscountsModule);
//# sourceMappingURL=user-discounts.module.js.map