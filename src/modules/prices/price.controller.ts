import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {PriceService} from "./price.service";
import {CreateAffairsDto} from "../affairs/createAffairsDto";
import {PriceEntity} from "../../shared/database/entities/price.entity";

@Controller('api/price-list')
export class PriceController {

    constructor(private readonly priceService: PriceService) {
    }

    @Get()
    findAll() {
        return this.priceService.findAll();
    }

    @Post()
    create(@Body() createDto: CreateAffairsDto) {
        return this.priceService.create(createDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<PriceEntity> {
        return this.priceService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDto: any): Promise<PriceEntity> {
        return this.priceService.update(+id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.priceService.remove(+id);
    }
}
