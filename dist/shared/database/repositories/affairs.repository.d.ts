import { FindOptionsWhere, Repository } from 'typeorm';
import { AffairsEntity } from "../entities/affairs.entity";
import { UsersRepository } from "./users.repository";
export declare class AffairsRepository {
    private affairsRepository;
    private readonly usersRepository;
    constructor(affairsRepository: Repository<AffairsEntity>, usersRepository: UsersRepository);
    create(createDto: Partial<AffairsEntity>): Promise<AffairsEntity>;
    getCountToday(dateString: string): Promise<number>;
    findAll(): Promise<AffairsEntity[]>;
    findAllLogs(): Promise<AffairsEntity[]>;
    findOne(id: number): Promise<AffairsEntity>;
    findOneByWhere(where: FindOptionsWhere<AffairsEntity>): Promise<AffairsEntity>;
    findByWhere(where: FindOptionsWhere<AffairsEntity>): Promise<AffairsEntity[]>;
    findByObjectId(id: number): Promise<AffairsEntity[]>;
    update(id: number, updateDto: Partial<AffairsEntity>): Promise<AffairsEntity>;
    bulkUpdateResponsible(oldResponsibleId: number, newResponsibleId: number | null): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
}
