import {Injectable} from '@nestjs/common';
import {DatabaseRepository} from '../../shared/database/repositories/database-entity.repository';
import {DatabaseEntity} from '../../shared/database/entities/database.entity';
import {UpdateObjectDto} from "./updateObjectDto";
import {AffairsRepository} from "../../shared/database/repositories/affairs.repository";

@Injectable()
export class DatabaseService {
    constructor(
        private databaseRepository: DatabaseRepository,
        private affairsRepository: AffairsRepository,
    ) {
    }

    create(postData: any): Promise<DatabaseEntity> {
        const createDto: Partial<DatabaseEntity> = postData;
        return this.databaseRepository.create(createDto);
    }

    findAll(): Promise<DatabaseEntity[]> {
        return this.databaseRepository.findAll();
    }

    findOne(id: number): Promise<DatabaseEntity> {
        return this.databaseRepository.findOne(id);
    }

    async update(id: number, updateDto: Partial<DatabaseEntity>): Promise<DatabaseEntity> {
        return await this.databaseRepository.update(id, updateDto);
    }

    async updateAffairs(id: number, updateDto: UpdateObjectDto) {
        const affairToAdd = await this.affairsRepository.findOneByWhere({id: updateDto.affair});

        const objectToUpdate = await this.databaseRepository.findAffairs(id);
        const updatedAffairs = objectToUpdate[0].affairs && objectToUpdate[0].affairs.length > 0 ? [...objectToUpdate[0].affairs, affairToAdd] : [affairToAdd];

        return await this.databaseRepository.update(id, {affairs: updatedAffairs});
    }

    async remove(id: number): Promise<void> {
        await this.databaseRepository.update(id, {affairs: [], contracts: [], documents: []});
        return this.databaseRepository.remove(id);
    }
}
