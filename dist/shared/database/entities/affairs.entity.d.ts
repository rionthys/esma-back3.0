import { DatabaseEntity } from "./database.entity";
import { UsersEntity } from "./users.entity";
import { AffairsLogsEntity } from "./affairs-logs.entity";
import { MailsRegistersEntity } from "./mails-registers.entity";
import { AccountsEntity } from "./accounts.entity";
export declare class AffairsEntity {
    id: number;
    name: string;
    view: string;
    number: string;
    status: string;
    attention: string;
    deadline: Date;
    subscriber: UsersEntity;
    responsible: UsersEntity;
    object: DatabaseEntity;
    logs: AffairsLogsEntity[];
    mails: MailsRegistersEntity[];
    accounts: AccountsEntity[];
    created_at: Date;
    updated_at: Date;
}
