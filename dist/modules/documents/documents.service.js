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
exports.DocumentsService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../../shared/database/repositories/users.repository");
const affairs_repository_1 = require("../../shared/database/repositories/affairs.repository");
const documents_repository_1 = require("../../shared/database/repositories/documents.repository");
const documents_logs_repository_1 = require("../../shared/database/repositories/documents-logs.repository");
const database_entity_repository_1 = require("../../shared/database/repositories/database-entity.repository");
let DocumentsService = class DocumentsService {
    constructor(documentsRepository, affairsRepository, databaseRepository, logsRepository, usersRepository) {
        this.documentsRepository = documentsRepository;
        this.affairsRepository = affairsRepository;
        this.databaseRepository = databaseRepository;
        this.logsRepository = logsRepository;
        this.usersRepository = usersRepository;
    }
    async create(postData) {
        const today = new Date();
        const dateString = today.toISOString().split('T')[0];
        const todayCount = await this.documentsRepository.getCountToday(dateString);
        const number = `${dateString.split('-').join('')}${todayCount + 1}`;
        const object = await this.databaseRepository.findOne(postData.object);
        const createDto = { ...postData, number, object };
        const document = await this.documentsRepository.create(createDto);
        await this.logsRepository.create({ action: 'создание договора', document: document });
        return document;
    }
    async createLogs(id, postData) {
        const document = await this.documentsRepository.findOneByWhere({ id });
        const responsible = await this.usersRepository.findOne(postData.responsible);
        const logs = { ...postData, responsible, document };
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
        const documents = await this.documentsRepository.findOneByWhere({ id });
        return logs.map((log) => {
            return {
                ...log,
                responsible: {
                    id: log.responsible?.id,
                    name: log.responsible?.name,
                },
                object: documents.object,
            };
        });
    }
    async findAll() {
        return await this.documentsRepository.findAll();
    }
    findOne(id) {
        return this.documentsRepository.findOne(id);
    }
    async update(id, updateDto) {
        return await this.documentsRepository.update(id, updateDto);
    }
    async remove(id) {
        const contract = await this.documentsRepository.findOne(id);
        if (contract && contract.logs.length > 0) {
            const logIds = contract.logs.map(log => log.id);
            await this.logsRepository.remove(logIds);
        }
        await this.documentsRepository.update(id, { object: undefined, logs: [] });
        return this.documentsRepository.remove(id);
    }
};
exports.DocumentsService = DocumentsService;
exports.DocumentsService = DocumentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [documents_repository_1.DocumentsRepository,
        affairs_repository_1.AffairsRepository,
        database_entity_repository_1.DatabaseRepository,
        documents_logs_repository_1.DocumentsLogsRepository,
        users_repository_1.UsersRepository])
], DocumentsService);
//# sourceMappingURL=documents.service.js.map