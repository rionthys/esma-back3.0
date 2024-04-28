import { CreateLogsDto } from "./create-logs.dto";
import { UsersRepository } from "../../shared/database/repositories/users.repository";
import { AffairsRepository } from "../../shared/database/repositories/affairs.repository";
import { DocumentsEntity } from "../../shared/database/entities/documents.entity";
import { DocumentsRepository } from "../../shared/database/repositories/documents.repository";
import { DocumentsLogsRepository } from "../../shared/database/repositories/documents-logs.repository";
import { DatabaseRepository } from "../../shared/database/repositories/database-entity.repository";
export declare class DocumentsService {
    private documentsRepository;
    private affairsRepository;
    private databaseRepository;
    private logsRepository;
    private usersRepository;
    constructor(documentsRepository: DocumentsRepository, affairsRepository: AffairsRepository, databaseRepository: DatabaseRepository, logsRepository: DocumentsLogsRepository, usersRepository: UsersRepository);
    create(postData: any): Promise<DocumentsEntity>;
    createLogs(id: number, postData: CreateLogsDto): Promise<{
        responsible: {
            id: number;
            name: string;
        };
        id: number;
        type: string;
        action: string;
        path: string;
        document: DocumentsEntity;
        created_at: Date;
        updated_at: Date;
    }>;
    findLogs(id: number): Promise<{
        responsible: {
            id: number;
            name: string;
        };
        object: import("../../shared/database/entities/database.entity").DatabaseEntity;
        id: number;
        type: string;
        action: string;
        path: string;
        document: DocumentsEntity;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findAll(): Promise<DocumentsEntity[]>;
    findOne(id: number): Promise<DocumentsEntity>;
    update(id: number, updateDto: Partial<DocumentsEntity>): Promise<DocumentsEntity>;
    remove(id: number): Promise<void>;
}
