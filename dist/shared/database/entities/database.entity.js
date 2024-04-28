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
exports.DatabaseEntity = void 0;
const typeorm_1 = require("typeorm");
const affairs_entity_1 = require("./affairs.entity");
const contracts_entity_1 = require("./contracts.entity");
const documents_entity_1 = require("./documents.entity");
const clients_entity_1 = require("./clients.entity");
let DatabaseEntity = class DatabaseEntity {
};
exports.DatabaseEntity = DatabaseEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DatabaseEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], DatabaseEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], DatabaseEntity.prototype, "trademark", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], DatabaseEntity.prototype, "territory", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DatabaseEntity.prototype, "nonProtectedElements", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clients_entity_1.ClientsEntity),
    __metadata("design:type", clients_entity_1.ClientsEntity)
], DatabaseEntity.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], DatabaseEntity.prototype, "numberOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], DatabaseEntity.prototype, "dateOrder", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], DatabaseEntity.prototype, "numberRegistration", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], DatabaseEntity.prototype, "dateRegistration", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], DatabaseEntity.prototype, "datePublication", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], DatabaseEntity.prototype, "priorityNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], DatabaseEntity.prototype, "priorityDate1", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], DatabaseEntity.prototype, "priorityDate2", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], DatabaseEntity.prototype, "niceClasses", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], DatabaseEntity.prototype, "validityStart", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], DatabaseEntity.prototype, "validityEnd", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], DatabaseEntity.prototype, "extensionStart", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], DatabaseEntity.prototype, "extensionEnd", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => affairs_entity_1.AffairsEntity, affairs => affairs.object),
    __metadata("design:type", Array)
], DatabaseEntity.prototype, "affairs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => contracts_entity_1.ContractsEntity, contract => contract.object),
    __metadata("design:type", Array)
], DatabaseEntity.prototype, "contracts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => documents_entity_1.DocumentsEntity, document => document.object),
    __metadata("design:type", Array)
], DatabaseEntity.prototype, "documents", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], DatabaseEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], DatabaseEntity.prototype, "updated_at", void 0);
exports.DatabaseEntity = DatabaseEntity = __decorate([
    (0, typeorm_1.Entity)()
], DatabaseEntity);
//# sourceMappingURL=database.entity.js.map