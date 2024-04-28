import { UsersEntity } from "../../shared/database/entities/users.entity";
export declare class CreateAffairsDto {
    view: string;
    name: string;
    object: number;
    type: string;
    status: string;
    deadlines: string;
    subscriber: UsersEntity;
    responsible: UsersEntity;
    attention: string;
    client: string;
}
