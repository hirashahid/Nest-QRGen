"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestNotAllowedError = void 0;
const common_1 = require("@nestjs/common");
exports.RequestNotAllowedError = {
    statusCode: common_1.HttpStatus.FORBIDDEN,
    code: 'REQUEST_NOT_ALLOWED',
    message: 'Request not allowed',
};
//# sourceMappingURL=forbidden.exception.js.map