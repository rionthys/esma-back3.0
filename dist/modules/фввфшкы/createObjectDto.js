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
exports.CreateObjectDTO = void 0;
const class_validator_1 = require("class-validator");
class CreateObjectDTO {
}
exports.CreateObjectDTO = CreateObjectDTO;
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateObjectDTO.prototype, "trademark", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateObjectDTO.prototype, "territory", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateObjectDTO.prototype, "nonProtectedElements", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateObjectDTO.prototype, "ownerNameAndAddress", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateObjectDTO.prototype, "applicationNumber", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateObjectDTO.prototype, "dateNumber", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateObjectDTO.prototype, "numberRegistration", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateObjectDTO.prototype, "dateRegistration", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateObjectDTO.prototype, "priorityNumber", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateObjectDTO.prototype, "priorityDate1", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateObjectDTO.prototype, "priorityDate2", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateObjectDTO.prototype, "niceClasses", void 0);
//# sourceMappingURL=createObjectDto.js.map