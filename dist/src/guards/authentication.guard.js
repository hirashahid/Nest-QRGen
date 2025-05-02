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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationGuard = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let AuthenticationGuard = class AuthenticationGuard {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        try {
            const request = context.switchToHttp().getRequest();
            const authHeader = request.headers['authorization'];
            if (!authHeader) {
                return false;
            }
            const [bearer, token] = authHeader.split(' ');
            if (bearer !== 'Bearer' || !token) {
                return false;
            }
            const decodedToken = this.jwtService.verify(token, {
                secret: process.env.JWT_SECRET,
            });
            const user = await this.userService.findOne(decodedToken.id);
            if (!user) {
                return false;
            }
            request.user = user;
            return true;
        }
        catch (error) {
            console.warn(error);
            return false;
        }
    }
};
exports.AuthenticationGuard = AuthenticationGuard;
exports.AuthenticationGuard = AuthenticationGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthenticationGuard);
//# sourceMappingURL=authentication.guard.js.map