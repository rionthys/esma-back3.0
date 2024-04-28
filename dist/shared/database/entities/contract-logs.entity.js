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
exports.ContractsLogsEntity = void 0;
const typeorm_1 = require("typeorm");
const contracts_entity_1 = require("./contracts.entity");
const users_entity_1 = require("./users.entity");
let ContractsLogsEntity = class ContractsLogsEntity {
};
exports.ContractsLogsEntity = ContractsLogsEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ContractsLogsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true }),
    __metadata("design:type", String)
], ContractsLogsEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { array: true, nullable: true }),
    __metadata("design:type", Array)
], ContractsLogsEntity.prototype, "document", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], ContractsLogsEntity.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contracts_entity_1.ContractsEntity, contract => contract.logs),
    __metadata("design:type", contracts_entity_1.ContractsEntity)
], ContractsLogsEntity.prototype, "contracts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, { nullable: true }),
    __metadata("design:type", users_entity_1.UsersEntity)
], ContractsLogsEntity.prototype, "responsible", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], ContractsLogsEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], ContractsLogsEntity.prototype, "updated_at", void 0);
exports.ContractsLogsEntity = ContractsLogsEntity = __decorate([
    (0, typeorm_1.Entity)()
], ContractsLogsEntity);
//# sourceMappingURL=contract-logs.entity.js.map