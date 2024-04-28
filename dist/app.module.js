"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const modules_module_1 = require("./modules/modules.module");
const typeorm_1 = require("@nestjs/typeorm");
const database_entity_1 = require("./shared/database/entities/database.entity");
const users_entity_1 = require("./shared/database/entities/users.entity");
const affairs_entity_1 = require("./shared/database/entities/affairs.entity");
const mails_registers_entity_1 = require("./shared/database/entities/mails-registers.entity");
const affairs_logs_entity_1 = require("./shared/database/entities/affairs-logs.entity");
const contracts_entity_1 = require("./shared/database/entities/contracts.entity");
const documents_entity_1 = require("./shared/database/entities/documents.entity");
const documents_logs_entity_1 = require("./shared/database/entities/documents-logs.entity");
const deadlines_entity_1 = require("./shared/database/entities/deadlines.entity");
const contract_logs_entity_1 = require("./shared/database/entities/contract-logs.entity");
const clients_service_1 = require("./modules/clients/clients.service");
const clients_module_1 = require("./modules/clients/clients.module");
const clients_entity_1 = require("./shared/database/entities/clients.entity");
const accounts_entity_1 = require("./shared/database/entities/accounts.entity");
const price_entity_1 = require("./shared/database/entities/price.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'esma_user',
                password: 'Wekeser2024!a',
                database: 'esma',
                entities: [
                    database_entity_1.DatabaseEntity,
                    affairs_entity_1.AffairsEntity,
                    users_entity_1.UsersEntity,
                    mails_registers_entity_1.MailsRegistersEntity,
                    affairs_logs_entity_1.AffairsLogsEntity,
                    contracts_entity_1.ContractsEntity,
                    documents_entity_1.DocumentsEntity,
                    deadlines_entity_1.DeadlinesEntity,
                    documents_logs_entity_1.DocumentsLogsEntity,
                    contract_logs_entity_1.ContractsLogsEntity,
                    clients_entity_1.ClientsEntity,
                    accounts_entity_1.AccountsEntity,
                    price_entity_1.PriceEntity
                ],
                synchronize: true,
            }),
            modules_module_1.ModuleModules,
            clients_module_1.ClientsModule
        ],
        controllers: [],
        providers: [clients_service_1.ClientsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map