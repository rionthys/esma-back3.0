import {EntityRepository, FindOptionsWhere, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {ContractsEntity} from "../entities/contracts.entity";

@EntityRepository(ContractsEntity)
export class ContractsRepository {
    constructor(
        @InjectRepository(ContractsEntity)
        private contractsRepository: Repository<ContractsEntity>,
    ) {
    }

    create(createDto: Partial<ContractsEntity>): Promise<ContractsEntity> {
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

    findAll(): Promise<ContractsEntity[]> {
        return this.contractsRepository.find({
            relations: ['object', 'object.client', 'ds'],
        });
    }

    findOne(id: number): Promise<ContractsEntity> {
        return this.contractsRepository.findOne({where: {id}, relations: ['object', 'logs', 'ds']});
    }

    findOneByWhere(where: FindOptionsWhere<ContractsEntity>): Promise<ContractsEntity> {
        return this.contractsRepository.findOne({where: where, relations: ['object']});
    }


    async update(id: number, updateDto: Partial<ContractsEntity>): Promise<ContractsEntity> {
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
