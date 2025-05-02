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
exports.EmailController = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("./email.service");
const send_email_dto_1 = require("./dto/send-email.dto");
const throttler_1 = require("@nestjs/throttler");
let EmailController = class EmailController {
    constructor(emailService) {
        this.emailService = emailService;
    }
    async sendEmail(emailDto) {
        try {
            await this.emailService.sendEmail({
                to: emailDto.to,
                subject: emailDto.subject,
                text: emailDto.text,
                html: emailDto.html,
            });
            return {
                message: 'Email sent successfully',
                status: common_1.HttpStatus.OK,
            };
        }
        catch (error) {
            console.warn(error);
            throw new common_1.HttpException('Failed to send email', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async verifyEmailConnection() {
        const isConnected = await this.emailService.verifyConnection();
        return {
            message: isConnected
                ? 'Email connection is valid'
                : 'Email connection failed',
            status: isConnected ? common_1.HttpStatus.OK : common_1.HttpStatus.SERVICE_UNAVAILABLE,
        };
    }
    async sendCustomEmail(to, subject, body) {
        try {
            await this.emailService.sendEmail({
                to: to,
                subject: subject,
                text: body,
                html: body,
            });
        }
        catch (error) {
            console.warn(error);
            throw new common_1.HttpException('Failed to send email', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.EmailController = EmailController;
__decorate([
    (0, common_1.Post)('send'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_email_dto_1.SendEmailDto]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Post)('verify'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "verifyEmailConnection", null);
exports.EmailController = EmailController = __decorate([
    (0, common_1.Controller)('email'),
    (0, common_1.UseGuards)(throttler_1.ThrottlerGuard),
    __metadata("design:paramtypes", [email_service_1.EmailService])
], EmailController);
//# sourceMappingURL=email.controller.js.map