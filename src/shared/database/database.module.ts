import {Global, Module} from '@nestjs/common';
import {DatabaseRepository} from './repositories/database-entity.repository';
import {DatabaseEntity} from './entities/database.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsersEntity} from "./entities/users.entity";
import {UsersRepository} from "./repositories/users.repository";
import {AffairsEntity} from "./entities/affairs.entity";
import {AffairsRepository} from "./repositories/affairs.repository";
import {MailsRegistersEntity} from "./entities/mails-registers.entity";
import {AffairsLogsRepository} from "./repositories/affairs-logs.repository";
import {AffairsLogsEntity} from "./entities/affairs-logs.entity";
import {ContractsRepository} from "./repositories/contracts.repository";
import {ContractsEntity} from "./entities/contracts.entity";
import {ContractsLogsRepository} from "./repositories/contracts-logs.repository";
import {ContractsLogsEntity} from "./entities/contract-logs.entity";
import {DocumentsLogsEntity} from "./entities/documents-logs.entity";
import {DocumentsEntity} from "./entities/documents.entity";
import {DocumentsRepository} from "./repositories/documents.repository";
import {DocumentsLogsRepository} from "./repositories/documents-logs.repository";
import {MailsRegistersRepository} from "./repositories/mails-registers.repository";
import {ClientsEntity} from "./entities/clients.entity";
import {ClientsRepository} from "./repositories/clients.repository";
import {AccountsRepository} from "./repositories/accounts.repository";
import {AccountsEntity} from "./entities/accounts.entity";
import {PriceEntity} from "./entities/price.entity";
import {PriceRepository} from "./repositories/price.repository";
import {DsRepository} from "./repositories/ds.repository";
import {DsEntity} from "./entities/ds.entity";

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([
        DatabaseEntity,
        UsersEntity,
        AffairsEntity,
        MailsRegistersEntity,
        AffairsLogsEntity,
        ContractsEntity,
        ContractsLogsEntity,
        DocumentsLogsEntity,
        DocumentsEntity,
        ClientsEntity,
        AccountsEntity,
        PriceEntity,
        DsEntity
    ])],
    controllers: [],
    providers: [
        DatabaseRepository,
        UsersRepository,
        AffairsRepository,
        AffairsLogsRepository,
        ContractsRepository,
        ContractsLogsRepository,
        DocumentsRepository,
        DocumentsLogsRepository,
        MailsRegistersRepository,
        ClientsRepository,
        AccountsRepository,
        PriceRepository,
        DsRepository
    ],
    exports: [
        DatabaseRepository,
        UsersRepository,
        AffairsRepository,
        AffairsLogsRepository,
        ContractsRepository,
        ContractsLogsRepository,
        DocumentsRepository,
        DocumentsLogsRepository,
        MailsRegistersRepository,
        ClientsRepository,
        AccountsRepository,
        PriceRepository,
        DsRepository
    ]
})
export class DatabaseModule {
}
