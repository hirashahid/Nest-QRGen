"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const setup_1 = require("@sentry/nestjs/setup");
const user_entity_1 = require("./users/entities/user.entity");
const role_entity_1 = require("./roles/entities/role.entity");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const roles_module_1 = require("./roles/roles.module");
const templates_module_1 = require("./templates/templates.module");
const events_module_1 = require("./events/events.module");
const qr_types_module_1 = require("./qr-types/qr-types.module");
const qr_codes_module_1 = require("./qr-codes/qr-codes.module");
const qr_scan_logs_module_1 = require("./qr-scan-logs/qr-scan-logs.module");
const qr_logos_module_1 = require("./qr-logos/qr-logos.module");
const qr_resources_module_1 = require("./qr-resources/qr-resources.module");
const qr_folders_module_1 = require("./qr-folders/qr-folders.module");
const vcards_module_1 = require("./vcards/vcards.module");
const contacts_module_1 = require("./contacts/contacts.module");
const plans_module_1 = require("./plans/plans.module");
const qr_domains_module_1 = require("./qr-domains/qr-domains.module");
const pages_module_1 = require("./pages/pages.module");
const banners_module_1 = require("./banners/banners.module");
const file_uploads_module_1 = require("./file-uploads/file-uploads.module");
const qr_frames_module_1 = require("./qr-frames/qr-frames.module");
const qr_styles_module_1 = require("./qr-styles/qr-styles.module");
const email_module_1 = require("./email/email.module");
const crm_automation_module_1 = require("./crm-automation/crm-automation.module");
const user_subscriptions_module_1 = require("./user-subscriptions/user-subscriptions.module");
const discount_codes_module_1 = require("./discount-codes/discount-codes.module");
const user_discounts_module_1 = require("./user-discounts/user-discounts.module");
const qr_resource_sections_module_1 = require("./qr-resource-sections/qr-resource-sections.module");
const serve_static_1 = require("@nestjs/serve-static");
const path = require("path");
const plan_currencies_module_1 = require("./plan-currencies/plan-currencies.module");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const constants_1 = require("./constants");
const settings_module_1 = require("./settings/settings.module");
const subscription_module_1 = require("./subscription/subscription.module");
const public_api_module_1 = require("./api/public-api.module");
const modules_module_1 = require("./modules/modules.module");
const member_roles_module_1 = require("./member-roles/member-roles.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([]),
            setup_1.SentryModule.forRoot(),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve('uploads'),
                serveRoot: '/uploads',
            }),
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: constants_1.DEFAULT_THROTTLE_TTL,
                    limit: constants_1.DEFAULT_THROTTLE_REQ_LIMIT,
                },
            ]),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => {
                    const host = configService.get('POSTGRES_HOST');
                    const port = 5432;
                    const username = configService.get('POSTGRES_USER');
                    const password = configService.get('POSTGRES_PASSWORD');
                    const database = configService.get('POSTGRES_DB');
                    return {
                        type: 'postgres',
                        host,
                        port,
                        username,
                        password,
                        database,
                        entities: [user_entity_1.User, role_entity_1.Role],
                        synchronize: true,
                        autoLoadEntities: true,
                    };
                },
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            templates_module_1.TemplatesModule,
            events_module_1.EventsModule,
            qr_types_module_1.QrTypesModule,
            qr_codes_module_1.QrCodesModule,
            qr_scan_logs_module_1.QrScanLogsModule,
            qr_logos_module_1.QrLogosModule,
            qr_resources_module_1.QrResourcesModule,
            qr_folders_module_1.QrFoldersModule,
            vcards_module_1.VCardsModule,
            contacts_module_1.ContactsModule,
            plans_module_1.PlansModule,
            qr_domains_module_1.QrDomainsModule,
            vcards_module_1.VCardsModule,
            pages_module_1.PagesModule,
            banners_module_1.BannersModule,
            file_uploads_module_1.FileUploadsModule,
            banners_module_1.BannersModule,
            qr_styles_module_1.QrStylesModule,
            qr_frames_module_1.QrFramesModule,
            email_module_1.EmailModule,
            crm_automation_module_1.CrmAutomationModule,
            user_subscriptions_module_1.UserSubscriptionsModule,
            discount_codes_module_1.DiscountCodesModule,
            user_discounts_module_1.UserDiscountsModule,
            qr_resource_sections_module_1.QrResourceSectionsModule,
            plan_currencies_module_1.PlanCurrenciesModule,
            settings_module_1.SettingsModule,
            subscription_module_1.SubscriptionModule,
            public_api_module_1.PublicApiModule,
            modules_module_1.ModulesModule,
            member_roles_module_1.MemberRolesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: setup_1.SentryGlobalFilter,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map