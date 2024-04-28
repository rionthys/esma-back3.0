import {EntityRepository, FindOptionsWhere, In, Like, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {ContractsLogsEntity} from "../entities/contract-logs.entity";

@EntityRepository(ContractsLogsEntity)
export class ContractsLogsRepository {
    constructor(
        @InjectRepository(ContractsLogsEntity)
        private contractsLogsRepository: Repository<ContractsLogsEntity>,
    ) {
    }

    create(createDto: Partial<ContractsLogsEntity>): Promise<ContractsLogsEntity> {
        const entity = this.contractsLogsRepository.create(createDto);
        return this.contractsLogsRepository.save(entity);
    }

    findAll(): Promise<ContractsLogsEntity[]> {
        return this.contractsLogsRepository.find();
    }

    findByContractsId(id: number) {
        return this.contractsLogsRepository.find(
            {
                where: {contracts: {id: id}},
                relations: {responsible: true}
            }
        );
    }

    findOne(id: number): Promise<ContractsLogsEntity> {
        return this.contractsLogsRepository.findOneBy({id});
    }

    countByContractsIds(ids: number[]) {
        return this.contractsLogsRepository.count(
            {
                where: {contracts: {id: In(ids)}},
            }
        );
    }

    countByContractsIdsAndType(ids: number[], type: string) {
        return this.contractsLogsRepository.count(
            {
                where: {contracts: {id: In(ids)}, action: Like(`%${type}%`)},
            }
        );
    }

    findOneByWhere(where: FindOptionsWhere<ContractsLogsEntity>): Promise<ContractsLogsEntity> {
        return this.contractsLogsRepository.findOneBy(where);
    }

    findByWhere(where: FindOptionsWhere<ContractsLogsEntity>): Promise<ContractsLogsEntity[]> {
        return this.contractsLogsRepository.findBy(where);
    }


    async update(id: number, updateDto: Partial<ContractsLogsEntity>): Promise<ContractsLogsEntity> {
        let entity = await this.contractsLogsRepository.findOneBy({id});
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.contractsLogsRepository.merge(entity, updateDto);
        return this.contractsLogsRepository.save(entity);
    }

    async bulkUpdateResponsible(oldResponsibleId: number, newResponsibleId: number | null) {
        return await this.contractsLogsRepository
            .createQueryBuilder()
            .update(ContractsLogsEntity)
            .set({responsible: {id: newResponsibleId}})
            .where('responsible = :oldResponsibleId', {oldResponsibleId})
            .execute();
    }

    remove(id: number) {
        return this.contractsLogsRepository.delete(id);
    }

    delete(ids: number[]) {
        return this.contractsLogsRepository.delete(ids);
    }
}
