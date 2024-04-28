import { PriceRepository } from "../../shared/database/repositories/price.repository";
import { PriceEntity } from "../../shared/database/entities/price.entity";
export declare class PriceService {
    private readonly priceRepository;
    constructor(priceRepository: PriceRepository);
    create(postData: any): Promise<PriceEntity | PriceEntity[]>;
    findAll(): Promise<PriceEntity[]>;
    findOne(id: number): Promise<PriceEntity>;
    update(id: number, updateDto: Partial<PriceEntity>): Promise<PriceEntity>;
    remove(id: number): Promise<void>;
}
