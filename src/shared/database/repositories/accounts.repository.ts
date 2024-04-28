import {EntityRepository, FindOptionsWhere, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {AccountsEntity} from "../entities/accounts.entity";

@EntityRepository(AccountsEntity)
export class AccountsRepository {
    constructor(
        @InjectRepository(AccountsEntity)
        private readonly accountsRepository: Repository<AccountsEntity>,
    ) {
    }

    async create(createDto: Partial<AccountsEntity>): Promise<AccountsEntity> {
        const entity = this.accountsRepository.create(createDto);
        return this.accountsRepository.save(entity);
    }

    getCountToday(dateString: string) {
        return this.accountsRepository
            .createQueryBuilder('affair')
            .where('affair.created_at >= :startOfDay', {startOfDay: `${dateString} 00:00:00`})
            .andWhere('affair.created_at <= :endOfDay', {endOfDay: `${dateString} 23:59:59`})
            .getCount();
    }

    findAll(): Promise<AccountsEntity[]> {
        return this.accountsRepository.find({
            relations: ['affair', "affair.object", "affair.object.client"],
        });
    }

    async count() {
        return (await this.accountsRepository.find({
            take: 1,
            order: {
                created_at: 'DESC',
            }
        }))[0].id;
    }

    findOne(id: number): Promise<AccountsEntity> {
        return this.accountsRepository.findOne({where: {id}, relations: ['client', 'affair']});
    }

    findOneByWhere(where: FindOptionsWhere<AccountsEntity>): Promise<AccountsEntity> {
        return this.accountsRepository.findOneBy(where);
    }

    findByWhere(where: FindOptionsWhere<AccountsEntity>): Promise<AccountsEntity[]> {
        return this.accountsRepository.findBy(where);
    }

    async update(id: number, updateDto: Partial<AccountsEntity>): Promise<AccountsEntity> {
        let entity = await this.accountsRepository.findOneBy({id});
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.accountsRepository.merge(entity, updateDto);
        return this.accountsRepository.save(entity);
    }

    async remove(id: number): Promise<void> {
        return this.accountsRepository.delete(id).then(() => {
        });
    }
}
