import { MailsRegisterService } from './mails-register.service';
import { MailsRegistersDto } from './mailsRegistersDto';
import { MailsRegistersEntity } from "../../shared/database/entities/mails-registers.entity";
export declare class MailsRegistersController {
    private readonly mailsRegisterService;
    constructor(mailsRegisterService: MailsRegisterService);
    create(createDto: MailsRegistersDto): Promise<MailsRegistersEntity>;
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
    findOne(id: string): Promise<MailsRegistersEntity>;
    update(id: string, updateDto: any): Promise<MailsRegistersEntity>;
    remove(id: string): Promise<void>;
}
