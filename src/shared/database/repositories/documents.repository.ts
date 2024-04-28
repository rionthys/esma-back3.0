import {EntityRepository, FindOptionsWhere, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {DocumentsEntity} from "../entities/documents.entity";

@EntityRepository(DocumentsEntity)
export class DocumentsRepository {
    constructor(
        @InjectRepository(DocumentsEntity)
        private contractsRepository: Repository<DocumentsEntity>,
    ) {
    }

    create(createDto: Partial<DocumentsEntity>): Promise<DocumentsEntity> {
        const entity = this.contractsRepository.create(createDto);
        return this.contractsRepository.save(entity);
    }

    getCountToday(dateString: string) {
        return this.contractsRepository
            .createQueryBuilder('contract')
            .where('contract.created_at >= :startOfDay', {startOfDay: `${dateString} 00:00:00`})
            .andWhere('contract.created_at <= :endOfDay', {endOfDay: `${dateString} 23:59:59`})
            .getCount();
    }

    findAll(): Promise<DocumentsEntity[]> {
        return this.contractsRepository.find({
            relations: ['object', 'object.client', 'client'],
        });
    }

    findOne(id: number): Promise<DocumentsEntity> {
        return this.contractsRepository.findOne({where: {id}, relations: ['logs', 'object', 'client']});
    }

    findOneByWhere(where: FindOptionsWhere<DocumentsEntity>): Promise<DocumentsEntity> {
        return this.contractsRepository.findOne({where: where, relations: ['object']});
    }


    async update(id: number, updateDto: Partial<DocumentsEntity>): Promise<DocumentsEntity> {
        let entity = await this.contractsRepository.findOneBy({id});
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.contractsRepository.merge(entity, updateDto);
        return this.contractsRepository.save(entity);
    }

    remove(id: number): Promise<void> {
        return this.contractsRepository.delete(id).then(() => {
        });
    }
}
