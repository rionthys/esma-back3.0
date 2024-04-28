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
exports.PriceRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const price_entity_1 = require("../entities/price.entity");
let PriceRepository = class PriceRepository {
    constructor(priceRepository) {
        this.priceRepository = priceRepository;
    }
    create(createDto) {
        console.log(createDto);
        const entity = this.priceRepository.create(createDto);
        return this.priceRepository.save(entity);
    }
    findAll() {
        return this.priceRepository.find();
    }
    findOne(id) {
        return this.priceRepository.findOneBy({ id });
    }
    findOneByWhere(where) {
        return this.priceRepository.findOneBy(where);
    }
    async update(id, updateDto) {
        let entity = await this.priceRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.priceRepository.merge(entity, updateDto);
        return this.priceRepository.save(entity);
    }
    remove(id) {
        return this.priceRepository.delete(id).then(() => {
        });
    }
    deleteAll() {
        return this.priceRepository.clear();
    }
};
exports.PriceRepository = PriceRepository;
exports.PriceRepository = PriceRepository = __decorate([
    (0, typeorm_1.EntityRepository)(price_entity_1.PriceEntity),
    __param(0, (0, typeorm_2.InjectRepository)(price_entity_1.PriceEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PriceRepository);
//# sourceMappingURL=price.repository.js.map