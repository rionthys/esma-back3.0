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
exports.MailsRegistersRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const mails_registers_entity_1 = require("../entities/mails-registers.entity");
let MailsRegistersRepository = class MailsRegistersRepository {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    create(createDto) {
        const entity = this.authRepository.create(createDto);
        return this.authRepository.save(entity);
    }
    findAll() {
        return this.authRepository.find({
            relations: ['affair', 'affair.object', 'affair.object.client'],
        });
    }
    findOne(id) {
        return this.authRepository.findOneBy({ id });
    }
    findOneByWhere(where) {
        return this.authRepository.findOneBy(where);
    }
    async update(id, updateDto) {
        let entity = await this.authRepository.findOneBy({ id });
        if (!entity) {
            throw new Error(`Entity not found`);
        }
        entity = this.authRepository.merge(entity, updateDto);
        return this.authRepository.save(entity);
    }
    remove(id) {
        return this.authRepository.delete(id).then(() => {
        });
    }
};
exports.MailsRegistersRepository = MailsRegistersRepository;
exports.MailsRegistersRepository = MailsRegistersRepository = __decorate([
    (0, typeorm_1.EntityRepository)(mails_registers_entity_1.MailsRegistersEntity),
    __param(0, (0, typeorm_2.InjectRepository)(mails_registers_entity_1.MailsRegistersEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MailsRegistersRepository);
//# sourceMappingURL=mails-registers.repository.js.map