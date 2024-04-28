import {EntityRepository, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {UsersEntity} from "../entities/users.entity";

@EntityRepository(UsersEntity)
export class AuthRepository {
    constructor(
        @InjectRepository(UsersEntity)
        private authRepository: Repository<UsersEntity>,
    ) {
    }

    create(createDto: Partial<UsersEntity>): Promise<UsersEntity> {
        const entity = this.authRepository.create(createDto);
        return this.authRepository.save(entity);
    }

    findAll(): Promise<UsersEntity[]> {
        return this.authRepository.find();
    }

    findOne(id: number): Promise<UsersEntity> {
        return this.authRepository.findOneBy({id});
    }

    async update(id: number, updateDto: Partial<UsersEntity>): Promise<UsersEntity> {
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
