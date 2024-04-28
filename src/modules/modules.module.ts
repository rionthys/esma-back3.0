import {Module} from '@nestjs/common';
import {DatabaseController} from './database/database.controller';
import {DatabaseService} from './database/database.service';
import {DatabaseModule} from 'src/shared/database/database.module';
import {AuthModules} from "./authentification/auth.module";
import {AffairsModule} from "./affairs/affairs.module";
import {UploadModule} from "./upload/upload.module";
import {ContractsModule} from "./contracts/contracts.module";
import {DocumentsModule} from "./documents/documents.module";
import {MailsRegisterModule} from "./mails-registers/mails-register.module";
import {DeadlinesModule} from "./deadlines/deadlines.module";
import {MailModule} from "./mail/mail.module";
import {ClientsModule} from "./clients/clients.module";
import {PriceModule} from "./prices/price.module";
import {AccountsModule} from "./accounts/accounts.module";
import {DsModule} from "./ds/ds.module";

@Module({
    imports: [
        DatabaseModule,
        AffairsModule,
        AuthModules,
        UploadModule,
        ContractsModule,
        DocumentsModule,
        MailsRegisterModule,
        DeadlinesModule,
        MailModule,
        ClientsModule,
        PriceModule,
        AccountsModule,
        DsModule
    ],
    controllers: [DatabaseController],
    providers: [DatabaseService],
})
export class ModuleModules {
}
