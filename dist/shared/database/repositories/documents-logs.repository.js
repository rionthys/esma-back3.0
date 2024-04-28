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
exports.DocumentsLogsRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const documents_logs_entity_1 = require("../entities/documents-logs.entity");
let DocumentsLogsRepository = class DocumentsLogsRepository {
    constructor(documentsLogsRepository) {
        this.documentsLogsRepository = documentsLogsRepository;
    }
    create(createDto) {
        const entity = this.documentsLogsRepository.create(createDto);
        return this.documentsLogsRepository.save(entity);
    }
    findAll() {
        return this.documentsLogsRepository.find();
    }
    findByContractsId(id) {
        return this.documentsLogsRepository.find({
            where: { document: { id: id } },
            relations: { responsible: true }
        });
    }
    countByDocumentsIds(ids) {
        return this.documentsLogsRepository.count({
            where: { document: { id: (0, typeorm_1.In)(ids) } },
        });
    }
    countByDocumentsIdsAndType(ids, type) {
        return this.documentsLogsRepository.count({
            where: { document: { id: (0, typeorm_1.In)(ids) }, action: (0, typeorm_1.Like)(`%${type}%`) },
        });
    }
    findOne(id) {
        return this.documentsLogsRepository.findOneBy({ id });
    }
    findOneByWhere(where) {
        return this.documentsLogsRepository.findOneBy(where);
    }
    findByWhere(where) {
        return this.documentsLogsRepository.findBy(where);
    }
    async update(id, updateDto) {
        let entity = await this.documentsLogsRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.documentsLogsRepository.merge(entity, updateDto);
        return this.documentsLogsRepository.save(entity);
    }
    async bulkUpdateResponsible(oldResponsibleId, newResponsibleId) {
        return await this.documentsLogsRepository
            .createQueryBuilder()
            .update(documents_logs_entity_1.DocumentsLogsEntity)
            .set({ responsible: { id: newResponsibleId } })
            .where('responsible = :oldResponsibleId', { oldResponsibleId })
            .execute();
    }
    remove(id) {
        return this.documentsLogsRepository.delete(id);
    }
};
exports.DocumentsLogsRepository = DocumentsLogsRepository;
exports.DocumentsLogsRepository = DocumentsLogsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(documents_logs_entity_1.DocumentsLogsEntity),
    __param(0, (0, typeorm_2.InjectRepository)(documents_logs_entity_1.DocumentsLogsEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DocumentsLogsRepository);
//# sourceMappingURL=documents-logs.repository.js.map