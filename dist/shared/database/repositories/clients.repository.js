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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const clients_entity_1 = require("../entities/clients.entity");
let ClientsRepository = class ClientsRepository {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository;
    }
    create(createDto) {
        const entity = this.clientsRepository.create(createDto);
        return this.clientsRepository.save(entity);
    }
    findAll() {
        return this.clientsRepository.find();
    }
    async update(id, updateDto) {
        let entity = await this.clientsRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.clientsRepository.merge(entity, updateDto);
        return this.clientsRepository.save(entity);
    }
    async remove(id) {
        return this.clientsRepository.delete(id).then(() => {
        });
    }
};
exports.ClientsRepository = ClientsRepository;
exports.ClientsRepository = ClientsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(clients_entity_1.ClientsEntity),
    __param(0, (0, typeorm_2.InjectRepository)(clients_entity_1.ClientsEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ClientsRepository);
//# sourceMappingURL=clients.repository.js.map