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
exports.AffairsService = void 0;
const common_1 = require("@nestjs/common");
const affairs_repository_1 = require("../../shared/database/repositories/affairs.repository");
const affairs_logs_repository_1 = require("../../shared/database/repositories/affairs-logs.repository");
const users_repository_1 = require("../../shared/database/repositories/users.repository");
const contracts_repository_1 = require("../../shared/database/repositories/contracts.repository");
const documents_repository_1 = require("../../shared/database/repositories/documents.repository");
let AffairsService = class AffairsService {
    constructor(affairsRepository, contractsRepository, documentsRepository, logsRepository, usersRepository) {
        this.affairsRepository = affairsRepository;
        this.contractsRepository = contractsRepository;
        this.documentsRepository = documentsRepository;
        this.logsRepository = logsRepository;
        this.usersRepository = usersRepository;
    }
    async create(postData) {
        const today = new Date();
        const dateString = today.toISOString().split('T')[0];
        const todayCount = await this.affairsRepository.getCountToday(dateString);
        const letterMap = {
            t: 'делопроизводство по товарному знаку',
            i: 'делопроизводство по изобретению',
            d: 'делопроизводство по промышленному образцу',
            u: 'делопроизводство по полезной модели',
            lc: 'письмо-согласие',
            lt: 'разбирательство в суде',
            ab: 'апелляционный совет',
            ro: 'преодоление отказа в НИИС',
            a: 'регистрация уступки',
            l: 'регистрация лицензии',
            f: 'регистрация франшизы',
            e: 'делопроизводство в ЕАПВ',
            c: 'авторское право',
            y: 'разработка документов',
            r: 'продление срока действия',
            ch: 'внесение изменений',
            rch: 'продление и изменение',
            m: 'разное (все, что не относится к другим категориям)'
        };
        const letter = letterMap[postData.type] ? postData.type : 'm';
        const number = `${dateString.split('-').join('')}${todayCount + 1}${letter}`;
        const createDto = { ...postData, number };
        const affair = await this.affairsRepository.create(createDto);
        await this.logsRepository.create({ action: 'создание дела', affairs: affair });
        return affair;
    }
    async createLogs(id, postData) {
        const affairs = await this.affairsRepository.findOneByWhere({ id });
        const responsible = await this.usersRepository.findOne(postData.responsible);
        const logs = { ...postData, responsible, affairs };
        const log = await this.logsRepository.create(logs);
        return {
            ...log,
            responsible: {
                id: log.responsible.id,
                name: log.responsible.name,
            }
        };
    }
    async findLogs(id) {
        const logs = await this.logsRepository.findByAffairsId(id);
        return logs.map((log) => {
            return {
                ...log,
                responsible: {
                    id: log.responsible?.id,
                    name: log.responsible?.name,
                }
            };
        });
    }
    async findAll() {
        const affairs = await this.affairsRepository.findAll();
        return affairs.map((affair) => {
            return {
                ...affair,
                subscriber: {
                    id: affair?.subscriber?.id,
                    name: affair?.subscriber?.name,
                },
                responsible: {
                    id: affair?.responsible?.id,
                    name: affair?.responsible?.name,
                },
                client: affair?.object?.client || {}
            };
        });
    }
    findOne(id) {
        return this.affairsRepository.findOne(id);
    }
    async getByObjectId(id) {
        return this.affairsRepository.findByObjectId(id);
    }
    async getByContractId(id) {
        const contract = await this.contractsRepository.findOneByWhere({ id });
        return contract.object?.id ?
            this.affairsRepository.findByWhere({ object: { id: contract.object.id } })
            : [];
    }
    async getByDocumentId(id) {
        const document = await this.documentsRepository.findOneByWhere({ id });
        return document.object?.id ?
            this.affairsRepository.findByWhere({ object: { id: document.object.id } })
            : [];
    }
    async update(id, updateDto) {
        const affair = await this.affairsRepository.findOne(id);
        const update = await this.affairsRepository.update(id, updateDto);
        if (affair) {
            const messages = [];
            Object.keys(updateDto).forEach(key => {
                if (updateDto[key] !== affair[key] && key !== 'user') {
                    const readableKey = this.getReadableFieldName(key);
                    let message = typeof affair[key] !== 'object' ? `Поле '${readableKey}' было обновлено с '${affair[key] ? affair[key] : 'пустой строки'}' на '${updateDto[key]}'`
                        : `Был прикреплен новый объект с номером: ${affair[key].number}`;
                    if (key === 'responsible') {
                        message = `был изменен исполнитель с '${affair[key] ? affair[key].name : 'пустой строки'}' на '${update[key].name}'`;
                    }
                    console.log(affair[key]);
                    console.log(update[key]);
                    if (typeof affair[key] === 'object' && affair[key]?.id !== update[key]?.id) {
                        messages.push(message);
                    }
                    else if (typeof affair[key] !== 'object') {
                        messages.push(message);
                    }
                }
            });
            if (messages.length > 0) {
                const log = await this.logsRepository.create({
                    action: messages.join('\n'),
                    affairs: affair,
                    responsible: updateDto.user
                });
            }
        }
        return update;
    }
    getReadableFieldName(key) {
        const fieldNames = {
            name: 'Название',
            view: 'Вид',
            number: 'Номер',
            status: 'Статус',
            attention: 'Вниманию',
            deadline: 'Сроки',
            subscriber: 'Подписант',
            responsible: 'Исполнитель',
            object: 'Объект',
        };
        return fieldNames[key] || key;
    }
    async remove(id) {
        const affair = await this.affairsRepository.findOne(id);
        if (affair && affair.logs.length > 0) {
            const logIds = affair.logs.map(log => log.id);
            await this.logsRepository.delete(logIds);
        }
        await this.affairsRepository.update(id, { mails: [], logs: [] });
        return this.affairsRepository.remove(id);
    }
};
exports.AffairsService = AffairsService;
exports.AffairsService = AffairsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [affairs_repository_1.AffairsRepository,
        contracts_repository_1.ContractsRepository,
        documents_repository_1.DocumentsRepository,
        affairs_logs_repository_1.AffairsLogsRepository,
        users_repository_1.UsersRepository])
], AffairsService);
//# sourceMappingURL=affairs.service.js.map