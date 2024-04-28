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
exports.AccountsRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const accounts_entity_1 = require("../entities/accounts.entity");
const affairs_logs_repository_1 = require("./affairs-logs.repository");
let AccountsRepository = class AccountsRepository {
    constructor(accountsRepository, affairsLogs) {
        this.accountsRepository = accountsRepository;
        this.affairsLogs = affairsLogs;
    }
    async create(createDto) {
        const entity = this.accountsRepository.create(createDto);
        await this.affairsLogs.create({ action: 'выставлен счет', type: 'исходящие', affairs: createDto.affair });
        return this.accountsRepository.save(entity);
    }
    getCountToday(dateString) {
        return this.accountsRepository
            .createQueryBuilder('affair')
            .where('affair.created_at >= :startOfDay', { startOfDay: `${dateString} 00:00:00` })
            .andWhere('affair.created_at <= :endOfDay', { endOfDay: `${dateString} 23:59:59` })
            .getCount();
    }
    findAll() {
        return this.accountsRepository.find({
            relations: ['affair', "affair.object", "affair.object.client"],
        });
    }
    findOne(id) {
        return this.accountsRepository.findOne({ where: { id }, relations: ['logs'] });
    }
    findOneByWhere(where) {
        return this.accountsRepository.findOneBy(where);
    }
    findByWhere(where) {
        return this.accountsRepository.findBy(where);
    }
    async update(id, updateDto) {
        let entity = await this.accountsRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.accountsRepository.merge(entity, updateDto);
        return this.accountsRepository.save(entity);
    }
    async remove(id) {
        return this.accountsRepository.delete(id).then(() => {
        });
    }
};
exports.AccountsRepository = AccountsRepository;
exports.AccountsRepository = AccountsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(accounts_entity_1.AccountsEntity),
    __param(0, (0, typeorm_2.InjectRepository)(accounts_entity_1.AccountsEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        affairs_logs_repository_1.AffairsLogsRepository])
], AccountsRepository);
//# sourceMappingURL=accounts.repository.js.map