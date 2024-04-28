import { Repository } from 'typeorm';
import { DatabaseEntity } from '../entities/database.entity';
export declare class DatabaseRepository {
    private databaseRepository;
    constructor(databaseRepository: Repository<DatabaseEntity>);
    create(createDto: Partial<DatabaseEntity>): Promise<DatabaseEntity>;
    findAll(): Promise<DatabaseEntity[]>;
    findAffairs(id: any): Promise<DatabaseEntity[]>;
    findOne(id: number): Promise<DatabaseEntity>;
    update(id: number, updateDto: Partial<DatabaseEntity>): Promise<DatabaseEntity>;
    remove(id: number): Promise<void>;
}
