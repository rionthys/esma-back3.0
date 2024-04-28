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
exports.AffairsController = void 0;
const common_1 = require("@nestjs/common");
const affairs_service_1 = require("./affairs.service");
const createAffairsDto_1 = require("./createAffairsDto");
const create_logs_dto_1 = require("./create-logs.dto");
let AffairsController = class AffairsController {
    constructor(affairsService) {
        this.affairsService = affairsService;
    }
    create(createDto) {
        return this.affairsService.create(createDto);
    }
    createLogs(id, createDto) {
        return this.affairsService.createLogs(+id, createDto);
    }
    findAll() {
        return this.affairsService.findAll();
    }
    findLogs(id) {
        return this.affairsService.findLogs(+id);
    }
    close(id, data) {
        return this.affairsService.update(+id, { status: 'завершено', user: data.user.id });
    }
    findOne(id) {
        return this.affairsService.findOne(+id);
    }
    getByObjectId(id) {
        return this.affairsService.getByObjectId(+id);
    }
    getByContractId(id) {
        return this.affairsService.getByContractId(+id);
    }
    getByDocumentId(id) {
        return this.affairsService.getByDocumentId(+id);
    }
    update(id, updateDto) {
        return this.affairsService.update(+id, updateDto);
    }
    remove(id) {
        return this.affairsService.remove(+id);
    }
};
exports.AffairsController = AffairsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createAffairsDto_1.CreateAffairsDto]),
    __metadata("design:returntype", Promise)
], AffairsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_logs_dto_1.CreateLogsDto]),
    __metadata("design:returntype", void 0)
], AffairsController.prototype, "createLogs", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AffairsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id/logs'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AffairsController.prototype, "findLogs", null);
__decorate([
    (0, common_1.Put)(':id/close'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AffairsController.prototype, "close", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AffairsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('object/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AffairsController.prototype, "getByObjectId", null);
__decorate([
    (0, common_1.Get)('contract/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AffairsController.prototype, "getByContractId", null);
__decorate([
    (0, common_1.Get)('document/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AffairsController.prototype, "getByDocumentId", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AffairsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AffairsController.prototype, "remove", null);
exports.AffairsController = AffairsController = __decorate([
    (0, common_1.Controller)('api/affairs'),
    __metadata("design:paramtypes", [affairs_service_1.AffairsService])
], AffairsController);
//# sourceMappingURL=affairs.controller.js.map