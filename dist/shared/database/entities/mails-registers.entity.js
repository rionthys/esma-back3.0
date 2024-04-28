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
exports.MailsRegistersEntity = void 0;
const typeorm_1 = require("typeorm");
const affairs_entity_1 = require("./affairs.entity");
let MailsRegistersEntity = class MailsRegistersEntity {
};
exports.MailsRegistersEntity = MailsRegistersEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MailsRegistersEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true }),
    __metadata("design:type", String)
], MailsRegistersEntity.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], MailsRegistersEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], MailsRegistersEntity.prototype, "services", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], MailsRegistersEntity.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], MailsRegistersEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { nullable: true }),
    __metadata("design:type", String)
], MailsRegistersEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true }),
    __metadata("design:type", String)
], MailsRegistersEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => affairs_entity_1.AffairsEntity, affair => affair.mails),
    __metadata("design:type", affairs_entity_1.AffairsEntity)
], MailsRegistersEntity.prototype, "affair", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], MailsRegistersEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], MailsRegistersEntity.prototype, "updated_at", void 0);
exports.MailsRegistersEntity = MailsRegistersEntity = __decorate([
    (0, typeorm_1.Entity)()
], MailsRegistersEntity);
//# sourceMappingURL=mails-registers.entity.js.map