import { Repository } from 'typeorm';
import { ClientsEntity } from "../entities/clients.entity";
export declare class ClientsRepository {
    private clientsRepository;
    constructor(clientsRepository: Repository<ClientsEntity>);
    create(createDto: Partial<ClientsEntity>): Promise<ClientsEntity>;
    findAll(): Promise<ClientsEntity[]>;
    update(id: number, updateDto: Partial<ClientsEntity>): Promise<ClientsEntity>;
    remove(id: number): Promise<void>;
}
