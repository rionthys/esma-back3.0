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
exports.DocumentsRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const documents_entity_1 = require("../entities/documents.entity");
let DocumentsRepository = class DocumentsRepository {
    constructor(contractsRepository) {
        this.contractsRepository = contractsRepository;
    }
    create(createDto) {
        const entity = this.contractsRepository.create(createDto);
        return this.contractsRepository.save(entity);
    }
    getCountToday(dateString) {
        return this.contractsRepository
            .createQueryBuilder('contract')
            .where('contract.created_at >= :startOfDay', { startOfDay: `${dateString} 00:00:00` })
            .andWhere('contract.created_at <= :endOfDay', { endOfDay: `${dateString} 23:59:59` })
            .getCount();
    }
    findAll() {
        return this.contractsRepository.find({
            relations: ['object'],
        });
    }
    findOne(id) {
        return this.contractsRepository.findOne({ where: { id }, relations: ['logs'] });
    }
    findOneByWhere(where) {
        return this.contractsRepository.findOne({ where: where, relations: ['object'] });
    }
    async update(id, updateDto) {
        let entity = await this.contractsRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.contractsRepository.merge(entity, updateDto);
        return this.contractsRepository.save(entity);
    }
    remove(id) {
        return this.contractsRepository.delete(id).then(() => {
        });
    }
};
exports.DocumentsRepository = DocumentsRepository;
exports.DocumentsRepository = DocumentsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(documents_entity_1.DocumentsEntity),
    __param(0, (0, typeorm_2.InjectRepository)(documents_entity_1.DocumentsEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DocumentsRepository);
//# sourceMappingURL=documents.repository.js.map