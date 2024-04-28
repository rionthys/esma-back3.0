import { DatabaseEntity } from "./database.entity";
import { ContractsLogsEntity } from "./contract-logs.entity";
import { ClientsEntity } from "./clients.entity";
export declare class ContractsEntity {
    id: number;
    client: ClientsEntity;
    number: string;
    status: string;
    ds: string;
    deadline: Date;
    object: DatabaseEntity;
    logs: ContractsLogsEntity[];
    created_at: Date;
    updated_at: Date;
}
