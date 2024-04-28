import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {MailsRegisterService} from './mails-register.service';
import {MailsRegistersDto} from './mailsRegistersDto';
import {MailsRegistersEntity} from "../../shared/database/entities/mails-registers.entity";


@Controller('api/mails-registery')
export class MailsRegistersController {
  constructor(
      private readonly mailsRegisterService: MailsRegisterService,
  ) {}

  @Post()
  create(@Body() createDto: MailsRegistersDto): Promise<MailsRegistersEntity> {
    return this.mailsRegisterService.create(createDto);
  }

  @Get()
  findAll() {
    return this.mailsRegisterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MailsRegistersEntity> {
    return this.mailsRegisterService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: any): Promise<MailsRegistersEntity> {
    return this.mailsRegisterService.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.mailsRegisterService.remove(+id);
  }
}
