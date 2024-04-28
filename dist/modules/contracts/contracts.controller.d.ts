import { ContractsService } from './contracts.service';
import { CreateContractsDto } from './createContractsDto';
import { CreateLogsDto } from "./create-logs.dto";
import { ContractsEntity } from "../../shared/database/entities/contracts.entity";
export declare class ContractsController {
    private readonly contractsService;
    constructor(contractsService: ContractsService);
    create(createDto: CreateContractsDto): Promise<ContractsEntity>;
    createLogs(id: string, createDto: CreateLogsDto): Promise<{
        responsible: {
            id: number;
            name: string;
        };
        id: number;
        type: string;
        document: string[];
        action: string;
        contracts: ContractsEntity;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(): Promise<ContractsEntity[]>;
    findOne(id: number): Promise<ContractsEntity>;
    findLogs(id: string): Promise<{
        responsible: {
            id: number;
            name: string;
        };
        object: import("../../shared/database/entities/database.entity").DatabaseEntity;
        id: number;
        type: string;
        document: string[];
        action: string;
        contracts: ContractsEntity;
        created_at: Date;
        updated_at: Date;
    }[]>;
    update(id: string, updateDto: any): Promise<ContractsEntity>;
    remove(id: string): Promise<void>;
}
