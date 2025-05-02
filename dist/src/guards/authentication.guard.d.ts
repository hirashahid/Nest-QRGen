import { CanActivate, ExecutionContext } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthenticationGuard implements CanActivate {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
