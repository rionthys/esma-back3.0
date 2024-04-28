import {EntityRepository, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {DatabaseEntity} from '../entities/database.entity';

@EntityRepository(DatabaseEntity)
export class DatabaseRepository {
    constructor(
        @InjectRepository(DatabaseEntity)
        private databaseRepository: Repository<DatabaseEntity>,
    ) {
    }

    create(createDto: Partial<DatabaseEntity>): Promise<DatabaseEntity> {
        const entity = this.databaseRepository.create(createDto);
        return this.databaseRepository.save(entity);
    }

    findAll(): Promise<DatabaseEntity[]> {
        return this.databaseRepository.find({
            relations: ['affairs', 'contracts', 'documents'],
        });
    }

    findAffairs(id) {
        return this.databaseRepository.find({
            where: {id},
            relations: ['affairs'],
        });
    }

    findOne(id: number): Promise<DatabaseEntity> {
        return this.databaseRepository.findOne({where: {id}, relations: ['client']});
    }

    async update(id: number, updateDto: Partial<DatabaseEntity>): Promise<DatabaseEntity> {
        let entity = await this.databaseRepository.findOneBy({id});
        if (!entity) {
            throw new Error(`Entity not found`);
        }

        entity = this.databaseRepository.merge(entity, updateDto);
        return this.databaseRepository.save(entity);
    }

    remove(id: number): Promise<void> {
        return this.databaseRepository.delete(id).then(() => {
        });
    }
}
