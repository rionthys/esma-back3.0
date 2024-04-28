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
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const database_entity_repository_1 = require("../../shared/database/repositories/database-entity.repository");
const affairs_repository_1 = require("../../shared/database/repositories/affairs.repository");
let DatabaseService = class DatabaseService {
    constructor(databaseRepository, affairsRepository) {
        this.databaseRepository = databaseRepository;
        this.affairsRepository = affairsRepository;
    }
    create(postData) {
        const createDto = postData;
        return this.databaseRepository.create(createDto);
    }
    findAll() {
        return this.databaseRepository.findAll();
    }
    findOne(id) {
        return this.databaseRepository.findOne(id);
    }
    async update(id, updateDto) {
        return await this.databaseRepository.update(id, updateDto);
    }
    async updateAffairs(id, updateDto) {
        const affairToAdd = await this.affairsRepository.findOneByWhere({ id: updateDto.affair });
        const objectToUpdate = await this.databaseRepository.findAffairs(id);
        const updatedAffairs = objectToUpdate[0].affairs && objectToUpdate[0].affairs.length > 0 ? [...objectToUpdate[0].affairs, affairToAdd] : [affairToAdd];
        return await this.databaseRepository.update(id, { affairs: updatedAffairs });
    }
    async remove(id) {
        await this.databaseRepository.update(id, { affairs: [], contracts: [], documents: [] });
        return this.databaseRepository.remove(id);
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_entity_repository_1.DatabaseRepository,
        affairs_repository_1.AffairsRepository])
], DatabaseService);
//# sourceMappingURL=database.service.js.map