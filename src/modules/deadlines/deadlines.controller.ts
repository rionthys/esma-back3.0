import {Controller, Get} from '@nestjs/common';
import {DeadlinesService} from './deadlines.service';


@Controller('api/deadlines')
export class DeadlinesController {
  constructor(private readonly deadlineService: DeadlinesService) {}

  @Get()
  findAll() {
    return this.deadlineService.findAll();
  }
}
