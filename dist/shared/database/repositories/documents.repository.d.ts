import { FindOptionsWhere, Repository } from 'typeorm';
import { DocumentsEntity } from "../entities/documents.entity";
export declare class DocumentsRepository {
    private contractsRepository;
    constructor(contractsRepository: Repository<DocumentsEntity>);
    create(createDto: Partial<DocumentsEntity>): Promise<DocumentsEntity>;
    getCountToday(dateString: string): Promise<number>;
    findAll(): Promise<DocumentsEntity[]>;
    findOne(id: number): Promise<DocumentsEntity>;
    findOneByWhere(where: FindOptionsWhere<DocumentsEntity>): Promise<DocumentsEntity>;
    update(id: number, updateDto: Partial<DocumentsEntity>): Promise<DocumentsEntity>;
    remove(id: number): Promise<void>;
}
