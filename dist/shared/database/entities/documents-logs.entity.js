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
exports.DocumentsLogsEntity = void 0;
const typeorm_1 = require("typeorm");
const documents_entity_1 = require("./documents.entity");
const users_entity_1 = require("./users.entity");
let DocumentsLogsEntity = class DocumentsLogsEntity {
};
exports.DocumentsLogsEntity = DocumentsLogsEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DocumentsLogsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true }),
    __metadata("design:type", String)
], DocumentsLogsEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], DocumentsLogsEntity.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true }),
    __metadata("design:type", String)
], DocumentsLogsEntity.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, { nullable: true }),
    __metadata("design:type", users_entity_1.UsersEntity)
], DocumentsLogsEntity.prototype, "responsible", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => documents_entity_1.DocumentsEntity, documents => documents.logs),
    __metadata("design:type", documents_entity_1.DocumentsEntity)
], DocumentsLogsEntity.prototype, "document", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], DocumentsLogsEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], DocumentsLogsEntity.prototype, "updated_at", void 0);
exports.DocumentsLogsEntity = DocumentsLogsEntity = __decorate([
    (0, typeorm_1.Entity)()
], DocumentsLogsEntity);
//# sourceMappingURL=documents-logs.entity.js.map