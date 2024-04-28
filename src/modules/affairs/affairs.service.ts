import {Injectable} from '@nestjs/common';
import {AffairsEntity} from '../../shared/database/entities/affairs.entity';
import {AffairsRepository} from "../../shared/database/repositories/affairs.repository";
import {AffairsLogsRepository} from "../../shared/database/repositories/affairs-logs.repository";
import {CreateLogsDto} from "./create-logs.dto";
import {UsersRepository} from "../../shared/database/repositories/users.repository";
import {AffairsLogsEntity} from "../../shared/database/entities/affairs-logs.entity";
import {ContractsRepository} from "../../shared/database/repositories/contracts.repository";
import {DocumentsRepository} from "../../shared/database/repositories/documents.repository";

@Injectable()
export class AffairsService {
    constructor(
        private affairsRepository: AffairsRepository,
        private contractsRepository: ContractsRepository,
        private documentsRepository: DocumentsRepository,
        private logsRepository: AffairsLogsRepository,
        private usersRepository: UsersRepository,
    ) {
    }

    async create(postData: any): Promise<AffairsEntity> {
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

        const createDto: Partial<AffairsEntity> = {...postData, number};

        const affair = await this.affairsRepository.create(createDto);
        await this.logsRepository.create({action: 'создание дела', affairs: affair});
        return affair;
    }

    async createLogs(id: number, postData: CreateLogsDto) {
        const affairs = await this.affairsRepository.findOneByWhere({id});
        const responsible = await this.usersRepository.findOne(postData.responsible);
        const logs: Partial<AffairsLogsEntity> = {...postData, responsible, affairs};
        const log = await this.logsRepository.create(logs);
        return {
            ...log,
            responsible: {
                id: log.responsible.id,
                name: log.responsible.name,
            }
        }
    }

    async findLogs(id: number) {
        const logs = await this.logsRepository.findByAffairsId(id);
        return logs.map((log) => {
            return {
                ...log,
                responsible: {
                    id: log.responsible?.id,
                    name: log.responsible?.name,
                }
            }
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
            }
        });
    }

    findOne(id: number): Promise<AffairsEntity> {
        return this.affairsRepository.findOne(id);
    }

    async getByObjectId(id: number) {
        return this.affairsRepository.findByObjectId(id);
    }

    async getByContractId(id: number) {
        const contract = await this.contractsRepository.findOneByWhere({id});
        return contract.object?.id ?
            this.affairsRepository.findByWhere({object: {id: contract.object.id}})
            : [];
    }

    async getByDocumentId(id: number) {
        const document = await this.documentsRepository.findOneByWhere({id});
        return document.object?.id ?
            this.affairsRepository.findByWhere({object: {id: document.object.id}})
            : [];
    }

    async update(id: number, updateDto: any): Promise<AffairsEntity> {
        const affair = await this.affairsRepository.findOne(id);
        updateDto.subscriber = typeof updateDto.subscriber === 'object' ? updateDto.subscriber.id : updateDto.subscriber;
        updateDto.responsible = typeof updateDto.responsible === 'object' ? updateDto.responsible.id : updateDto.responsible;
        updateDto.logs = undefined;
        const update = await this.affairsRepository.update(id, updateDto);
        console.log('affair', affair)
        if (affair) {
            const messages = [];
            Object.keys(updateDto).forEach(key => {
                if (updateDto[key] && updateDto[key] !== affair[key] && affair[key] && key !== 'user') {
                    console.log(affair[key])
                    console.log(key)
                    const readableKey = this.getReadableFieldName(key);
                    let message = '';
                    if (affair[key].number) {
                        message = typeof affair[key] !== 'object' ? `Поле '${readableKey}' было обновлено с '${affair[key] ? affair[key] : 'пустой строки'}' на '${updateDto[key]}'`
                            : `Был прикреплен новый объект с номером: ${affair[key].number}`;
                    }
                    if (key === 'responsible') {
                        message = `был изменен исполнитель с '${affair[key] ? affair[key].name : 'пустой строки'}' на '${update[key].name}'`
                    }
                    if (message !== '' && affair[key] && update[key] && typeof affair[key] === 'object' && affair[key]?.id !== update[key]?.id) {
                        messages.push(message)
                    } else if (message !== '' && affair[key] && typeof affair[key] !== 'object') {
                        messages.push(message)
                    }
                }
            });
            console.log(messages)
            if (messages.length > 0) {
                console.log(updateDto?.user)
                const log = await this.logsRepository.create({
                    action: messages.join('\n'),
                    affairs: affair,
                    responsible: updateDto?.user
                });
            }
        }
        return update;
    }

    getReadableFieldName(key: string): string {
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

    async remove(id: number): Promise<void> {
        const affair = await this.affairsRepository.findOne(id);
        if (affair && affair.logs.length > 0) {
            const logIds = affair.logs.map(log => log.id);
            await this.logsRepository.delete(logIds);
        }
        await this.affairsRepository.update(id, {mails: [], logs: []});
        return this.affairsRepository.remove(id);
    }
}
