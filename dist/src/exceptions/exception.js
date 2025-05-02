"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpException = void 0;
const common_1 = require("@nestjs/common");
class CustomHttpException extends common_1.HttpException {
    constructor(exceptionInfo) {
        const { message, statusCode, code } = exceptionInfo;
        super({ message, code, statusCode }, statusCode);
        this.code = code;
    }
    getCode() {
        return this.code;
    }
}
exports.CustomHttpException = CustomHttpException;
//# sourceMappingURL=exception.js.map