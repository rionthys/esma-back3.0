"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleModules = void 0;
const common_1 = require("@nestjs/common");
const database_controller_1 = require("./database/database.controller");
const database_service_1 = require("./database/database.service");
const database_module_1 = require("../shared/database/database.module");
const auth_module_1 = require("./authentification/auth.module");
const affairs_module_1 = require("./affairs/affairs.module");
const upload_module_1 = require("./upload/upload.module");
const contracts_module_1 = require("./contracts/contracts.module");
const documents_module_1 = require("./documents/documents.module");
const mails_register_module_1 = require("./mails-registers/mails-register.module");
const deadlines_module_1 = require("./deadlines/deadlines.module");
const mail_module_1 = require("./mail/mail.module");
const clients_module_1 = require("./clients/clients.module");
const price_module_1 = require("./prices/price.module");
const accounts_module_1 = require("./accounts/accounts.module");
let ModuleModules = class ModuleModules {
};
exports.ModuleModules = ModuleModules;
exports.ModuleModules = ModuleModules = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            affairs_module_1.AffairsModule,
            auth_module_1.AuthModules,
            upload_module_1.UploadModule,
            contracts_module_1.ContractsModule,
            documents_module_1.DocumentsModule,
            mails_register_module_1.MailsRegisterModule,
            deadlines_module_1.DeadlinesModule,
            mail_module_1.MailModule,
            clients_module_1.ClientsModule,
            price_module_1.PriceModule,
            accounts_module_1.AccountsModule
        ],
        controllers: [database_controller_1.DatabaseController],
        providers: [database_service_1.DatabaseService],
    })
], ModuleModules);
//# sourceMappingURL=modules.module.js.map