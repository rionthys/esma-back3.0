import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ContractsService} from './contracts.service';
import {CreateContractsDto} from './createContractsDto';
import {CreateLogsDto} from "./create-logs.dto";
import {ContractsEntity} from "../../shared/database/entities/contracts.entity";


@Controller('api/contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Post()
  create(@Body() createDto: CreateContractsDto): Promise<ContractsEntity> {
    return this.contractsService.create(createDto);
  }

  @Post(':id')
  createLogs(@Param('id') id: string, @Body() createDto: CreateLogsDto) {
    return this.contractsService.createLogs(+id, createDto);
  }

  @Get()
  findAll() {
    return this.contractsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contractsService.findOne(id);
  }

  @Get(':id/logs')
  findLogs(@Param('id') id: string) {
    return this.contractsService.findLogs(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: any): Promise<ContractsEntity> {
    return this.contractsService.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.contractsService.remove(+id);
  }
}
