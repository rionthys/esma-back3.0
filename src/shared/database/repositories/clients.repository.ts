import {EntityRepository, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {ClientsEntity} from "../entities/clients.entity";

@EntityRepository(ClientsEntity)
export class ClientsRepository {
    constructor(
        @InjectRepository(ClientsEntity)
        private clientsRepository: Repository<ClientsEntity>,
    ) {
    }

    create(createDto: Partial<ClientsEntity>): Promise<ClientsEntity> {
        console.log(createDto);
        const entity = this.clientsRepository.create(createDto);
        return this.clientsRepository.save(entity);
    }

    findOne(id: number): Promise<ClientsEntity> {
        return this.clientsRepository.findOneBy({id});
    }

    findAll(): Promise<ClientsEntity[]> {
        return this.clientsRepository.find();
    }

    async update(id: number, updateDto: Partial<ClientsEntity>): Promise<ClientsEntity> {
        let entity = await this.clientsRepository.findOneBy({id});
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.clientsRepository.merge(entity, updateDto);
        return this.clientsRepository.save(entity);
    }

    async remove(id: number): Promise<void> {
        return this.clientsRepository.delete(id).then(() => {
        });
    }
}
