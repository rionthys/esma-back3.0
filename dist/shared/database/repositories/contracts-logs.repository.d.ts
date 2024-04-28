import { FindOptionsWhere, Repository } from 'typeorm';
import { ContractsLogsEntity } from "../entities/contract-logs.entity";
export declare class ContractsLogsRepository {
    private contractsLogsRepository;
    constructor(contractsLogsRepository: Repository<ContractsLogsEntity>);
    create(createDto: Partial<ContractsLogsEntity>): Promise<ContractsLogsEntity>;
    findAll(): Promise<ContractsLogsEntity[]>;
    findByContractsId(id: number): Promise<ContractsLogsEntity[]>;
    findOne(id: number): Promise<ContractsLogsEntity>;
    countByContractsIds(ids: number[]): Promise<number>;
    countByContractsIdsAndType(ids: number[], type: string): Promise<number>;
    findOneByWhere(where: FindOptionsWhere<ContractsLogsEntity>): Promise<ContractsLogsEntity>;
    findByWhere(where: FindOptionsWhere<ContractsLogsEntity>): Promise<ContractsLogsEntity[]>;
    update(id: number, updateDto: Partial<ContractsLogsEntity>): Promise<ContractsLogsEntity>;
    bulkUpdateResponsible(oldResponsibleId: number, newResponsibleId: number | null): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    delete(ids: number[]): Promise<import("typeorm").DeleteResult>;
}
