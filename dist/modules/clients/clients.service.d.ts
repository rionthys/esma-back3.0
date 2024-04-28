import { ClientsRepository } from "../../shared/database/repositories/clients.repository";
import { ClientsEntity } from "../../shared/database/entities/clients.entity";
export declare class ClientsService {
    private clientsRepository;
    constructor(clientsRepository: ClientsRepository);
    create(postData: any): Promise<ClientsEntity>;
    findAll(): Promise<ClientsEntity[]>;
    update(id: number, updateDto: Partial<ClientsEntity>): Promise<ClientsEntity>;
    remove(id: number): Promise<void>;
}
