"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDiscountDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_discount_dto_1 = require("./create-user-discount.dto");
class UpdateUserDiscountDto extends (0, mapped_types_1.PartialType)(create_user_discount_dto_1.CreateUserDiscountDto) {
}
exports.UpdateUserDiscountDto = UpdateUserDiscountDto;
//# sourceMappingURL=update-user-discount.dto.js.map