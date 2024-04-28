import {Injectable} from '@nestjs/common';
import {CreateLogsDto} from "./create-logs.dto";
import {UsersRepository} from "../../shared/database/repositories/users.repository";
import {ContractsRepository} from "../../shared/database/repositories/contracts.repository";
import {ContractsLogsRepository} from "../../shared/database/repositories/contracts-logs.repository";
import {ContractsEntity} from "../../shared/database/entities/contracts.entity";
import {ContractsLogsEntity} from "../../shared/database/entities/contract-logs.entity";
import {AffairsRepository} from "../../shared/database/repositories/affairs.repository";
import {DsRepository} from "../../shared/database/repositories/ds.repository";

@Injectable()
export class ContractsService {
    constructor(
        private contractsRepository: ContractsRepository,
        private affairsRepository: AffairsRepository,
        private logsRepository: ContractsLogsRepository,
        private usersRepository: UsersRepository,
        private dsRepository: DsRepository
    ) {
    }

    async create(postData: any): Promise<ContractsEntity> {
        let ds = null;
        console.log(postData.ds)
        if (postData.ds && postData.ds !== 'нет') {
            ds = await this.dsRepository.findOne(postData.ds);
        }
        const today = new Date();
        const dateString = today.toISOString().split('T')[0];
        const todayCount = await this.contractsRepository.getCountToday(dateString);

        const number = `${dateString.split('-').join('')}${todayCount + 1}`;

        const createDto: Partial<ContractsEntity> = {...postData, number, ds: [ds]};
        const contract = await this.contractsRepository.create(createDto);
        if (postData.ds && postData.ds !== 'нет') {
            await this.dsRepository.update(ds?.id, contract)
        }
        await this.logsRepository.create({action: 'создание договора', contracts: contract});
        return contract;
    }

    async createLogs(id: number, postData: CreateLogsDto) {
        const contracts = await this.contractsRepository.findOneByWhere({id});
        const responsible = await this.usersRepository.findOne(postData.responsible);
        const logs: Partial<ContractsLogsEntity> = {...postData, responsible, contracts};
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
        const contracts = await this.contractsRepository.findOneByWhere({id});
        return logs.map((log) => {
            return {
                ...log,
                responsible: {
                    id: log.responsible?.id,
                    name: log.responsible?.name,
                },
                object: contracts.object,
            }
        });
    }

    async findAll() {
        const contracts = await this.contractsRepository.findAll();
        return contracts.map((contract) => {
            return {
                ...contract,
                client: contract?.object?.client
            }
        })
    }

    findOne(id: number) {
        return this.contractsRepository.findOne(id);
    }

    async update(id: number, updateDto: any): Promise<ContractsEntity> {
        if (updateDto.ds) {
            const contract = await this.contractsRepository.findOne(id);
            const ds = await this.dsRepository.create(updateDto.ds);
            updateDto.ds = contract.ds && contract.ds.length > 0 ? [...contract.ds] : [];
            updateDto.ds.push(ds)
        }
        return await this.contractsRepository.update(id, updateDto);
    }

    async remove(id: number): Promise<void> {
        const contract = await this.contractsRepository.findOne(id);
        if (contract && contract.logs.length > 0) {
            const logIds = contract.logs.map(log => log.id);
            await this.logsRepository.delete(logIds);
        }
        await this.contractsRepository.update(id, {object: undefined, logs: []});
        return this.contractsRepository.remove(id);
    }
}
