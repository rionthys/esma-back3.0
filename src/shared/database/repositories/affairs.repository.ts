import {EntityRepository, FindOptionsWhere, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {AffairsEntity} from "../entities/affairs.entity";
import {UsersRepository} from "./users.repository";

@EntityRepository(AffairsEntity)
export class AffairsRepository {
    constructor(
        @InjectRepository(AffairsEntity)
        private affairsRepository: Repository<AffairsEntity>,
        private readonly usersRepository: UsersRepository
    ) {
    }

    create(createDto: Partial<AffairsEntity>): Promise<AffairsEntity> {
        const entity = this.affairsRepository.create(createDto);
        return this.affairsRepository.save(entity);
    }

    getCountToday(dateString: string) {
        return this.affairsRepository
            .createQueryBuilder('affair')
            .where('affair.created_at >= :startOfDay', {startOfDay: `${dateString} 00:00:00`})
            .andWhere('affair.created_at <= :endOfDay', {endOfDay: `${dateString} 23:59:59`})
            .getCount();
    }

    findAll(): Promise<AffairsEntity[]> {
        return this.affairsRepository.find({
            relations: ['subscriber', 'responsible', 'object', 'object.client'],
        });
    }

    findAllLogs(): Promise<AffairsEntity[]> {
        return this.affairsRepository.find({
            relations: ['object', 'logs', 'object.client'],
        });
    }

    findOne(id: number): Promise<AffairsEntity> {
        return this.affairsRepository.findOne({
            where: {id},
            relations: ['logs', 'responsible', 'subscriber', 'object', 'object.contracts', 'object.client']
        });
    }

    findOneByWhere(where: FindOptionsWhere<AffairsEntity>): Promise<AffairsEntity> {
        return this.affairsRepository.findOneBy(where);
    }

    findByWhere(where: FindOptionsWhere<AffairsEntity>): Promise<AffairsEntity[]> {
        return this.affairsRepository.findBy(where);
    }

    findByObjectId(id: number) {
        return this.affairsRepository.find({where: {object: {id}}});
    }

    async update(id: number, updateDto: Partial<AffairsEntity>): Promise<AffairsEntity> {
        let entity = await this.affairsRepository.findOne({where: {id}, relations: ['responsible']},);
        if (updateDto?.responsible) {
            updateDto.responsible = await this.usersRepository.findOne(+updateDto?.responsible);
        }
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.affairsRepository.merge(entity, updateDto);
        return this.affairsRepository.save(entity);
    }

    async bulkUpdateResponsible(oldResponsibleId: number, newResponsibleId: number | null) {
        return await this.affairsRepository
            .createQueryBuilder()
            .update(AffairsEntity)
            .set({responsible: {id: newResponsibleId}})
            .where('responsible = :oldResponsibleId', {oldResponsibleId})
            .execute();
    }

    async remove(id: number): Promise<void> {
        return this.affairsRepository.delete(id).then(() => {
        });
    }
}
