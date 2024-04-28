import {EntityRepository, FindOptionsWhere, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {MailsRegistersEntity} from "../entities/mails-registers.entity";

@EntityRepository(MailsRegistersEntity)
export class MailsRegistersRepository {
    constructor(
        @InjectRepository(MailsRegistersEntity)
        private authRepository: Repository<MailsRegistersEntity>,
    ) {
    }

    create(createDto: Partial<MailsRegistersEntity>): Promise<MailsRegistersEntity> {
        const entity = this.authRepository.create(createDto);
        return this.authRepository.save(entity);
    }

    findAll(): Promise<MailsRegistersEntity[]> {
        return this.authRepository.find({
            relations: ['affair', 'affair.object', 'affair.object.client'],
        });
    }

    findOne(id: number): Promise<MailsRegistersEntity> {
        return this.authRepository.findOne({where: {id}, relations: ['affair']});
    }

    findOneByWhere(where: FindOptionsWhere<MailsRegistersEntity>): Promise<MailsRegistersEntity> {
        return this.authRepository.findOneBy(where);
    }


    async update(id: number, updateDto: Partial<MailsRegistersEntity>): Promise<MailsRegistersEntity> {
        let entity = await this.authRepository.findOneBy({id});
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.authRepository.merge(entity, updateDto);
        return this.authRepository.save(entity);
    }

    remove(id: number): Promise<void> {
        return this.authRepository.delete(id).then(() => {
        });
    }
}
