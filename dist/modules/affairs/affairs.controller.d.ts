import { AffairsService } from './affairs.service';
import { AffairsEntity } from '../../shared/database/entities/affairs.entity';
import { CreateAffairsDto } from './createAffairsDto';
import { CreateLogsDto } from "./create-logs.dto";
export declare class AffairsController {
    private readonly affairsService;
    constructor(affairsService: AffairsService);
    create(createDto: CreateAffairsDto): Promise<AffairsEntity>;
    createLogs(id: string, createDto: CreateLogsDto): Promise<{
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
        logs: import("../../shared/database/entities/affairs-logs.entity").AffairsLogsEntity[];
        mails: import("../../shared/database/entities/mails-registers.entity").MailsRegistersEntity[];
        accounts: import("../../shared/database/entities/accounts.entity").AccountsEntity[];
        created_at: Date;
        updated_at: Date;
    }[]>;
    findLogs(id: string): Promise<{
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
    close(id: string, data: any): Promise<AffairsEntity>;
    findOne(id: string): Promise<AffairsEntity>;
    getByObjectId(id: string): Promise<AffairsEntity[]>;
    getByContractId(id: string): Promise<any[] | AffairsEntity[]>;
    getByDocumentId(id: string): Promise<any[] | AffairsEntity[]>;
    update(id: string, updateDto: any): Promise<AffairsEntity>;
    remove(id: string): Promise<void>;
}
