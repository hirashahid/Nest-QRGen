"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerToServerDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ServerToServerDoc = () => (0, common_1.applyDecorators)((0, swagger_1.ApiHeader)({
    name: 'secret-key',
    description: 'Secret Key',
    required: true,
    example: '7afa582e86f2fcdbf1fa33e8',
}));
exports.ServerToServerDoc = ServerToServerDoc;
//# sourceMappingURL=auth-server.decorator.js.map