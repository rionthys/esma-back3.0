import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {DatabaseService} from './database.service';
import {DatabaseEntity} from '../../shared/database/entities/database.entity';
import {CreateObjectDTO} from './createObjectDto';
import {UpdateObjectDto} from "./updateObjectDto";


@Controller('api/database')
export class DatabaseController {
    constructor(private readonly databaseService: DatabaseService) {
    }

    @Post()
    create(@Body() createDto: CreateObjectDTO): Promise<DatabaseEntity> {
        return this.databaseService.create(createDto);
    }

    @Get()
    findAll(): Promise<DatabaseEntity[]> {
        return this.databaseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<DatabaseEntity> {
        return this.databaseService.findOne(+id);
    }

    @Put(':id/affairs')
    updateAffairs(@Param('id') id: string, @Body() updateDto: UpdateObjectDto): Promise<DatabaseEntity> {
        return this.databaseService.updateAffairs(+id, updateDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDto: any): Promise<DatabaseEntity> {
        return this.databaseService.update(+id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.databaseService.remove(+id);
    }
}
