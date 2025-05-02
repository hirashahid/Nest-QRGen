import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    googleLogin(token: string): Promise<{
        accessToken: string;
    }>;
    facebookLogin(token: string): Promise<{
        accessToken: string;
    }>;
    refreshTokens(authHeader: string): Promise<{
        accessToken: string;
    }>;
    logout(userId: number): Promise<import("../users/entities/user.entity").User>;
    resendInvite(email: string, userId: number): Promise<{
        message: string;
    }>;
}
