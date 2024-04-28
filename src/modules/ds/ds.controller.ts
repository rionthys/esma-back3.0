import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {DsService} from "./ds.service";
import {CreateAffairsDto} from "../affairs/createAffairsDto";

@Controller('api/ds')
export class DsController {

    constructor(private readonly accountsService: DsService) {
    }

    @Get()
    findAll() {
        return this.accountsService.findAll();
    }

    @Post()
    create(@Body() createDto: CreateAffairsDto) {
        return this.accountsService.create(createDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.accountsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDto: any) {
        return this.accountsService.update(+id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.accountsService.remove(+id);
    }
}
