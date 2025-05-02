import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { CrmAutomationService } from '../crm-automation/crm-automation.service';
import { EmailService } from '../email/email.service';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly crmAutomationService;
    private readonly emailService;
    private readonly configService;
    constructor(usersService: UsersService, jwtService: JwtService, crmAutomationService: CrmAutomationService, emailService: EmailService, configService: ConfigService);
    validateUser(email: string, password: string): Promise<import("../users/entities/user.entity").User>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    refreshTokens(accToken: string): Promise<{
        accessToken: string;
    }>;
    logout(userId: number): Promise<import("../users/entities/user.entity").User>;
    private verifyRefreshToken;
    verifyGoogleToken(token: string): Promise<{
        accessToken: string;
    }>;
    verifyFacebookToken(token: string): Promise<{
        accessToken: string;
    }>;
    sendInvite(email: string, userId: number): Promise<{
        message: string;
    }>;
}
