import { FindOptionsWhere, Repository } from 'typeorm';
import { MailsRegistersEntity } from "../entities/mails-registers.entity";
export declare class MailsRegistersRepository {
    private authRepository;
    constructor(authRepository: Repository<MailsRegistersEntity>);
    create(createDto: Partial<MailsRegistersEntity>): Promise<MailsRegistersEntity>;
    findAll(): Promise<MailsRegistersEntity[]>;
    findOne(id: number): Promise<MailsRegistersEntity>;
    findOneByWhere(where: FindOptionsWhere<MailsRegistersEntity>): Promise<MailsRegistersEntity>;
    update(id: number, updateDto: Partial<MailsRegistersEntity>): Promise<MailsRegistersEntity>;
    remove(id: number): Promise<void>;
}
