import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ClientsService} from "./clients.service";
import {ClientsEntity} from "../../shared/database/entities/clients.entity";

@Controller('api/clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {
    }

    @Post()
    create(@Body() createDto: any): Promise<ClientsEntity> {
        return this.clientsService.create(createDto);
    }

    @Get()
    findAll() {
        return this.clientsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.clientsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDto: any): Promise<ClientsEntity> {
        return this.clientsService.update(+id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.clientsService.remove(+id);
    }
}
