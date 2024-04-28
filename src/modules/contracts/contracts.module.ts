import {Module} from '@nestjs/common';
import {DatabaseModule} from 'src/shared/database/database.module';
import {ContractsController} from "./contracts.controller";
import {ContractsService} from "./contracts.service";

@Module({
    imports: [DatabaseModule],
    controllers: [ContractsController],
    providers: [ContractsService],
})
export class ContractsModule {
}
