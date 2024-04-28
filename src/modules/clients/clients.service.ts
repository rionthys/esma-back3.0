import {Injectable} from '@nestjs/common';
import {ClientsRepository} from "../../shared/database/repositories/clients.repository";
import {ClientsEntity} from "../../shared/database/entities/clients.entity";

@Injectable()
export class ClientsService {
    constructor(
        private clientsRepository: ClientsRepository
    ) {
    }

    async create(postData: any): Promise<ClientsEntity> {
        return await this.clientsRepository.create(postData);
    }

    async findAll() {
        return await this.clientsRepository.findAll();
    }

    async findOne(id: number) {
        return await this.clientsRepository.findOne(id);
    }

    async update(id: number, updateDto: Partial<ClientsEntity>): Promise<ClientsEntity> {
        return await this.clientsRepository.update(id, updateDto);
    }

    async remove(id: number): Promise<void> {
        return this.clientsRepository.remove(id);
    }
}
