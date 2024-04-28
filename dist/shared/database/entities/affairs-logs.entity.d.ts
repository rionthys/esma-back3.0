import { AffairsEntity } from "./affairs.entity";
import { UsersEntity } from "./users.entity";
export declare class AffairsLogsEntity {
    id: number;
    type: string;
    action: string;
    documents: string[];
    responsible: UsersEntity;
    affairs: AffairsEntity;
    created_at: Date;
    updated_at: Date;
}
