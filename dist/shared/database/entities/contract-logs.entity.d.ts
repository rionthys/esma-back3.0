import { ContractsEntity } from "./contracts.entity";
import { UsersEntity } from "./users.entity";
export declare class ContractsLogsEntity {
    id: number;
    type: string;
    document: string[];
    action: string;
    contracts: ContractsEntity;
    responsible: UsersEntity;
    created_at: Date;
    updated_at: Date;
}
