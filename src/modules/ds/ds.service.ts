import {Injectable} from '@nestjs/common';
import {DsRepository} from "../../shared/database/repositories/ds.repository";
import {DsEntity} from "../../shared/database/entities/ds.entity";

@Injectable()
export class DsService {

    constructor(
        private readonly dsRepository: DsRepository,
    ) {
    }

    async create(postData: any) {
        return await this.dsRepository.create(postData);
    }

    async findAll() {
        const ds = await this.dsRepository.findAll();
        return ds.filter((ds) => ds.name);
    }

    findOne(id: number): Promise<DsEntity> {
        return this.dsRepository.findOne(id);
    }

    async update(id: number, updateDto: Partial<DsEntity>) {
        return this.dsRepository.update(id, updateDto);
    }

    async remove(id: number): Promise<void> {
        return this.dsRepository.remove(id);
    }
}
