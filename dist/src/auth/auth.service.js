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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const crm_automation_service_1 = require("../crm-automation/crm-automation.service");
const email_service_1 = require("../email/email.service");
const google_auth_library_1 = require("google-auth-library");
const axios_1 = require("axios");
const constants_1 = require("../constants");
const config_1 = require("@nestjs/config");
const accept_invitation_1 = require("./accept-invitation");
const client = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
let AuthService = class AuthService {
    constructor(usersService, jwtService, crmAutomationService, emailService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.crmAutomationService = crmAutomationService;
        this.emailService = emailService;
        this.configService = configService;
    }
    async validateUser(email, password) {
        return await this.usersService.validateUser(email, password);
    }
    async login(loginDto) {
        const user = await this.usersService.findOneByEmail(loginDto.email);
        if (!user?.password) {
            throw new common_1.BadRequestException('User registration is incomplete. Please finish the registration process.');
        }
        const isPasswordValid = await bcrypt.compare(loginDto.password, user?.password);
        if (!isPasswordValid) {
            throw new common_1.HttpException('password is incorrect', common_1.HttpStatus.UNAUTHORIZED);
        }
        const accessTokenData = {
            id: user.id,
            email: user.email,
        };
        const trigger = await this.crmAutomationService.findTrigger('user-login', 'after', null);
        if (trigger.length > 0) {
            console.log('trigger found');
            await this.emailService.sendTriggerEmail(user.email, trigger[0].email_subject, trigger[0].email_content);
        }
        const accessToken = this.jwtService.sign(accessTokenData, {
            secret: this.configService.get('JWT_SECRET'),
            expiresIn: '12h',
        });
        const refreshToken = this.jwtService.sign(accessTokenData, {
            secret: this.configService.get('JWT_REFRESH_SECRET'),
            expiresIn: '1d',
        });
        await this.usersService.update(user.id, {
            refreshToken,
            last_login: new Date(),
        });
        return {
            accessToken,
        };
    }
    async refreshTokens(accToken) {
        try {
            const decoded = this.jwtService.decode(accToken);
            if (!decoded || !decoded.id) {
                throw new common_1.UnauthorizedException('Invalid token');
            }
            const user = await this.usersService.findById(decoded.id);
            if (!user || !user.refreshToken) {
                throw new common_1.UnauthorizedException('Access Denied');
            }
            this.jwtService.verify(user.refreshToken, {
                secret: this.configService.get('JWT_REFRESH_SECRET'),
            });
            const payload = {
                email: user.email,
                id: user.id,
            };
            const accessToken = this.jwtService.sign(payload, {
                secret: this.configService.get('JWT_SECRET'),
                expiresIn: '12h',
            });
            return {
                accessToken,
            };
        }
        catch {
            throw new common_1.UnauthorizedException('Access Denied');
        }
    }
    async logout(userId) {
        return this.usersService.updateRefreshToken(userId, null);
    }
    async verifyRefreshToken(refreshToken, hashedRefreshToken) {
        return bcrypt.compare(refreshToken, hashedRefreshToken);
    }
    async verifyGoogleToken(token) {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        let user = await this.usersService.findOneByEmail(payload.email);
        if (!user) {
            user = await this.usersService.create({
                email: payload.email,
                name: payload.name,
                password: '',
            });
        }
        const accessTokenData = {
            id: user.id,
            email: user.email,
        };
        const accessToken = this.jwtService.sign(accessTokenData, {
            secret: this.configService.get('JWT_SECRET'),
            expiresIn: '12h',
        });
        const refreshToken = this.jwtService.sign(accessTokenData, {
            secret: this.configService.get('JWT_REFRESH_SECRET'),
            expiresIn: '1d',
        });
        await this.usersService.update(user.id, {
            refreshToken,
            last_login: new Date(),
        });
        return {
            accessToken,
        };
    }
    async verifyFacebookToken(token) {
        try {
            const { data } = await axios_1.default.get(constants_1.FACEBOOK_GRAPH_API, {
                params: {
                    access_token: token,
                    fields: 'id,name,email',
                },
            });
            if (!data || !data.email) {
                throw new Error('Invalid Facebook token or email not available.');
            }
            let user = await this.usersService.findOneByEmail(data.email);
            if (!user) {
                user = await this.usersService.create({
                    email: data.email,
                    name: data.name,
                    password: '',
                });
            }
            const accessTokenData = {
                id: user.id,
                email: user.email,
            };
            const accessToken = this.jwtService.sign(accessTokenData, {
                secret: this.configService.get('JWT_SECRET'),
                expiresIn: '12h',
            });
            const refreshToken = this.jwtService.sign(accessTokenData, {
                secret: this.configService.get('JWT_REFRESH_SECRET'),
                expiresIn: '1d',
            });
            await this.usersService.update(user.id, {
                refreshToken,
                last_login: new Date(),
            });
            return {
                accessToken,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async sendInvite(email, userId) {
        const inviteSentBy = await this.usersService.findById(userId);
        const user = await this.usersService.findOneByEmail(email);
        const accessTokenData = {
            id: user.id,
            email: user.email,
        };
        const accessToken = this.jwtService.sign(accessTokenData, {
            secret: this.configService.get('JWT_SECRET'),
            expiresIn: '12h',
        });
        const inviteLink = `${this.configService.get('FE_APP_DOMAIN_URL')}/reset-password?token=${accessToken}`;
        const emailTemplate = new accept_invitation_1.AcceptInvitation({
            inviteLink,
            emailFrom: inviteSentBy.email,
        });
        const { html } = await this.emailService.getTemplate(emailTemplate);
        await this.emailService.sendEmail({
            to: email,
            subject: 'Invitation to Join',
            text: `You have been invited to join. Click the link to accept: ${inviteLink}`,
            html,
        });
        return { message: 'Invitation sent successfully' };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        crm_automation_service_1.CrmAutomationService,
        email_service_1.EmailService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map