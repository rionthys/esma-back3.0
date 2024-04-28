"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../../shared/database/repositories/users.repository");
const contracts_logs_repository_1 = require("../../shared/database/repositories/contracts-logs.repository");
const documents_logs_repository_1 = require("../../shared/database/repositories/documents-logs.repository");
const affairs_logs_repository_1 = require("../../shared/database/repositories/affairs-logs.repository");
const affairs_repository_1 = require("../../shared/database/repositories/affairs.repository");
let AuthService = class AuthService {
    constructor(users, affairs, affairsLogs, documentsLogs, contractsLogs) {
        this.users = users;
        this.affairs = affairs;
        this.affairsLogs = affairsLogs;
        this.documentsLogs = documentsLogs;
        this.contractsLogs = contractsLogs;
    }
    async registration(postData) {
        const user = { ...postData };
        const newUser = await this.users.create(user);
        return { auth: newUser !== undefined && newUser !== null, name: newUser.name, rights: newUser.rights };
    }
    async authentication(postData) {
        const users = await this.users.findAll();
        const user = users.find((user) => user.login === postData.login && user.password === postData.password);
        return { auth: user !== undefined && user !== null, name: user?.name, rights: user?.rights, id: user.id };
    }
    async get() {
        const users = await this.users.findAll();
        return users.map((user) => {
            return { name: user.name, id: user.id, rights: user.rights };
        });
    }
    setRights(id, data) {
        return this.users.update(id, { rights: data });
    }
    async remove(id) {
        const userPromise = this.users.findOne(id);
        const user = await userPromise;
        const affairsPromise = this.affairs.findByWhere({ responsible: user });
        const affairLogsPromise = this.affairsLogs.findByWhere({ responsible: user });
        const documentsLogsPromise = this.documentsLogs.findByWhere({ responsible: user });
        const contractsLogsPromise = this.contractsLogs.findByWhere({ responsible: user });
        const [affairs, affairLogs, documentsLogs, contractsLogs] = await Promise.all([affairsPromise, affairLogsPromise, documentsLogsPromise, contractsLogsPromise]);
        const updateAffairsPromise = this.affairs.bulkUpdateResponsible(user.id, null);
        const updateAffairLogsPromise = this.affairsLogs.bulkUpdateResponsible(user.id, null);
        const updateDocumentsLogsPromise = this.documentsLogs.bulkUpdateResponsible(user.id, null);
        const updateContractsLogsPromise = this.contractsLogs.bulkUpdateResponsible(user.id, null);
        await Promise.all([updateAffairsPromise, updateAffairLogsPromise, updateDocumentsLogsPromise, updateContractsLogsPromise]);
        return this.users.remove(id);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        affairs_repository_1.AffairsRepository,
        affairs_logs_repository_1.AffairsLogsRepository,
        documents_logs_repository_1.DocumentsLogsRepository,
        contracts_logs_repository_1.ContractsLogsRepository])
], AuthService);
//# sourceMappingURL=auth.service.js.map