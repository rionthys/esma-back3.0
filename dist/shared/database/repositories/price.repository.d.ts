import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { PriceEntity } from "../entities/price.entity";
export declare class PriceRepository {
    private priceRepository;
    constructor(priceRepository: Repository<PriceEntity>);
    create(createDto: DeepPartial<PriceEntity> | DeepPartial<PriceEntity>[]): Promise<PriceEntity | PriceEntity[]>;
    findAll(): Promise<PriceEntity[]>;
    findOne(id: number): Promise<PriceEntity>;
    findOneByWhere(where: FindOptionsWhere<PriceEntity>): Promise<PriceEntity>;
    update(id: number, updateDto: Partial<PriceEntity>): Promise<PriceEntity>;
    remove(id: number): Promise<void>;
    deleteAll(): Promise<void>;
}
