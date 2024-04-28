"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const database_entity_repository_1 = require("./repositories/database-entity.repository");
const database_entity_1 = require("./entities/database.entity");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./entities/users.entity");
const users_repository_1 = require("./repositories/users.repository");
const affairs_entity_1 = require("./entities/affairs.entity");
const affairs_repository_1 = require("./repositories/affairs.repository");
const mails_registers_entity_1 = require("./entities/mails-registers.entity");
const affairs_logs_repository_1 = require("./repositories/affairs-logs.repository");
const affairs_logs_entity_1 = require("./entities/affairs-logs.entity");
const contracts_repository_1 = require("./repositories/contracts.repository");
const contracts_entity_1 = require("./entities/contracts.entity");
const contracts_logs_repository_1 = require("./repositories/contracts-logs.repository");
const contract_logs_entity_1 = require("./entities/contract-logs.entity");
const documents_logs_entity_1 = require("./entities/documents-logs.entity");
const documents_entity_1 = require("./entities/documents.entity");
const documents_repository_1 = require("./repositories/documents.repository");
const documents_logs_repository_1 = require("./repositories/documents-logs.repository");
const mails_registers_repository_1 = require("./repositories/mails-registers.repository");
const clients_entity_1 = require("./entities/clients.entity");
const clients_repository_1 = require("./repositories/clients.repository");
const accounts_repository_1 = require("./repositories/accounts.repository");
const accounts_entity_1 = require("./entities/accounts.entity");
const price_entity_1 = require("./entities/price.entity");
const price_repository_1 = require("./repositories/price.repository");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                database_entity_1.DatabaseEntity,
                users_entity_1.UsersEntity,
                affairs_entity_1.AffairsEntity,
                mails_registers_entity_1.MailsRegistersEntity,
                affairs_logs_entity_1.AffairsLogsEntity,
                contracts_entity_1.ContractsEntity,
                contract_logs_entity_1.ContractsLogsEntity,
                documents_logs_entity_1.DocumentsLogsEntity,
                documents_entity_1.DocumentsEntity,
                clients_entity_1.ClientsEntity,
                accounts_entity_1.AccountsEntity,
                price_entity_1.PriceEntity
            ])],
        controllers: [],
        providers: [
            database_entity_repository_1.DatabaseRepository,
            users_repository_1.UsersRepository,
            affairs_repository_1.AffairsRepository,
            affairs_logs_repository_1.AffairsLogsRepository,
            contracts_repository_1.ContractsRepository,
            contracts_logs_repository_1.ContractsLogsRepository,
            documents_repository_1.DocumentsRepository,
            documents_logs_repository_1.DocumentsLogsRepository,
            mails_registers_repository_1.MailsRegistersRepository,
            clients_repository_1.ClientsRepository,
            accounts_repository_1.AccountsRepository,
            price_repository_1.PriceRepository
        ],
        exports: [
            database_entity_repository_1.DatabaseRepository,
            users_repository_1.UsersRepository,
            affairs_repository_1.AffairsRepository,
            affairs_logs_repository_1.AffairsLogsRepository,
            contracts_repository_1.ContractsRepository,
            contracts_logs_repository_1.ContractsLogsRepository,
            documents_repository_1.DocumentsRepository,
            documents_logs_repository_1.DocumentsLogsRepository,
            mails_registers_repository_1.MailsRegistersRepository,
            clients_repository_1.ClientsRepository,
            accounts_repository_1.AccountsRepository,
            price_repository_1.PriceRepository
        ]
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map