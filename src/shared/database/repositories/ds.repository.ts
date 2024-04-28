import {EntityRepository, FindOptionsWhere, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {DsEntity} from "../entities/ds.entity";

@EntityRepository(DsEntity)
export class DsRepository {
    constructor(
        @InjectRepository(DsEntity)
        private dsRepository: Repository<DsEntity>,
    ) {
    }

    create(createDto: Partial<DsEntity>): Promise<DsEntity> {
        const entity = this.dsRepository.create(createDto);
        return this.dsRepository.save(entity);
    }

    getCountToday(dateString: string) {
        return this.dsRepository
            .createQueryBuilder('contract')
            .where('contract.created_at >= :startOfDay', {startOfDay: `${dateString} 00:00:00`})
            .andWhere('contract.created_at <= :endOfDay', {endOfDay: `${dateString} 23:59:59`})
            .getCount();
    }

    findAll(): Promise<DsEntity[]> {
        return this.dsRepository.find({
            relations: ['contracts'],
        });
    }

    findOne(id: number): Promise<DsEntity> {
        return this.dsRepository.findOne({where: {id}, relations: []});
    }

    findOneByWhere(where: FindOptionsWhere<DsEntity>): Promise<DsEntity> {
        return this.dsRepository.findOne({where: where, relations: ['object']});
    }


    async update(id: number, updateDto: Partial<DsEntity>): Promise<DsEntity> {
        let entity = await this.dsRepository.findOneBy({id});
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.dsRepository.merge(entity, updateDto);
        return this.dsRepository.save(entity);
    }

    remove(id: number): Promise<void> {
        return this.dsRepository.delete(id).then(() => {
        });
    }
}
