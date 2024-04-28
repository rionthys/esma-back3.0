import { FindOptionsWhere, Repository } from 'typeorm';
import { AffairsLogsEntity } from "../entities/affairs-logs.entity";
export declare class AffairsLogsRepository {
    private affairsLogsRepository;
    constructor(affairsLogsRepository: Repository<AffairsLogsEntity>);
    create(createDto: Partial<AffairsLogsEntity>): Promise<AffairsLogsEntity>;
    findAll(): Promise<AffairsLogsEntity[]>;
    findByAffairsId(id: number): Promise<AffairsLogsEntity[]>;
    countByAffairsIds(ids: number[]): Promise<number>;
    countByAffairsIdsAndType(ids: number[], type: string): Promise<number>;
    findOne(id: number): Promise<AffairsLogsEntity>;
    findOneByWhere(where: FindOptionsWhere<AffairsLogsEntity>): Promise<AffairsLogsEntity>;
    findByWhere(where: FindOptionsWhere<AffairsLogsEntity>): Promise<AffairsLogsEntity[]>;
    update(id: number, updateDto: Partial<AffairsLogsEntity>): Promise<AffairsLogsEntity>;
    bulkUpdateResponsible(oldResponsibleId: number, newResponsibleId: number | null): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
    delete(ids: number[]): Promise<import("typeorm").DeleteResult>;
}
