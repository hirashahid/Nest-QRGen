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
exports.UserSubscriptionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_subscription_entity_1 = require("./entities/user-subscription.entity");
const crm_automation_service_1 = require("../crm-automation/crm-automation.service");
const users_service_1 = require("../users/users.service");
let UserSubscriptionsService = class UserSubscriptionsService {
    constructor(userSubscriptionRepository, crmAutomationService, userService) {
        this.userSubscriptionRepository = userSubscriptionRepository;
        this.crmAutomationService = crmAutomationService;
        this.userService = userService;
    }
    async create(createUserSubscriptionDto) {
        const userSubscription = this.userSubscriptionRepository.create(createUserSubscriptionDto);
        return this.userSubscriptionRepository.save(userSubscription);
    }
    async findAll() {
        return this.userSubscriptionRepository.find();
    }
    async findOne(stripe_id) {
        const userSubscription = await this.userSubscriptionRepository.findOne({
            where: { stripe_id },
        });
        if (!userSubscription) {
            throw new common_1.NotFoundException(`User Subscription with ID ${stripe_id} not found`);
        }
        return userSubscription;
    }
    async findOneById(id) {
        const userSubscription = await this.userSubscriptionRepository.findOne({
            where: { id },
        });
        if (!userSubscription) {
            throw new common_1.NotFoundException(`User Subscription with ID ${id} not found`);
        }
        return userSubscription;
    }
    async update(stripe_id, updateUserSubscriptionDto) {
        const userSubscription = await this.findOne(stripe_id);
        const updatedSubscription = this.userSubscriptionRepository.merge(userSubscription, updateUserSubscriptionDto);
        return this.userSubscriptionRepository.save(updatedSubscription);
    }
    async remove(stripe_id) {
        const userSubscription = await this.findOne(stripe_id);
        await this.userSubscriptionRepository.remove(userSubscription);
    }
    async findByUserId(user_id) {
        return this.userSubscriptionRepository.find({
            where: { user_id },
            relations: {
                plan: true,
            },
            order: {
                id: 'DESC',
            },
        });
    }
    async cancelSubscription(stripe_id) {
        const userSubscription = await this.findOne(stripe_id);
        if (userSubscription.cancelled_at) {
            throw new common_1.BadRequestException('Subscription is already cancelled');
        }
        userSubscription.cancelled_at = new Date();
        if (!userSubscription.ends_at) {
            userSubscription.ends_at = new Date();
        }
        userSubscription.stripe_status = 'cancelled';
        const user = this.userService.findOne(userSubscription.user_id);
        const checkCrmExist = this.crmAutomationService.findTrigger('user-cancelled', 'immediately', (await user).subscriptionStatus);
        if (checkCrmExist) {
        }
        return this.userSubscriptionRepository.save(userSubscription);
    }
    async findActiveSubscription(user_id) {
        return this.userSubscriptionRepository.findOne({
            where: {
                user_id,
                stripe_status: (0, typeorm_2.In)(['active', 'cancelled']),
                ends_at: (0, typeorm_2.MoreThan)(new Date()),
            },
            order: {
                ends_at: 'DESC',
            },
        });
    }
    async findActiveCancellableSubscriptions(user_id) {
        return this.userSubscriptionRepository.find({
            where: {
                user_id,
                cancelled_at: null,
                ends_at: null,
            },
            relations: {
                plan: true,
            },
            order: {
                id: 'DESC',
            },
        });
    }
};
exports.UserSubscriptionsService = UserSubscriptionsService;
exports.UserSubscriptionsService = UserSubscriptionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_subscription_entity_1.UserSubscription)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        crm_automation_service_1.CrmAutomationService,
        users_service_1.UsersService])
], UserSubscriptionsService);
//# sourceMappingURL=user-subscriptions.service.js.map