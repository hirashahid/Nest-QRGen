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
exports.QrCode = void 0;
const qr_type_entity_1 = require("../../qr-types/entities/qr-type.entity");
const qr_scan_log_entity_1 = require("../../qr-scan-logs/entities/qr-scan-log.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const qr_folder_entity_1 = require("../../qr-folders/entities/qr-folder.entity");
const qr_domain_entity_1 = require("../../qr-domains/entities/qr-domain.entity");
let QrCode = class QrCode {
};
exports.QrCode = QrCode;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QrCode.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], QrCode.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], QrCode.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], QrCode.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QrCode.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QrCode.prototype, "qr_string", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => qr_type_entity_1.QrType),
    (0, typeorm_1.JoinColumn)({ name: 'qr_type_id' }),
    __metadata("design:type", qr_type_entity_1.QrType)
], QrCode.prototype, "qr_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], QrCode.prototype, "qr_type_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => qr_folder_entity_1.QrFolder),
    (0, typeorm_1.JoinColumn)({ name: 'folder_id' }),
    __metadata("design:type", qr_folder_entity_1.QrFolder)
], QrCode.prototype, "folder", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], QrCode.prototype, "folder_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => qr_domain_entity_1.QrDomain),
    (0, typeorm_1.JoinColumn)({ name: 'domain_id' }),
    __metadata("design:type", qr_domain_entity_1.QrDomain)
], QrCode.prototype, "domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], QrCode.prototype, "domain_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], QrCode.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], QrCode.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], QrCode.prototype, "schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], QrCode.prototype, "style", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], QrCode.prototype, "stats", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'scan_limit' }),
    __metadata("design:type", Number)
], QrCode.prototype, "scanLimit", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'qr_image' }),
    __metadata("design:type", String)
], QrCode.prototype, "qrImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'image_format' }),
    __metadata("design:type", String)
], QrCode.prototype, "imageFormat", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, name: 'scan_count' }),
    __metadata("design:type", Number)
], QrCode.prototype, "scanCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, name: 'visits' }),
    __metadata("design:type", Number)
], QrCode.prototype, "visits", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'access_password' }),
    __metadata("design:type", String)
], QrCode.prototype, "accessPassword", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'active_password' }),
    __metadata("design:type", Boolean)
], QrCode.prototype, "activePassword", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'google_analytics_id' }),
    __metadata("design:type", String)
], QrCode.prototype, "googleAnalyticsId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'facebook_pixel_id' }),
    __metadata("design:type", String)
], QrCode.prototype, "facebookPixelId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'track_events' }),
    __metadata("design:type", Boolean)
], QrCode.prototype, "trackEvents", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], QrCode.prototype, "isFavorite", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'google_tag_manager_id' }),
    __metadata("design:type", String)
], QrCode.prototype, "googleTagManagerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'allow_scan_limit' }),
    __metadata("design:type", Boolean)
], QrCode.prototype, "allowScanLimit", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'redirect_url' }),
    __metadata("design:type", String)
], QrCode.prototype, "redirectUrl", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => qr_scan_log_entity_1.QrScanLog, (scanLog) => scanLog.qrCode),
    __metadata("design:type", Array)
], QrCode.prototype, "scanLogs", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], QrCode.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'created_at',
    }),
    __metadata("design:type", Date)
], QrCode.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'timestamp',
        name: 'last_scan_at',
    }),
    __metadata("design:type", Date)
], QrCode.prototype, "lastScanAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'timestamp',
        name: 'expires_at',
    }),
    __metadata("design:type", Date)
], QrCode.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
        name: 'updated_at',
    }),
    __metadata("design:type", Date)
], QrCode.prototype, "updatedAt", void 0);
exports.QrCode = QrCode = __decorate([
    (0, typeorm_1.Entity)()
], QrCode);
//# sourceMappingURL=qr-code.entity.js.map