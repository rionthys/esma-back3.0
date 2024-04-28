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
exports.AffairsLogsRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const affairs_logs_entity_1 = require("../entities/affairs-logs.entity");
let AffairsLogsRepository = class AffairsLogsRepository {
    constructor(affairsLogsRepository) {
        this.affairsLogsRepository = affairsLogsRepository;
    }
    create(createDto) {
        const entity = this.affairsLogsRepository.create(createDto);
        return this.affairsLogsRepository.save(entity);
    }
    findAll() {
        return this.affairsLogsRepository.find();
    }
    findByAffairsId(id) {
        return this.affairsLogsRepository.find({
            where: { affairs: { id: id } },
            relations: { responsible: true }
        });
    }
    countByAffairsIds(ids) {
        return this.affairsLogsRepository.count({
            where: { affairs: { id: (0, typeorm_1.In)(ids) } },
        });
    }
    countByAffairsIdsAndType(ids, type) {
        return this.affairsLogsRepository.count({
            where: { affairs: { id: (0, typeorm_1.In)(ids) }, action: (0, typeorm_1.Like)(`%${type}%`) },
        });
    }
    findOne(id) {
        return this.affairsLogsRepository.findOneBy({ id });
    }
    findOneByWhere(where) {
        return this.affairsLogsRepository.findOneBy(where);
    }
    findByWhere(where) {
        return this.affairsLogsRepository.findBy(where);
    }
    async update(id, updateDto) {
        let entity = await this.affairsLogsRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.affairsLogsRepository.merge(entity, updateDto);
        return this.affairsLogsRepository.save(entity);
    }
    async bulkUpdateResponsible(oldResponsibleId, newResponsibleId) {
        return await this.affairsLogsRepository
            .createQueryBuilder()
            .update(affairs_logs_entity_1.AffairsLogsEntity)
            .set({ responsible: { id: newResponsibleId } })
            .where('responsible = :oldResponsibleId', { oldResponsibleId })
            .execute();
    }
    remove(id) {
        return this.affairsLogsRepository.delete(id).then(() => {
        });
    }
    delete(ids) {
        return this.affairsLogsRepository.delete(ids);
    }
};
exports.AffairsLogsRepository = AffairsLogsRepository;
exports.AffairsLogsRepository = AffairsLogsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(affairs_logs_entity_1.AffairsLogsEntity),
    __param(0, (0, typeorm_2.InjectRepository)(affairs_logs_entity_1.AffairsLogsEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AffairsLogsRepository);
//# sourceMappingURL=affairs-logs.repository.js.map