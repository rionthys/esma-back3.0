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
exports.AffairsRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const affairs_entity_1 = require("../entities/affairs.entity");
const users_repository_1 = require("./users.repository");
let AffairsRepository = class AffairsRepository {
    constructor(affairsRepository, usersRepository) {
        this.affairsRepository = affairsRepository;
        this.usersRepository = usersRepository;
    }
    create(createDto) {
        const entity = this.affairsRepository.create(createDto);
        return this.affairsRepository.save(entity);
    }
    getCountToday(dateString) {
        return this.affairsRepository
            .createQueryBuilder('affair')
            .where('affair.created_at >= :startOfDay', { startOfDay: `${dateString} 00:00:00` })
            .andWhere('affair.created_at <= :endOfDay', { endOfDay: `${dateString} 23:59:59` })
            .getCount();
    }
    findAll() {
        return this.affairsRepository.find({
            relations: ['subscriber', 'responsible', 'object', 'object.client'],
        });
    }
    findAllLogs() {
        return this.affairsRepository.find({
            relations: ['object', 'logs', 'object.client'],
        });
    }
    findOne(id) {
        return this.affairsRepository.findOne({ where: { id }, relations: ['logs', 'responsible'] });
    }
    findOneByWhere(where) {
        return this.affairsRepository.findOneBy(where);
    }
    findByWhere(where) {
        return this.affairsRepository.findBy(where);
    }
    findByObjectId(id) {
        return this.affairsRepository.find({ where: { object: { id } } });
    }
    async update(id, updateDto) {
        let entity = await this.affairsRepository.findOne({ where: { id }, relations: ['responsible'] });
        if (updateDto?.responsible) {
            updateDto.responsible = await this.usersRepository.findOne(+updateDto?.responsible);
        }
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.affairsRepository.merge(entity, updateDto);
        return this.affairsRepository.save(entity);
    }
    async bulkUpdateResponsible(oldResponsibleId, newResponsibleId) {
        return await this.affairsRepository
            .createQueryBuilder()
            .update(affairs_entity_1.AffairsEntity)
            .set({ responsible: { id: newResponsibleId } })
            .where('responsible = :oldResponsibleId', { oldResponsibleId })
            .execute();
    }
    async remove(id) {
        return this.affairsRepository.delete(id).then(() => {
        });
    }
};
exports.AffairsRepository = AffairsRepository;
exports.AffairsRepository = AffairsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(affairs_entity_1.AffairsEntity),
    __param(0, (0, typeorm_2.InjectRepository)(affairs_entity_1.AffairsEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        users_repository_1.UsersRepository])
], AffairsRepository);
//# sourceMappingURL=affairs.repository.js.map