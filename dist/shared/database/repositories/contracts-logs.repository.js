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
exports.ContractsLogsRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const contract_logs_entity_1 = require("../entities/contract-logs.entity");
let ContractsLogsRepository = class ContractsLogsRepository {
    constructor(contractsLogsRepository) {
        this.contractsLogsRepository = contractsLogsRepository;
    }
    create(createDto) {
        const entity = this.contractsLogsRepository.create(createDto);
        return this.contractsLogsRepository.save(entity);
    }
    findAll() {
        return this.contractsLogsRepository.find();
    }
    findByContractsId(id) {
        return this.contractsLogsRepository.find({
            where: { contracts: { id: id } },
            relations: { responsible: true }
        });
    }
    findOne(id) {
        return this.contractsLogsRepository.findOneBy({ id });
    }
    countByContractsIds(ids) {
        return this.contractsLogsRepository.count({
            where: { contracts: { id: (0, typeorm_1.In)(ids) } },
        });
    }
    countByContractsIdsAndType(ids, type) {
        return this.contractsLogsRepository.count({
            where: { contracts: { id: (0, typeorm_1.In)(ids) }, action: (0, typeorm_1.Like)(`%${type}%`) },
        });
    }
    findOneByWhere(where) {
        return this.contractsLogsRepository.findOneBy(where);
    }
    findByWhere(where) {
        return this.contractsLogsRepository.findBy(where);
    }
    async update(id, updateDto) {
        let entity = await this.contractsLogsRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.contractsLogsRepository.merge(entity, updateDto);
        return this.contractsLogsRepository.save(entity);
    }
    async bulkUpdateResponsible(oldResponsibleId, newResponsibleId) {
        return await this.contractsLogsRepository
            .createQueryBuilder()
            .update(contract_logs_entity_1.ContractsLogsEntity)
            .set({ responsible: { id: newResponsibleId } })
            .where('responsible = :oldResponsibleId', { oldResponsibleId })
            .execute();
    }
    remove(id) {
        return this.contractsLogsRepository.delete(id);
    }
    delete(ids) {
        return this.contractsLogsRepository.delete(ids);
    }
};
exports.ContractsLogsRepository = ContractsLogsRepository;
exports.ContractsLogsRepository = ContractsLogsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(contract_logs_entity_1.ContractsLogsEntity),
    __param(0, (0, typeorm_2.InjectRepository)(contract_logs_entity_1.ContractsLogsEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ContractsLogsRepository);
//# sourceMappingURL=contracts-logs.repository.js.map