import { DocumentsEntity } from "./documents.entity";
import { UsersEntity } from "./users.entity";
export declare class DocumentsLogsEntity {
    id: number;
    type: string;
    action: string;
    path: string;
    responsible: UsersEntity;
    document: DocumentsEntity;
    created_at: Date;
    updated_at: Date;
}
