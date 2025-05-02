"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_template_dto_1 = require("./create-template.dto");
class TemplateResponseDto extends (0, swagger_1.PartialType)(create_template_dto_1.CreateTemplateDto) {
}
exports.TemplateResponseDto = TemplateResponseDto;
//# sourceMappingURL=template-response.dto.js.map