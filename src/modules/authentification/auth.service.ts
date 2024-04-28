import {Injectable} from '@nestjs/common';
import {UsersRepository} from "../../shared/database/repositories/users.repository";
import {UserDto} from "./user.dto";
import {ContractsLogsRepository} from "../../shared/database/repositories/contracts-logs.repository";
import {DocumentsLogsRepository} from "../../shared/database/repositories/documents-logs.repository";
import {AffairsLogsRepository} from "../../shared/database/repositories/affairs-logs.repository";
import {AffairsRepository} from "../../shared/database/repositories/affairs.repository";

@Injectable()
export class AuthService {
    constructor(
        private readonly users: UsersRepository,
        private readonly affairs: AffairsRepository,
        private readonly affairsLogs: AffairsLogsRepository,
        private readonly documentsLogs: DocumentsLogsRepository,
        private readonly contractsLogs: ContractsLogsRepository,
    ) {
    }

    async registration(postData: UserDto) {
        const user = {...postData};
        const newUser = await this.users.create(user);
        return {auth: newUser !== undefined && newUser !== null, name: newUser.name, rights: newUser.rights};
    }

    async authentication(postData) {
        const users = await this.users.findAll();

        const user = users.find((user) => user.login === postData.login && user.password === postData.password);

        return {auth: user !== undefined && user !== null, name: user?.name, rights: user?.rights, id: user.id};
    }

    async get() {
        const users = await this.users.findAll();

        return users.map((user) => {
            return {name: user.name, id: user.id, rights: user.rights}
        })
    }

    setRights(id: number, data: any) {
        return this.users.update(id, {rights: data})
    }

    async remove(id: number) {
        const userPromise = this.users.findOne(id);

        const user = await userPromise;

        const affairsPromise = this.affairs.findByWhere({responsible: user});
        const affairLogsPromise = this.affairsLogs.findByWhere({responsible: user});
        const documentsLogsPromise = this.documentsLogs.findByWhere({responsible: user});
        const contractsLogsPromise = this.contractsLogs.findByWhere({responsible: user});

        const [affairs, affairLogs, documentsLogs, contractsLogs] = await Promise.all([affairsPromise, affairLogsPromise, documentsLogsPromise, contractsLogsPromise]);

        const updateAffairsPromise = this.affairs.bulkUpdateResponsible(user.id, null);
        const updateAffairLogsPromise = this.affairsLogs.bulkUpdateResponsible(user.id, null);
        const updateDocumentsLogsPromise = this.documentsLogs.bulkUpdateResponsible(user.id, null);
        const updateContractsLogsPromise = this.contractsLogs.bulkUpdateResponsible(user.id, null);

        await Promise.all([updateAffairsPromise, updateAffairLogsPromise, updateDocumentsLogsPromise, updateContractsLogsPromise]);

        return this.users.remove(id);

    }
}
