import {Injectable} from '@nestjs/common';
import {PriceRepository} from "../../shared/database/repositories/price.repository";
import {PriceEntity} from "../../shared/database/entities/price.entity";

@Injectable()
export class PriceService {

    constructor(
        private readonly priceRepository: PriceRepository,
    ) {
    }

    async create(postData: any) {
        return await this.priceRepository.create(postData);
    }

    async findAll() {
        return await this.priceRepository.findAll();
    }

    findOne(id: number): Promise<PriceEntity> {
        return this.priceRepository.findOne(id);
    }

    async update(id: number, updateDto: Partial<PriceEntity>): Promise<PriceEntity> {
        return await this.priceRepository.update(id, updateDto);
    }

    async remove(id: number): Promise<void> {
        return this.priceRepository.remove(id);
    }
}
