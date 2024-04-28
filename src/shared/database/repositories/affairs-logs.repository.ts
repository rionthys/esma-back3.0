import {EntityRepository, FindOptionsWhere, In, Like, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {AffairsLogsEntity} from "../entities/affairs-logs.entity";

@EntityRepository(AffairsLogsEntity)
export class AffairsLogsRepository {
    constructor(
        @InjectRepository(AffairsLogsEntity)
        private affairsLogsRepository: Repository<AffairsLogsEntity>,
    ) {
    }

    create(createDto: Partial<AffairsLogsEntity>): Promise<AffairsLogsEntity> {
        const entity = this.affairsLogsRepository.create(createDto);
        return this.affairsLogsRepository.save(entity);
    }

    findAll(): Promise<AffairsLogsEntity[]> {
        return this.affairsLogsRepository.find();
    }

    findByAffairsId(id: number) {
        return this.affairsLogsRepository.find(
            {
                where: {affairs: {id: id}},
                relations: {responsible: true}
            }
        );
    }

    countByAffairsIds(ids: number[]) {
        return this.affairsLogsRepository.count(
            {
                where: {affairs: {id: In(ids)}},
            }
        );
    }

    countByAffairsIdsAndType(ids: number[], type: string) {
        return this.affairsLogsRepository.count(
            {
                where: {affairs: {id: In(ids)}, action: Like(`%${type}%`)},
            }
        );
    }

    findOne(id: number): Promise<AffairsLogsEntity> {
        return this.affairsLogsRepository.findOneBy({id});
    }

    findOneByWhere(where: FindOptionsWhere<AffairsLogsEntity>): Promise<AffairsLogsEntity> {
        return this.affairsLogsRepository.findOneBy(where);
    }

    findByWhere(where: FindOptionsWhere<AffairsLogsEntity>): Promise<AffairsLogsEntity[]> {
        return this.affairsLogsRepository.findBy(where)
    }


    async update(id: number, updateDto: Partial<AffairsLogsEntity>): Promise<AffairsLogsEntity> {
        let entity = await this.affairsLogsRepository.findOneBy({id});
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.affairsLogsRepository.merge(entity, updateDto);
        return this.affairsLogsRepository.save(entity);
    }

    async bulkUpdateResponsible(oldResponsibleId: number, newResponsibleId: number | null) {
        return await this.affairsLogsRepository
            .createQueryBuilder()
            .update(AffairsLogsEntity)
            .set({responsible: {id: newResponsibleId}})
            .where('responsible = :oldResponsibleId', {oldResponsibleId})
            .execute();
    }

    remove(id: number): Promise<void> {
        return this.affairsLogsRepository.delete(id).then(() => {
        });
    }

    delete(ids: number[]) {
        return this.affairsLogsRepository.delete(ids);
    }
}
