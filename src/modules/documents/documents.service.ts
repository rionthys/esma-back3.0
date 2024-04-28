import {Injectable} from '@nestjs/common';
import {CreateLogsDto} from "./create-logs.dto";
import {UsersRepository} from "../../shared/database/repositories/users.repository";
import {AffairsRepository} from "../../shared/database/repositories/affairs.repository";
import {DocumentsEntity} from "../../shared/database/entities/documents.entity";
import {DocumentsRepository} from "../../shared/database/repositories/documents.repository";
import {DocumentsLogsEntity} from "../../shared/database/entities/documents-logs.entity";
import {DocumentsLogsRepository} from "../../shared/database/repositories/documents-logs.repository";
import {DatabaseRepository} from "../../shared/database/repositories/database-entity.repository";
import {ClientsRepository} from "../../shared/database/repositories/clients.repository";

@Injectable()
export class DocumentsService {
    constructor(
        private documentsRepository: DocumentsRepository,
        private affairsRepository: AffairsRepository,
        private databaseRepository: DatabaseRepository,
        private logsRepository: DocumentsLogsRepository,
        private usersRepository: UsersRepository,
        private clientRepository: ClientsRepository,
    ) {
    }

    async create(postData: any): Promise<DocumentsEntity> {
        const today = new Date();
        const dateString = today.toISOString().split('T')[0];
        const todayCount = await this.documentsRepository.getCountToday(dateString);

        const number = `${dateString.split('-').join('')}${todayCount + 1}`;

        const object = await this.databaseRepository.findOne(postData.object);

        const client = await this.clientRepository.findOne(postData.client);

        const createDto: Partial<DocumentsEntity> = {...postData, number, object, client};

        const document = await this.documentsRepository.create(createDto);
        await this.logsRepository.create({action: 'создание договора', document: document});
        return document;
    }

    async createLogs(id: number, postData: CreateLogsDto) {
        const document = await this.documentsRepository.findOneByWhere({id});
        const responsible = await this.usersRepository.findOne(postData.responsible);
        const logs: Partial<DocumentsLogsEntity> = {...postData, responsible, document};
        const log = await this.logsRepository.create(logs);
        return {
            ...log,
            responsible: {
                id: log.responsible?.id,
                name: log.responsible?.name,
            }
        }
    }

    async findLogs(id: number) {
        const logs = await this.logsRepository.findByContractsId(id);
        const documents = await this.documentsRepository.findOneByWhere({id});
        return logs.map((log) => {
            return {
                ...log,
                responsible: {
                    id: log.responsible?.id,
                    name: log.responsible?.name,
                },
                object: documents.object,
            }
        });
    }

    async findAll() {
        return await this.documentsRepository.findAll();
    }

    findOne(id: number) {
        return this.documentsRepository.findOne(id);
    }

    async update(id: number, updateDto: Partial<DocumentsEntity>): Promise<DocumentsEntity> {
        return await this.documentsRepository.update(id, updateDto);
    }

    async remove(id: number): Promise<void> {
        const contract = await this.documentsRepository.findOne(id);
        if (contract && contract.logs.length > 0) {
            const logIds = contract.logs.map(log => log.id);
            await this.logsRepository.remove(logIds);
        }
        await this.documentsRepository.update(id, {object: undefined, logs: []});
        return this.documentsRepository.remove(id);
    }
}
