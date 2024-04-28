import {Module} from '@nestjs/common';
import {DatabaseModule} from 'src/shared/database/database.module';
import {DocumentsController} from "./documents.controller";
import {DocumentsService} from "./documents.service";

@Module({
    imports: [DatabaseModule],
    controllers: [DocumentsController],
    providers: [DocumentsService],
})
export class DocumentsModule {
}
