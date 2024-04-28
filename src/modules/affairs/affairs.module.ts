import {Module} from '@nestjs/common';
import {DatabaseModule} from 'src/shared/database/database.module';
import {AffairsController} from "./affairs.controller";
import {AffairsService} from "./affairs.service";

@Module({
    imports: [DatabaseModule],
    controllers: [AffairsController],
    providers: [AffairsService],
})
export class AffairsModule {
}
