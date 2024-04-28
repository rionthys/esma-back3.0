import { UsersRepository } from "../../shared/database/repositories/users.repository";
import { UserDto } from "./user.dto";
import { ContractsLogsRepository } from "../../shared/database/repositories/contracts-logs.repository";
import { DocumentsLogsRepository } from "../../shared/database/repositories/documents-logs.repository";
import { AffairsLogsRepository } from "../../shared/database/repositories/affairs-logs.repository";
import { AffairsRepository } from "../../shared/database/repositories/affairs.repository";
export declare class AuthService {
    private readonly users;
    private readonly affairs;
    private readonly affairsLogs;
    private readonly documentsLogs;
    private readonly contractsLogs;
    constructor(users: UsersRepository, affairs: AffairsRepository, affairsLogs: AffairsLogsRepository, documentsLogs: DocumentsLogsRepository, contractsLogs: ContractsLogsRepository);
    registration(postData: UserDto): Promise<{
        auth: boolean;
        name: string;
        rights: object;
    }>;
    authentication(postData: any): Promise<{
        auth: boolean;
        name: string;
        rights: object;
        id: number;
    }>;
    get(): Promise<{
        name: string;
        id: number;
        rights: object;
    }[]>;
    setRights(id: number, data: any): Promise<import("../../shared/database/entities/users.entity").UsersEntity>;
    remove(id: number): Promise<void>;
}
