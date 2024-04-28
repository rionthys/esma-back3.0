import { MailsRegistersEntity } from "../../shared/database/entities/mails-registers.entity";
import { MailsRegistersRepository } from "../../shared/database/repositories/mails-registers.repository";
import { AffairsRepository } from "../../shared/database/repositories/affairs.repository";
import { AffairsLogsRepository } from "../../shared/database/repositories/affairs-logs.repository";
import { MailsRegistersDto } from "./mailsRegistersDto";
import { UsersRepository } from "../../shared/database/repositories/users.repository";
export declare class MailsRegisterService {
    private mailRegistersRepository;
    private readonly affairsRepository;
    private readonly affairsLogsRepository;
    private readonly usersRepository;
    constructor(mailRegistersRepository: MailsRegistersRepository, affairsRepository: AffairsRepository, affairsLogsRepository: AffairsLogsRepository, usersRepository: UsersRepository);
    create(postData: MailsRegistersDto): Promise<MailsRegistersEntity>;
    findAll(): Promise<{
        object: import("../../shared/database/entities/database.entity").DatabaseEntity;
        client: import("../../shared/database/entities/clients.entity").ClientsEntity;
        id: number;
        number: string;
        type: string;
        services: string;
        destination: string;
        address: string;
        date: string;
        content: string;
        affair: import("../../shared/database/entities/affairs.entity").AffairsEntity;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: number): Promise<MailsRegistersEntity>;
    update(id: number, updateDto: Partial<MailsRegistersEntity>): Promise<MailsRegistersEntity>;
    remove(id: number): Promise<void>;
}
