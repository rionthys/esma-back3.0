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
exports.AccountsEntity = void 0;
const typeorm_1 = require("typeorm");
const clients_entity_1 = require("./clients.entity");
const affairs_entity_1 = require("./affairs.entity");
let AccountsEntity = class AccountsEntity {
};
exports.AccountsEntity = AccountsEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AccountsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], AccountsEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], AccountsEntity.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true }),
    __metadata("design:type", String)
], AccountsEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => affairs_entity_1.AffairsEntity, affair => affair.accounts),
    __metadata("design:type", affairs_entity_1.AffairsEntity)
], AccountsEntity.prototype, "affair", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], AccountsEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], AccountsEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clients_entity_1.ClientsEntity),
    __metadata("design:type", clients_entity_1.ClientsEntity)
], AccountsEntity.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], AccountsEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], AccountsEntity.prototype, "updated_at", void 0);
exports.AccountsEntity = AccountsEntity = __decorate([
    (0, typeorm_1.Entity)()
], AccountsEntity);
//# sourceMappingURL=accounts.entity.js.map