import {Module} from '@nestjs/common';
import {ClientsController} from './clients.controller';
import {ClientsService} from "./clients.service";
import {DatabaseModule} from "../../shared/database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [ClientsController],
    providers: [ClientsService]
})
export class ClientsModule {
}
