import {Module} from '@nestjs/common';
import {DatabaseModule} from 'src/shared/database/database.module';
import {DeadlinesController} from "./deadlines.controller";
import {DeadlinesService} from "./deadlines.service";

@Module({
    imports: [DatabaseModule],
    controllers: [DeadlinesController],
    providers: [DeadlinesService],
})
export class DeadlinesModule {
}
