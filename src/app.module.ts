import {Module} from '@nestjs/common';
import {ModuleModules} from './modules/modules.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DatabaseEntity} from './shared/database/entities/database.entity';
import {UsersEntity} from "./shared/database/entities/users.entity";
import {AffairsEntity} from "./shared/database/entities/affairs.entity";
import {MailsRegistersEntity} from "./shared/database/entities/mails-registers.entity";
import {AffairsLogsEntity} from "./shared/database/entities/affairs-logs.entity";
import {ContractsEntity} from "./shared/database/entities/contracts.entity";
import {DocumentsEntity} from "./shared/database/entities/documents.entity";
import {DocumentsLogsEntity} from "./shared/database/entities/documents-logs.entity";
import {DeadlinesEntity} from "./shared/database/entities/deadlines.entity";
import {ContractsLogsEntity} from "./shared/database/entities/contract-logs.entity";
import {ClientsService} from './modules/clients/clients.service';
import {ClientsModule} from './modules/clients/clients.module';
import {ClientsEntity} from "./shared/database/entities/clients.entity";
import {AccountsEntity} from "./shared/database/entities/accounts.entity";
import {PriceEntity} from "./shared/database/entities/price.entity";
import {DsEntity} from "./shared/database/entities/ds.entity";


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'esma_user',
            password: 'Wekeser2024!a',
            database: 'esma',
            entities: [
                DatabaseEntity,
                AffairsEntity,
                UsersEntity,
                MailsRegistersEntity,
                AffairsLogsEntity,
                ContractsEntity,
                DocumentsEntity,
                DeadlinesEntity,
                DocumentsLogsEntity,
                ContractsLogsEntity,
                ClientsEntity,
                AccountsEntity,
                PriceEntity,
                DsEntity
            ],
            synchronize: true,
        }),
        ModuleModules,
        ClientsModule
    ],
    controllers: [],
    providers: [ClientsService],
})
export class AppModule {
}
