import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AccountsService} from "./accounts.service";
import {CreateAffairsDto} from "../affairs/createAffairsDto";
import {AccountsEntity} from "../../shared/database/entities/accounts.entity";

@Controller('api/accounts')
export class AccountsController {

    constructor(private readonly accountsService: AccountsService) {
    }

    @Get()
    findAll() {
        return this.accountsService.findAll();
    }

    @Post()
    create(@Body() createDto: CreateAffairsDto): Promise<AccountsEntity> {
        return this.accountsService.create(createDto);
    }

    @Put(':id/close')
    close(@Param('id') id: string) {
        return this.accountsService.update(+id, {status: 'завершено'});
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<AccountsEntity> {
        return this.accountsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDto: any): Promise<AccountsEntity> {
        return this.accountsService.update(+id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.accountsService.remove(+id);
    }
}
