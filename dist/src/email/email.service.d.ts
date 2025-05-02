import { EmailOptions } from './interfaces/email-options.interface';
import * as mjml from 'mjml';
import { TemplateTypeEnum } from 'src/enums/template-type.enum';
export type EmailMetadata = {
    subject: string;
};
export declare abstract class EmailTemplate<T> {
    context: T;
    constructor(context: T);
    name: TemplateTypeEnum;
    get data(): T | unknown;
}
export interface BuiltTemplate {
    html: string;
    metadata?: {
        subject: string;
    };
}
export declare class EmailService {
    private readonly logger;
    private transporter;
    constructor();
    sendEmail(options: EmailOptions): Promise<void>;
    sendTriggerEmail(to: string, subject: string, body: string): Promise<void>;
    verifyConnection(): Promise<boolean>;
    resetTransporter(): void;
    private initializeTransporter;
    getTemplate<T>({ name, data, }: EmailTemplate<T>): Promise<BuiltTemplate>;
    getEmailTemplate(templateName: TemplateTypeEnum): Promise<ReturnType<typeof mjml>>;
    getEmailData(templateName: string): Promise<EmailMetadata>;
}
