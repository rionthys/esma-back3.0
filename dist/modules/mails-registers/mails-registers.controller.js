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
exports.MailsRegistersController = void 0;
const common_1 = require("@nestjs/common");
const mails_register_service_1 = require("./mails-register.service");
const mailsRegistersDto_1 = require("./mailsRegistersDto");
let MailsRegistersController = class MailsRegistersController {
    constructor(mailsRegisterService) {
        this.mailsRegisterService = mailsRegisterService;
    }
    create(createDto) {
        return this.mailsRegisterService.create(createDto);
    }
    findAll() {
        return this.mailsRegisterService.findAll();
    }
    findOne(id) {
        return this.mailsRegisterService.findOne(+id);
    }
    update(id, updateDto) {
        return this.mailsRegisterService.update(+id, updateDto);
    }
    remove(id) {
        return this.mailsRegisterService.remove(+id);
    }
};
exports.MailsRegistersController = MailsRegistersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mailsRegistersDto_1.MailsRegistersDto]),
    __metadata("design:returntype", Promise)
], MailsRegistersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MailsRegistersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MailsRegistersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MailsRegistersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MailsRegistersController.prototype, "remove", null);
exports.MailsRegistersController = MailsRegistersController = __decorate([
    (0, common_1.Controller)('api/mails-registery'),
    __metadata("design:paramtypes", [mails_register_service_1.MailsRegisterService])
], MailsRegistersController);
//# sourceMappingURL=mails-registers.controller.js.map