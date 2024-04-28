import { ClientsEntity } from "./clients.entity";
import { AffairsEntity } from "./affairs.entity";
export declare class AccountsEntity {
    id: number;
    status: string;
    service: string;
    price: string;
    affair: AffairsEntity;
    date: Date;
    type: string;
    client: ClientsEntity;
    created_at: Date;
    updated_at: Date;
}
