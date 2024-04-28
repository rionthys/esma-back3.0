import {Module} from '@nestjs/common';
import {DsService} from './ds.service';
import {DsController} from './ds.controller';

@Module({
    providers: [DsService],
    controllers: [DsController]
})
export class DsModule {
}
