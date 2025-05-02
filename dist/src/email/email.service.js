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
var EmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = exports.EmailTemplate = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
const googleapis_1 = require("googleapis");
const process = require("node:process");
const promises_1 = require("fs/promises");
const mjml = require("mjml");
const path = require("path");
const Handlebars = require("handlebars");
class EmailTemplate {
    constructor(context) {
        this.context = context;
    }
    get data() {
        return this.context;
    }
}
exports.EmailTemplate = EmailTemplate;
let EmailService = EmailService_1 = class EmailService {
    constructor() {
        this.logger = new common_1.Logger(EmailService_1.name);
        this.initializeTransporter();
    }
    async sendEmail(options) {
        try {
            if (!this.transporter) {
                this.initializeTransporter();
            }
            const result = await this.transporter.sendMail({
                from: process.env.GMAIL_EMAIL,
                to: options.to,
                subject: options.subject,
                text: options.text,
                html: options.html,
            });
            this.logger.log(`Email sent successfully to ${options.to}. Message ID: ${result.messageId}`);
        }
        catch (error) {
            this.logger.error('Error sending email', error);
            if (error.code === 'EAUTH') {
                throw new Error('Authentication failed. Please check your Gmail credentials.');
            }
            throw new Error(`Failed to send email: ${error.message}`);
        }
    }
    async sendTriggerEmail(to, subject, body) {
        try {
            if (!this.transporter) {
                this.initializeTransporter();
            }
            const result = await this.transporter.sendMail({
                from: process.env.MAIL_FROM_ADDRESS,
                to: to,
                subject: subject,
                text: body,
                html: body,
            });
            this.logger.log(`Email sent successfully to ${to}. Message ID: ${result.messageId}`);
        }
        catch (error) {
            this.logger.error('Error sending email', error);
            if (error.code === 'EAUTH') {
                throw new Error('Authentication failed. Please check your Gmail credentials.');
            }
            throw new Error(`Failed to send email: ${error.message}`);
        }
    }
    async verifyConnection() {
        try {
            await this.transporter.verify();
            this.logger.log('Email connection verified successfully');
            return true;
        }
        catch (error) {
            this.logger.error('Email connection verification failed', error);
            return false;
        }
    }
    resetTransporter() {
        this.initializeTransporter();
    }
    initializeTransporter() {
        try {
            const OAuth2 = googleapis_1.google.auth.OAuth2;
            const oauth2Client = new OAuth2(process.env.GMAIL_CLIENT_ID, process.env.GMAIL_CLIENT_SECRET, 'https://developers.google.com/oauthplayground');
            oauth2Client.setCredentials({
                refresh_token: process.env.GMAIL_REFRESH_TOKEN,
            });
            this.transporter = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port: parseInt(process.env.MAIL_PORT, 10),
                secure: true,
                auth: {
                    user: process.env.MAIL_USERNAME,
                    pass: process.env.MAIL_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });
        }
        catch (error) {
            this.logger.error('Failed to initialize email transporter', error);
            throw new Error(`Email transporter initialization failed: ${error.message}`);
        }
    }
    async getTemplate({ name, data, }) {
        try {
            const result = await this.getEmailTemplate(name);
            const template = Handlebars.compile(result.html);
            const html = template(data);
            return { html };
        }
        catch (error) {
            throw error;
        }
    }
    async getEmailTemplate(templateName) {
        try {
            const file = await (0, promises_1.readFile)(path.resolve(__dirname, './templates', `${templateName}.mjml`), 'utf8');
            return mjml(file);
        }
        catch (error) {
            throw error;
        }
    }
    async getEmailData(templateName) {
        try {
            const contents = await (0, promises_1.readFile)(path.resolve(__dirname, './templates', `${templateName}.json`), 'utf8');
            return JSON.parse(contents);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = EmailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EmailService);
//# sourceMappingURL=email.service.js.map