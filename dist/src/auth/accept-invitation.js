"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptInvitation = void 0;
const email_service_1 = require("../email/email.service");
const template_type_enum_1 = require("../enums/template-type.enum");
class AcceptInvitation extends email_service_1.EmailTemplate {
    constructor() {
        super(...arguments);
        this.name = template_type_enum_1.TemplateTypeEnum.acceptInvitation;
    }
}
exports.AcceptInvitation = AcceptInvitation;
//# sourceMappingURL=accept-invitation.js.map