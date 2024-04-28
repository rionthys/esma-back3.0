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
exports.AffairsEntity = void 0;
const typeorm_1 = require("typeorm");
const database_entity_1 = require("./database.entity");
const users_entity_1 = require("./users.entity");
const affairs_logs_entity_1 = require("./affairs-logs.entity");
const mails_registers_entity_1 = require("./mails-registers.entity");
const accounts_entity_1 = require("./accounts.entity");
let AffairsEntity = class AffairsEntity {
};
exports.AffairsEntity = AffairsEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AffairsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], AffairsEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], AffairsEntity.prototype, "view", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], AffairsEntity.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], AffairsEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], AffairsEntity.prototype, "attention", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], AffairsEntity.prototype, "deadline", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity),
    __metadata("design:type", users_entity_1.UsersEntity)
], AffairsEntity.prototype, "subscriber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, { nullable: true }),
    __metadata("design:type", users_entity_1.UsersEntity)
], AffairsEntity.prototype, "responsible", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => database_entity_1.DatabaseEntity, databaseEntity => databaseEntity.affairs),
    __metadata("design:type", database_entity_1.DatabaseEntity)
], AffairsEntity.prototype, "object", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => affairs_logs_entity_1.AffairsLogsEntity, affairsLogs => affairsLogs.affairs),
    __metadata("design:type", Array)
], AffairsEntity.prototype, "logs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => mails_registers_entity_1.MailsRegistersEntity, mail => mail.affair),
    __metadata("design:type", Array)
], AffairsEntity.prototype, "mails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => accounts_entity_1.AccountsEntity, accounts => accounts.affair),
    __metadata("design:type", Array)
], AffairsEntity.prototype, "accounts", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], AffairsEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], AffairsEntity.prototype, "updated_at", void 0);
exports.AffairsEntity = AffairsEntity = __decorate([
    (0, typeorm_1.Entity)()
], AffairsEntity);
//# sourceMappingURL=affairs.entity.js.map