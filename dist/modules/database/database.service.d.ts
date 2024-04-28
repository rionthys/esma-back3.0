import { DatabaseRepository } from '../../shared/database/repositories/database-entity.repository';
import { DatabaseEntity } from '../../shared/database/entities/database.entity';
import { UpdateObjectDto } from "./updateObjectDto";
import { AffairsRepository } from "../../shared/database/repositories/affairs.repository";
export declare class DatabaseService {
    private databaseRepository;
    private affairsRepository;
    constructor(databaseRepository: DatabaseRepository, affairsRepository: AffairsRepository);
    create(postData: any): Promise<DatabaseEntity>;
    findAll(): Promise<DatabaseEntity[]>;
    findOne(id: number): Promise<DatabaseEntity>;
    update(id: number, updateDto: Partial<DatabaseEntity>): Promise<DatabaseEntity>;
    updateAffairs(id: number, updateDto: UpdateObjectDto): Promise<DatabaseEntity>;
    remove(id: number): Promise<void>;
}
