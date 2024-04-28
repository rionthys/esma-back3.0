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
exports.MailsRegisterService = void 0;
const common_1 = require("@nestjs/common");
const mails_registers_repository_1 = require("../../shared/database/repositories/mails-registers.repository");
const affairs_repository_1 = require("../../shared/database/repositories/affairs.repository");
const affairs_logs_repository_1 = require("../../shared/database/repositories/affairs-logs.repository");
const users_repository_1 = require("../../shared/database/repositories/users.repository");
let MailsRegisterService = class MailsRegisterService {
    constructor(mailRegistersRepository, affairsRepository, affairsLogsRepository, usersRepository) {
        this.mailRegistersRepository = mailRegistersRepository;
        this.affairsRepository = affairsRepository;
        this.affairsLogsRepository = affairsLogsRepository;
        this.usersRepository = usersRepository;
    }
    async create(postData) {
        const createDto = postData;
        console.log(createDto);
        const affair = await this.affairsRepository.findOne(+postData.affairId);
        const user = await this.usersRepository.findOne(+postData.responsible);
        await this.affairsLogsRepository.create({
            affairs: affair,
            type: postData.type,
            action: `${postData.type} письмо, трек номер: ${postData.number}, адресат: ${postData.destination}`,
            documents: [],
            responsible: user
        });
        return this.mailRegistersRepository.create({ ...createDto, affair });
    }
    async findAll() {
        const mails = await this.mailRegistersRepository.findAll();
        return mails.map((mail) => {
            return {
                ...mail,
                object: mail?.affair?.object,
                client: mail?.affair?.object?.client
            };
        });
    }
    findOne(id) {
        return this.mailRegistersRepository.findOne(id);
    }
    async update(id, updateDto) {
        return await this.mailRegistersRepository.update(id, updateDto);
    }
    remove(id) {
        return this.mailRegistersRepository.remove(id);
    }
};
exports.MailsRegisterService = MailsRegisterService;
exports.MailsRegisterService = MailsRegisterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mails_registers_repository_1.MailsRegistersRepository,
        affairs_repository_1.AffairsRepository,
        affairs_logs_repository_1.AffairsLogsRepository,
        users_repository_1.UsersRepository])
], MailsRegisterService);
//# sourceMappingURL=mails-register.service.js.map