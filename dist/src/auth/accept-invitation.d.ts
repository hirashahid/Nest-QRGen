import { EmailTemplate } from 'src/email/email.service';
import { TemplateTypeEnum } from 'src/enums/template-type.enum';
export declare class AcceptInvitation extends EmailTemplate<{
    inviteLink: string;
    emailFrom: string;
}> {
    name: TemplateTypeEnum;
}
