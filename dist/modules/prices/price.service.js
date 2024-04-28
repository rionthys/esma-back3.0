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
exports.PriceService = void 0;
const common_1 = require("@nestjs/common");
const price_repository_1 = require("../../shared/database/repositories/price.repository");
let PriceService = class PriceService {
    constructor(priceRepository) {
        this.priceRepository = priceRepository;
    }
    async create(postData) {
        return await this.priceRepository.create(postData);
    }
    async findAll() {
        return await this.priceRepository.findAll();
    }
    findOne(id) {
        return this.priceRepository.findOne(id);
    }
    async update(id, updateDto) {
        return await this.priceRepository.update(id, updateDto);
    }
    async remove(id) {
        return this.priceRepository.remove(id);
    }
};
exports.PriceService = PriceService;
exports.PriceService = PriceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [price_repository_1.PriceRepository])
], PriceService);
//# sourceMappingURL=price.service.js.map