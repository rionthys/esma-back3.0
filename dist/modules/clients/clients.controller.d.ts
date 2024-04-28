import { ClientsService } from "./clients.service";
import { ClientsEntity } from "../../shared/database/entities/clients.entity";
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(createDto: any): Promise<ClientsEntity>;
    findAll(): Promise<ClientsEntity[]>;
    update(id: string, updateDto: any): Promise<ClientsEntity>;
    remove(id: string): Promise<void>;
}
