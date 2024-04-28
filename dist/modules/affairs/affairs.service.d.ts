import { AffairsEntity } from '../../shared/database/entities/affairs.entity';
import { AffairsRepository } from "../../shared/database/repositories/affairs.repository";
import { AffairsLogsRepository } from "../../shared/database/repositories/affairs-logs.repository";
import { CreateLogsDto } from "./create-logs.dto";
import { UsersRepository } from "../../shared/database/repositories/users.repository";
import { AffairsLogsEntity } from "../../shared/database/entities/affairs-logs.entity";
import { ContractsRepository } from "../../shared/database/repositories/contracts.repository";
import { DocumentsRepository } from "../../shared/database/repositories/documents.repository";
export declare class AffairsService {
    private affairsRepository;
    private contractsRepository;
    private documentsRepository;
    private logsRepository;
    private usersRepository;
    constructor(affairsRepository: AffairsRepository, contractsRepository: ContractsRepository, documentsRepository: DocumentsRepository, logsRepository: AffairsLogsRepository, usersRepository: UsersRepository);
    create(postData: any): Promise<AffairsEntity>;
    createLogs(id: number, postData: CreateLogsDto): Promise<{
        responsible: {
            id: number;
            name: string;
        };
        id: number;
        type: string;
        action: string;
        documents: string[];
        affairs: AffairsEntity;
        created_at: Date;
        updated_at: Date;
    }>;
    findLogs(id: number): Promise<{
        responsible: {
            id: number;
            name: string;
        };
        id: number;
        type: string;
        action: string;
        documents: string[];
        affairs: AffairsEntity;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findAll(): Promise<{
        subscriber: {
            id: number;
            name: string;
        };
        responsible: {
            id: number;
            name: string;
        };
        client: {};
        id: number;
        name: string;
        view: string;
        number: string;
        status: string;
        attention: string;
        deadline: Date;
        object: import("../../shared/database/entities/database.entity").DatabaseEntity;
        logs: AffairsLogsEntity[];
        mails: import("../../shared/database/entities/mails-registers.entity").MailsRegistersEntity[];
        accounts: import("../../shared/database/entities/accounts.entity").AccountsEntity[];
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: number): Promise<AffairsEntity>;
    getByObjectId(id: number): Promise<AffairsEntity[]>;
    getByContractId(id: number): Promise<any[] | AffairsEntity[]>;
    getByDocumentId(id: number): Promise<any[] | AffairsEntity[]>;
    update(id: number, updateDto: any): Promise<AffairsEntity>;
    getReadableFieldName(key: string): string;
    remove(id: number): Promise<void>;
}
