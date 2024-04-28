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
exports.ContractsEntity = void 0;
const typeorm_1 = require("typeorm");
const database_entity_1 = require("./database.entity");
const contract_logs_entity_1 = require("./contract-logs.entity");
const clients_entity_1 = require("./clients.entity");
let ContractsEntity = class ContractsEntity {
};
exports.ContractsEntity = ContractsEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ContractsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clients_entity_1.ClientsEntity),
    __metadata("design:type", clients_entity_1.ClientsEntity)
], ContractsEntity.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], ContractsEntity.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], ContractsEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], ContractsEntity.prototype, "ds", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { nullable: true }),
    __metadata("design:type", Date)
], ContractsEntity.prototype, "deadline", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => database_entity_1.DatabaseEntity, object => object.contracts),
    __metadata("design:type", database_entity_1.DatabaseEntity)
], ContractsEntity.prototype, "object", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => contract_logs_entity_1.ContractsLogsEntity, logs => logs.contracts),
    __metadata("design:type", Array)
], ContractsEntity.prototype, "logs", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], ContractsEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], ContractsEntity.prototype, "updated_at", void 0);
exports.ContractsEntity = ContractsEntity = __decorate([
    (0, typeorm_1.Entity)()
], ContractsEntity);
//# sourceMappingURL=contracts.entity.js.map