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
exports.PlansService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const plan_entity_1 = require("./entities/plan.entity");
const constants_1 = require("../constants");
const axios_1 = require("axios");
let PlansService = class PlansService {
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async create(createPlanDto) {
        try {
            const plan = this.planRepository.create(createPlanDto);
            return await this.planRepository.save(plan);
        }
        catch (error) {
            throw error;
        }
    }
    async findAll(countryCode) {
        try {
            const plans = await this.planRepository.find({
                where: { status: true },
                relations: { planCurrencies: true },
            });
            const updatedPlans = plans
                .map((plan) => {
                const planCurrency = plan.planCurrencies?.find((pc) => pc.countryCode === countryCode);
                if (planCurrency) {
                    delete plan.planCurrencies;
                    return {
                        ...plan,
                        price: planCurrency.price,
                        stripePriceId: planCurrency.stripePriceId,
                        currency: planCurrency.currencyCode,
                        pricePerMonth: planCurrency.perMonthPrice,
                        countryCode: countryCode,
                    };
                }
            })
                .filter(Boolean);
            if (updatedPlans.length) {
                updatedPlans.forEach((plan) => {
                    plan.countryCode = countryCode;
                });
                return updatedPlans;
            }
            return await this.planRepository.find();
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const plan = await this.planRepository.findOne({ where: { id } });
            if (!plan) {
                throw new common_1.HttpException(`Plan with id: ${id} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            return plan;
        }
        catch (error) {
            throw error;
        }
    }
    async findByIpAddress(ipAddress) {
        const country = (await this.getCountryFromIP(ipAddress));
        return await this.findAll(country);
    }
    async findOneByStripeId(stripeId) {
        const plan = await this.planRepository.findOne({
            where: { stripePriceId: stripeId },
        });
        if (!plan) {
            throw new common_1.HttpException('plan not found', common_1.HttpStatus.NOT_FOUND);
        }
        return plan;
    }
    async update(id, updatePlanDto) {
        try {
            await this.findOne(id);
            await this.planRepository.update(id, updatePlanDto);
            return this.findOne(id);
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            await this.findOne(id);
            await this.planRepository.delete(id);
            return { message: 'Data deleted successfully' };
        }
        catch (error) {
            throw error;
        }
    }
    async getCountryFromIP(ipAddress) {
        try {
            const response = await axios_1.default.get(`${constants_1.IP_API_URL}${ipAddress}`);
            return response.data.countryCode;
        }
        catch (error) {
            throw error;
        }
    }
    async getPlanCurrenciesData(countryCode, planId) {
        try {
            const plan = await this.planRepository.findOne({
                where: { status: true, id: planId },
                relations: { planCurrencies: true },
            });
            if (plan) {
                const planCurrency = plan.planCurrencies?.find((pc) => pc.countryCode === countryCode);
                const response = {
                    name: plan.name,
                    price: plan.price,
                    pricePerMonth: plan.pricePerMonth,
                    stripePriceId: plan.stripePriceId,
                    currency: plan.currency,
                    durationInDays: plan.durationInDays,
                    description: plan.description,
                    countryCode: countryCode,
                };
                if (planCurrency) {
                    response.price = planCurrency.price;
                    response.pricePerMonth = planCurrency.perMonthPrice;
                    response.currency = planCurrency.currencyCode;
                    response.stripePriceId = planCurrency.stripePriceId;
                }
                return response;
            }
            return {
                name: '',
                price: 0,
                pricePerMonth: 0,
                stripePriceId: '',
                currency: '',
                durationInDays: 0,
                description: '',
                countryCode: countryCode,
            };
        }
        catch (error) {
            throw error;
        }
    }
};
exports.PlansService = PlansService;
exports.PlansService = PlansService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(plan_entity_1.Plan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PlansService);
//# sourceMappingURL=plans.service.js.map