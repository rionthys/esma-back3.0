import {DeepPartial, EntityRepository, FindOptionsWhere, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {PriceEntity} from "../entities/price.entity";

@EntityRepository(PriceEntity)
export class PriceRepository {
    constructor(
        @InjectRepository(PriceEntity)
        private priceRepository: Repository<PriceEntity>,
    ) {
    }

    create(createDto: DeepPartial<PriceEntity> | DeepPartial<PriceEntity>[]): Promise<PriceEntity | PriceEntity[]> {
        console.log(createDto)
        const entity = this.priceRepository.create(createDto as any);
        return this.priceRepository.save(entity);
    }

    findAll(): Promise<PriceEntity[]> {
        return this.priceRepository.find();
    }

    findOne(id: number): Promise<PriceEntity> {
        return this.priceRepository.findOneBy({id});
    }

    findOneByWhere(where: FindOptionsWhere<PriceEntity>): Promise<PriceEntity> {
        return this.priceRepository.findOneBy(where);
    }


    async update(id: number, updateDto: Partial<PriceEntity>): Promise<PriceEntity> {
        let entity = await this.priceRepository.findOneBy({id});
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.priceRepository.merge(entity, updateDto);
        return this.priceRepository.save(entity);
    }

    remove(id: number): Promise<void> {
        return this.priceRepository.delete(id).then(() => {
        });
    }

    deleteAll() {
        return this.priceRepository.clear();
    }
}
