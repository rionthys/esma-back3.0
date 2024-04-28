import { DatabaseEntity } from "./database.entity";
import { DocumentsLogsEntity } from "./documents-logs.entity";
import { ClientsEntity } from "./clients.entity";
export declare class DocumentsEntity {
    id: number;
    number: string;
    status: string;
    client: ClientsEntity;
    lang: string;
    document: string;
    deadline: string;
    object: DatabaseEntity;
    logs: DocumentsLogsEntity[];
    created_at: Date;
    updated_at: Date;
}
