import { Repository } from 'typeorm';
import { UsersEntity } from "../entities/users.entity";
export declare class AuthRepository {
    private authRepository;
    constructor(authRepository: Repository<UsersEntity>);
    create(createDto: Partial<UsersEntity>): Promise<UsersEntity>;
    findAll(): Promise<UsersEntity[]>;
    findOne(id: number): Promise<UsersEntity>;
    update(id: number, updateDto: Partial<UsersEntity>): Promise<UsersEntity>;
    remove(id: number): Promise<void>;
}
