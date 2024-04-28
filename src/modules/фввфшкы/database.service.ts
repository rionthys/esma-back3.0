import {Injectable} from '@nestjs/common';
import {DatabaseRepository} from '../../shared/database/repositories/database-entity.repository';
import {DatabaseEntity} from '../../shared/database/entities/database.entity';

@Injectable()
export class DatabaseService {
  constructor(
    private databaseRepository: DatabaseRepository,
  ) {}

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

  remove(id: number): Promise<void> {
    return this.databaseRepository.remove(id);
  }
}
