import { AccountsService } from "./accounts.service";
import { CreateAffairsDto } from "../affairs/createAffairsDto";
import { AccountsEntity } from "../../shared/database/entities/accounts.entity";
export declare class AccountsController {
    private readonly accountsService;
    constructor(accountsService: AccountsService);
    findAll(): Promise<AccountsEntity[]>;
    create(createDto: CreateAffairsDto): Promise<AccountsEntity>;
    close(id: string): Promise<AccountsEntity>;
    findOne(id: string): Promise<AccountsEntity>;
    update(id: string, updateDto: any): Promise<AccountsEntity>;
    remove(id: string): Promise<void>;
}
