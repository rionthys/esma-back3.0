import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CreateLogsDto} from "./create-logs.dto";
import {DocumentsService} from "./documents.service";
import {CreateContractsDto} from "../contracts/createContractsDto";
import {DocumentsEntity} from "../../shared/database/entities/documents.entity";


@Controller('api/documents')
export class DocumentsController {
    constructor(private readonly documentsService: DocumentsService) {}

    @Post()
    create(@Body() createDto: CreateContractsDto): Promise<DocumentsEntity> {
        return this.documentsService.create(createDto);
    }

    @Post(':id')
    createLogs(@Param('id') id: string, @Body() createDto: CreateLogsDto) {
        return this.documentsService.createLogs(+id, createDto);
    }

    @Get()
    findAll() {
        return this.documentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.documentsService.findOne(+id);
    }

    @Get(':id/logs')
    findLogs(@Param('id') id: string) {
        return this.documentsService.findLogs(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDto: any): Promise<DocumentsEntity> {
        return this.documentsService.update(+id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.documentsService.remove(+id);
    }
}
