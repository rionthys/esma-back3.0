import {Injectable} from '@nestjs/common';
import {AffairsRepository} from "../../shared/database/repositories/affairs.repository";
import {AccountsRepository} from "../../shared/database/repositories/accounts.repository";

@Injectable()
export class DeadlinesService {
    constructor(
        private readonly affairsRepository: AffairsRepository,
        private readonly accountsRepository: AccountsRepository
    ) {
    }

    async findAll() {
        const accounts = await this.accountsRepository.findAll();
        const actions = await this.affairsRepository.findAllLogs();
        return {
            accounts, actions: actions.map((action) => {
                return {...action, client: action?.object?.client}
            })
        }

        // return affairs.map((affair) => {
        //     const pay = affair.logs.filter(
        //         (log) => log.action.includes('оплата')).length;
        //     return {
        //         ...affair,
        //         actions: {
        //             pay,
        //             all: affair.logs.length,
        //         }
        //     }
        // });

        // const objects = await this.objectsRepository.findAll();
        //
        // const results = await Promise.all(
        //     objects.map(async (object) => {
        //         const documentsIds =
        //             object.documents.map((document) => document.id);
        //         const contractsIds =
        //             object.contracts.map((contract) => contract.id);
        //         const affairsIds =
        //             object.affairs.map((affair) => affair.id);
        //
        //         const [
        //             affairsAll,
        //             affairsPay,
        //             contractsAll,
        //             contractsPay,
        //             documentsAll,
        //             documentsPay
        //         ] = await Promise.all([
        //                 this.affairsRepository.countByAffairsIds(affairsIds),
        //                 this.affairsRepository.countByAffairsIdsAndType(affairsIds, 'оплата'),
        //                 this.contractsRepository.countByContractsIds(contractsIds),
        //                 this.contractsRepository.countByContractsIdsAndType(contractsIds, 'оплата'),
        //                 this.documentsRepository.countByDocumentsIds(documentsIds),
        //                 this.documentsRepository.countByDocumentsIdsAndType(documentsIds, 'оплата'),
        //             ]);
        //
        //         const actions = {
        //             affairs: {all: affairsAll, pay: affairsPay},
        //             contracts: {all: contractsAll, pay: contractsPay},
        //             documents: {all: documentsAll, pay: documentsPay},
        //         };
        //
        //
        //         return {
        //             // name: object.name,
        //             // client: object.client,
        //             // numberOrder: object.numberOrder,
        //             // view: object.affairs.map((affair ) => affair.view).join(' '),
        //             // validityEnd: object.dateOrder,
        //             // validityStart: object.validityStart,
        //             // numberRegistration: object.numberRegistration,
        //             // dateRegistration: object.dateRegistration,
        //             // datePublication: object.datePublication,
        //             // priorityNumber: object.priorityNumber,
        //             actions,
        //         };
        //     }));
        //
        // return results;
    }
}
