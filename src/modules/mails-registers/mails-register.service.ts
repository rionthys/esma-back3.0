import {Injectable} from '@nestjs/common';
import {MailsRegistersEntity} from "../../shared/database/entities/mails-registers.entity";
import {MailsRegistersRepository} from "../../shared/database/repositories/mails-registers.repository";
import {AffairsRepository} from "../../shared/database/repositories/affairs.repository";
import {AffairsLogsRepository} from "../../shared/database/repositories/affairs-logs.repository";
import {MailsRegistersDto} from "./mailsRegistersDto";
import {UsersRepository} from "../../shared/database/repositories/users.repository";

@Injectable()
export class MailsRegisterService {
    constructor(
        private mailRegistersRepository: MailsRegistersRepository,
        private readonly affairsRepository: AffairsRepository,
        private readonly affairsLogsRepository: AffairsLogsRepository,
        private readonly usersRepository: UsersRepository,
    ) {
    }

    async create(postData: MailsRegistersDto): Promise<MailsRegistersEntity> {
        const createDto: Partial<MailsRegistersEntity> = postData;
        console.log(createDto);
        const affair = await this.affairsRepository.findOne(+postData.affairId);
        const user = await this.usersRepository.findOne(+postData.responsible);
        await this.affairsLogsRepository.create({
            affairs: affair,
            type: postData.type,
            action: `${postData.type} письмо, трек номер: ${postData.number}, адресат: ${postData.destination}`,
            documents: [],
            responsible: user
        });

        return this.mailRegistersRepository.create({...createDto, affair});
    }

    async findAll() {
        const mails = await this.mailRegistersRepository.findAll();
        return mails.map((mail) => {
            return {
                ...mail,
                object: mail?.affair?.object,
                client: mail?.affair?.object?.client
            }
        })
    }

    findOne(id: number): Promise<MailsRegistersEntity> {
        return this.mailRegistersRepository.findOne(id);
    }

    async update(id: number, updateDto: Partial<MailsRegistersEntity>): Promise<MailsRegistersEntity> {
        return await this.mailRegistersRepository.update(id, updateDto);
    }

    remove(id: number): Promise<void> {
        return this.mailRegistersRepository.remove(id);
    }
}
