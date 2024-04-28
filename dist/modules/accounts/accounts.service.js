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
exports.AccountsService = void 0;
const common_1 = require("@nestjs/common");
const accounts_repository_1 = require("../../shared/database/repositories/accounts.repository");
const price_repository_1 = require("../../shared/database/repositories/price.repository");
let AccountsService = class AccountsService {
    constructor(accountsRepository, priceRepository) {
        this.accountsRepository = accountsRepository;
        this.priceRepository = priceRepository;
    }
    async create(postData) {
        const prices = await this.priceRepository.findAll();
        const price = prices.find((service) => Object.values(service.value).includes(postData.service));
        postData.price = price ? price.value[postData.type] : undefined;
        console.log(price);
        console.log(postData.service);
        return await this.accountsRepository.create(postData);
    }
    async findAll() {
        let accounts = await this.accountsRepository.findAll();
        accounts = accounts.map((account) => {
            return {
                ...account,
                client: account?.affair?.object?.client,
            };
        });
        return accounts;
    }
    findOne(id) {
        return this.accountsRepository.findOne(id);
    }
    async update(id, updateDto) {
        return await this.accountsRepository.update(id, updateDto);
    }
    async remove(id) {
        return this.accountsRepository.remove(id);
    }
};
exports.AccountsService = AccountsService;
exports.AccountsService = AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [accounts_repository_1.AccountsRepository,
        price_repository_1.PriceRepository])
], AccountsService);
//# sourceMappingURL=accounts.service.js.map