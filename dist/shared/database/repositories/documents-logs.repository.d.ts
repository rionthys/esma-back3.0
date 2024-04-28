import { FindOptionsWhere, Repository } from 'typeorm';
import { DocumentsLogsEntity } from "../entities/documents-logs.entity";
export declare class DocumentsLogsRepository {
    private documentsLogsRepository;
    constructor(documentsLogsRepository: Repository<DocumentsLogsEntity>);
    create(createDto: Partial<DocumentsLogsEntity>): Promise<DocumentsLogsEntity>;
    findAll(): Promise<DocumentsLogsEntity[]>;
    findByContractsId(id: number): Promise<DocumentsLogsEntity[]>;
    countByDocumentsIds(ids: number[]): Promise<number>;
    countByDocumentsIdsAndType(ids: number[], type: string): Promise<number>;
    findOne(id: number): Promise<DocumentsLogsEntity>;
    findOneByWhere(where: FindOptionsWhere<DocumentsLogsEntity>): Promise<DocumentsLogsEntity>;
    findByWhere(where: FindOptionsWhere<DocumentsLogsEntity>): Promise<DocumentsLogsEntity[]>;
    update(id: number, updateDto: Partial<DocumentsLogsEntity>): Promise<DocumentsLogsEntity>;
    bulkUpdateResponsible(oldResponsibleId: number, newResponsibleId: number | null): Promise<import("typeorm").UpdateResult>;
    remove(id: number | number[]): Promise<import("typeorm").DeleteResult>;
}
