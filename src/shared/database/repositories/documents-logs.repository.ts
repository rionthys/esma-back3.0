import {EntityRepository, FindOptionsWhere, In, Like, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {DocumentsLogsEntity} from "../entities/documents-logs.entity";

@EntityRepository(DocumentsLogsEntity)
export class DocumentsLogsRepository {
    constructor(
        @InjectRepository(DocumentsLogsEntity)
        private documentsLogsRepository: Repository<DocumentsLogsEntity>,
    ) {
    }

    create(createDto: Partial<DocumentsLogsEntity>): Promise<DocumentsLogsEntity> {
        const entity = this.documentsLogsRepository.create(createDto);
        return this.documentsLogsRepository.save(entity);
    }

    findAll(): Promise<DocumentsLogsEntity[]> {
        return this.documentsLogsRepository.find();
    }

    findByContractsId(id: number) {
        return this.documentsLogsRepository.find(
            {
                where: {document: {id: id}},
                relations: {responsible: true}
            }
        );
    }

    countByDocumentsIds(ids: number[]) {
        return this.documentsLogsRepository.count(
            {
                where: {document: {id: In(ids)}},
            }
        );
    }

    countByDocumentsIdsAndType(ids: number[], type: string) {
        return this.documentsLogsRepository.count(
            {
                where: {document: {id: In(ids)}, action: Like(`%${type}%`)},
            }
        );
    }

    findOne(id: number): Promise<DocumentsLogsEntity> {
        return this.documentsLogsRepository.findOneBy({id});
    }

    findOneByWhere(where: FindOptionsWhere<DocumentsLogsEntity>): Promise<DocumentsLogsEntity> {
        return this.documentsLogsRepository.findOneBy(where);
    }

    findByWhere(where: FindOptionsWhere<DocumentsLogsEntity>): Promise<DocumentsLogsEntity[]> {
        return this.documentsLogsRepository.findBy(where);
    }

    async update(id: number, updateDto: Partial<DocumentsLogsEntity>): Promise<DocumentsLogsEntity> {
        let entity = await this.documentsLogsRepository.findOneBy({id});
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.documentsLogsRepository.merge(entity, updateDto);
        return this.documentsLogsRepository.save(entity);
    }

    async bulkUpdateResponsible(oldResponsibleId: number, newResponsibleId: number | null) {
        return await this.documentsLogsRepository
            .createQueryBuilder()
            .update(DocumentsLogsEntity)
            .set({responsible: {id: newResponsibleId}})
            .where('responsible = :oldResponsibleId', {oldResponsibleId})
            .execute();
    }

    remove(id: number | number[]) {
        return this.documentsLogsRepository.delete(id);
    }
}
