"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrFrameResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_qr_frame_dto_1 = require("./create-qr-frame.dto");
class QrFrameResponseDto extends (0, swagger_1.PartialType)(create_qr_frame_dto_1.CreateQrFrameDto) {
}
exports.QrFrameResponseDto = QrFrameResponseDto;
//# sourceMappingURL=qr-frame-response.dto.js.map