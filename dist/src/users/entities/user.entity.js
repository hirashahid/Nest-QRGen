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
exports.User = void 0;
const qr_folder_entity_1 = require("../../qr-folders/entities/qr-folder.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
const vcard_entity_1 = require("../../vcards/entities/vcard.entity");
const typeorm_1 = require("typeorm");
const module_entity_1 = require("../../modules/entities/module.entity");
const member_role_entity_1 = require("../../member-roles/entities/member-role.entity");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'surname' }),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, name: 'stripe_customer_id', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "stripeCustomerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'trial', name: 'subscription_status', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "subscriptionStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'refresh_token', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.users),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", role_entity_1.Role)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'role_id', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'auth_token', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "authToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'referral_id', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "referral_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'language_id', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "language_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'country_code', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "country_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "identity_verify", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "address_verify", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "email_verified", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "sms_verification", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "verify_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "sent_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "last_login", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "last_seen", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "expired_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "tax_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "company_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "company_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "time_zone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "postal_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "pm_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "pm_last_four", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "trial_ends_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "google_analytics", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "facebook_pixel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "google_tag_manager", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "email_verified_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "remember_token", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "notification_billing", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "notification_general", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "notification_newsletters", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vcard_entity_1.VCard, (vCard) => vCard.user),
    __metadata("design:type", Array)
], User.prototype, "vCards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true, name: 'user_permissions' }),
    __metadata("design:type", Object)
], User.prototype, "userPermissions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1, name: 'can_delete_account' }),
    __metadata("design:type", Number)
], User.prototype, "canDeleteAccount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, name: 'registration_complete' }),
    __metadata("design:type", Number)
], User.prototype, "registrationComplete", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, name: 'is_member' }),
    __metadata("design:type", Number)
], User.prototype, "isMember", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => qr_folder_entity_1.QrFolder),
    (0, typeorm_1.JoinTable)({
        name: 'user_folders',
        joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'folder_id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], User.prototype, "folders", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => module_entity_1.Module),
    (0, typeorm_1.JoinTable)({
        name: 'user_modules',
        joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'module_id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], User.prototype, "modules", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, (user) => user.members, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'parent_account_id' }),
    __metadata("design:type", User)
], User.prototype, "parentAccount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'parent_account_id', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "parentAccountId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => User, (user) => user.parentAccount),
    __metadata("design:type", Array)
], User.prototype, "members", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => member_role_entity_1.MemberRole, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'member_role_id' }),
    __metadata("design:type", member_role_entity_1.MemberRole)
], User.prototype, "memberRole", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'member_role_id', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "memberRoleId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
//# sourceMappingURL=user.entity.js.map