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
exports.ContractsService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../../shared/database/repositories/users.repository");
const contracts_repository_1 = require("../../shared/database/repositories/contracts.repository");
const contracts_logs_repository_1 = require("../../shared/database/repositories/contracts-logs.repository");
const affairs_repository_1 = require("../../shared/database/repositories/affairs.repository");
let ContractsService = class ContractsService {
    constructor(contractsRepository, affairsRepository, logsRepository, usersRepository) {
        this.contractsRepository = contractsRepository;
        this.affairsRepository = affairsRepository;
        this.logsRepository = logsRepository;
        this.usersRepository = usersRepository;
    }
    async create(postData) {
        const today = new Date();
        const dateString = today.toISOString().split('T')[0];
        const todayCount = await this.contractsRepository.getCountToday(dateString);
        const number = `${dateString.split('-').join('')}${todayCount + 1}`;
        const createDto = { ...postData, number };
        const contract = await this.contractsRepository.create(createDto);
        await this.logsRepository.create({ action: 'создание договора', contracts: contract });
        return contract;
    }
    async createLogs(id, postData) {
        const contracts = await this.contractsRepository.findOneByWhere({ id });
        const responsible = await this.usersRepository.findOne(postData.responsible);
        const logs = { ...postData, responsible, contracts };
        const log = await this.logsRepository.create(logs);
        return {
            ...log,
            responsible: {
                id: log.responsible?.id,
                name: log.responsible?.name,
            }
        };
    }
    async findLogs(id) {
        const logs = await this.logsRepository.findByContractsId(id);
        const contracts = await this.contractsRepository.findOneByWhere({ id });
        return logs.map((log) => {
            return {
                ...log,
                responsible: {
                    id: log.responsible?.id,
                    name: log.responsible?.name,
                },
                object: contracts.object,
            };
        });
    }
    async findAll() {
        return await this.contractsRepository.findAll();
    }
    findOne(id) {
        return this.contractsRepository.findOne(id);
    }
    async update(id, updateDto) {
        return await this.contractsRepository.update(id, updateDto);
    }
    async remove(id) {
        const contract = await this.contractsRepository.findOne(id);
        if (contract && contract.logs.length > 0) {
            const logIds = contract.logs.map(log => log.id);
            await this.logsRepository.delete(logIds);
        }
        await this.contractsRepository.update(id, { object: undefined, logs: [] });
        return this.contractsRepository.remove(id);
    }
};
exports.ContractsService = ContractsService;
exports.ContractsService = ContractsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [contracts_repository_1.ContractsRepository,
        affairs_repository_1.AffairsRepository,
        contracts_logs_repository_1.ContractsLogsRepository,
        users_repository_1.UsersRepository])
], ContractsService);
//# sourceMappingURL=contracts.service.js.map