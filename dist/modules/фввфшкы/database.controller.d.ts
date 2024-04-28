import { DatabaseService } from './database.service';
import { DatabaseEntity } from '../../shared/database/entities/database.entity';
import { CreateObjectDTO } from './createObjectDto';
export declare class DatabaseController {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createDto: CreateObjectDTO): Promise<DatabaseEntity>;
    findAll(): Promise<DatabaseEntity[]>;
    findOne(id: string): Promise<DatabaseEntity>;
    update(id: string, updateDto: any): Promise<DatabaseEntity>;
    remove(id: string): Promise<void>;
}
