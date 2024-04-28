import { FindOptionsWhere, Repository } from 'typeorm';
import { AccountsEntity } from "../entities/accounts.entity";
import { AffairsLogsRepository } from "./affairs-logs.repository";
export declare class AccountsRepository {
    private readonly accountsRepository;
    private readonly affairsLogs;
    constructor(accountsRepository: Repository<AccountsEntity>, affairsLogs: AffairsLogsRepository);
    create(createDto: Partial<AccountsEntity>): Promise<AccountsEntity>;
    getCountToday(dateString: string): Promise<number>;
    findAll(): Promise<AccountsEntity[]>;
    findOne(id: number): Promise<AccountsEntity>;
    findOneByWhere(where: FindOptionsWhere<AccountsEntity>): Promise<AccountsEntity>;
    findByWhere(where: FindOptionsWhere<AccountsEntity>): Promise<AccountsEntity[]>;
    update(id: number, updateDto: Partial<AccountsEntity>): Promise<AccountsEntity>;
    remove(id: number): Promise<void>;
}
