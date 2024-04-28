import { CreateLogsDto } from "./create-logs.dto";
import { DocumentsService } from "./documents.service";
import { CreateContractsDto } from "../contracts/createContractsDto";
import { DocumentsEntity } from "../../shared/database/entities/documents.entity";
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    create(createDto: CreateContractsDto): Promise<DocumentsEntity>;
    createLogs(id: string, createDto: CreateLogsDto): Promise<{
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
    findAll(): Promise<DocumentsEntity[]>;
    findOne(id: string): Promise<DocumentsEntity>;
    findLogs(id: string): Promise<{
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
    update(id: string, updateDto: any): Promise<DocumentsEntity>;
    remove(id: string): Promise<void>;
}
