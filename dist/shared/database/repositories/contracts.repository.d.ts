import { FindOptionsWhere, Repository } from 'typeorm';
import { ContractsEntity } from "../entities/contracts.entity";
export declare class ContractsRepository {
    private contractsRepository;
    constructor(contractsRepository: Repository<ContractsEntity>);
    create(createDto: Partial<ContractsEntity>): Promise<ContractsEntity>;
    getCountToday(dateString: string): Promise<number>;
    findAll(): Promise<ContractsEntity[]>;
    findOne(id: number): Promise<ContractsEntity>;
    findOneByWhere(where: FindOptionsWhere<ContractsEntity>): Promise<ContractsEntity>;
    update(id: number, updateDto: Partial<ContractsEntity>): Promise<ContractsEntity>;
    remove(id: number): Promise<void>;
}
