import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AffairsService} from './affairs.service';
import {AffairsEntity} from '../../shared/database/entities/affairs.entity';
import {CreateAffairsDto} from './createAffairsDto';
import {CreateLogsDto} from "./create-logs.dto";


@Controller('api/affairs')
export class AffairsController {
    constructor(private readonly affairsService: AffairsService) {
    }

    @Post()
    create(@Body() createDto: CreateAffairsDto): Promise<AffairsEntity> {
        return this.affairsService.create(createDto);
    }

    @Post(':id')
    createLogs(@Param('id') id: string, @Body() createDto: CreateLogsDto) {
        return this.affairsService.createLogs(+id, createDto);
    }

    @Get()
    findAll() {
        return this.affairsService.findAll();
    }

    @Get(':id/logs')
    findLogs(@Param('id') id: string) {
        return this.affairsService.findLogs(+id);
    }

    @Put(':id/close')
    close(@Param('id') id: string, @Body() data: any) {
        return this.affairsService.update(+id, {status: 'завершено', user: data.user.id});
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<AffairsEntity> {
        return this.affairsService.findOne(+id);
    }

    @Get('object/:id')
    getByObjectId(@Param('id') id: string) {
        return this.affairsService.getByObjectId(+id);
    }

    @Get('contract/:id')
    getByContractId(@Param('id') id: string) {
        return this.affairsService.getByContractId(+id);
    }

    @Get('document/:id')
    getByDocumentId(@Param('id') id: string) {
        return this.affairsService.getByDocumentId(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDto: any): Promise<AffairsEntity> {
        return this.affairsService.update(+id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.affairsService.remove(+id);
    }
}
