import { AccountsRepository } from "../../shared/database/repositories/accounts.repository";
import { AccountsEntity } from "../../shared/database/entities/accounts.entity";
import { PriceRepository } from "../../shared/database/repositories/price.repository";
export declare class AccountsService {
    private readonly accountsRepository;
    private readonly priceRepository;
    constructor(accountsRepository: AccountsRepository, priceRepository: PriceRepository);
    create(postData: any): Promise<AccountsEntity>;
    findAll(): Promise<AccountsEntity[]>;
    findOne(id: number): Promise<AccountsEntity>;
    update(id: number, updateDto: Partial<AccountsEntity>): Promise<AccountsEntity>;
    remove(id: number): Promise<void>;
}
