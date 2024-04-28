import { AffairsRepository } from "../../shared/database/repositories/affairs.repository";
import { AccountsRepository } from "../../shared/database/repositories/accounts.repository";
export declare class DeadlinesService {
    private readonly affairsRepository;
    private readonly accountsRepository;
    constructor(affairsRepository: AffairsRepository, accountsRepository: AccountsRepository);
    findAll(): Promise<{
        accounts: import("../../shared/database/entities/accounts.entity").AccountsEntity[];
        actions: {
            client: import("../../shared/database/entities/clients.entity").ClientsEntity;
            id: number;
            name: string;
            view: string;
            number: string;
            status: string;
            attention: string;
            deadline: Date;
            subscriber: import("../../shared/database/entities/users.entity").UsersEntity;
            responsible: import("../../shared/database/entities/users.entity").UsersEntity;
            object: import("../../shared/database/entities/database.entity").DatabaseEntity;
            logs: import("../../shared/database/entities/affairs-logs.entity").AffairsLogsEntity[];
            mails: import("../../shared/database/entities/mails-registers.entity").MailsRegistersEntity[];
            accounts: import("../../shared/database/entities/accounts.entity").AccountsEntity[];
            created_at: Date;
            updated_at: Date;
        }[];
    }>;
}
