import { DatabaseRepository } from '../../shared/database/repositories/database-entity.repository';
import { DatabaseEntity } from '../../shared/database/entities/database.entity';
export declare class DatabaseService {
    private databaseRepository;
    constructor(databaseRepository: DatabaseRepository);
    create(postData: any): Promise<DatabaseEntity>;
    findAll(): Promise<DatabaseEntity[]>;
    findOne(id: number): Promise<DatabaseEntity>;
    update(id: number, updateDto: Partial<DatabaseEntity>): Promise<DatabaseEntity>;
    remove(id: number): Promise<void>;
}
