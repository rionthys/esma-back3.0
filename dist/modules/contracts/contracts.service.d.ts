import { CreateLogsDto } from "./create-logs.dto";
import { UsersRepository } from "../../shared/database/repositories/users.repository";
import { ContractsRepository } from "../../shared/database/repositories/contracts.repository";
import { ContractsLogsRepository } from "../../shared/database/repositories/contracts-logs.repository";
import { ContractsEntity } from "../../shared/database/entities/contracts.entity";
import { AffairsRepository } from "../../shared/database/repositories/affairs.repository";
export declare class ContractsService {
    private contractsRepository;
    private affairsRepository;
    private logsRepository;
    private usersRepository;
    constructor(contractsRepository: ContractsRepository, affairsRepository: AffairsRepository, logsRepository: ContractsLogsRepository, usersRepository: UsersRepository);
    create(postData: any): Promise<ContractsEntity>;
    createLogs(id: number, postData: CreateLogsDto): Promise<{
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
    findLogs(id: number): Promise<{
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
    findAll(): Promise<ContractsEntity[]>;
    findOne(id: number): Promise<ContractsEntity>;
    update(id: number, updateDto: Partial<ContractsEntity>): Promise<ContractsEntity>;
    remove(id: number): Promise<void>;
}
