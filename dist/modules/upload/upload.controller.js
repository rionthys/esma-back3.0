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
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const ExcelJS = require("exceljs");
const fs = require("fs");
const price_repository_1 = require("../../shared/database/repositories/price.repository");
let UploadController = class UploadController {
    constructor(priceRepository) {
        this.priceRepository = priceRepository;
    }
    uploadFile(file) {
        return { message: 'Файл успешно загружен', fileName: file.filename };
    }
    async uploadPriceList(file) {
        const workbook = new ExcelJS.Workbook();
        console.log(file);
        const fileBuffer = fs.readFileSync(file.path);
        await workbook.xlsx.load(fileBuffer);
        const promises = [];
        workbook.eachSheet((worksheet, sheetId) => {
            let headers;
            const rows = [];
            worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
                if (rowNumber === 1) {
                    headers = row.values;
                    this.priceRepository.deleteAll();
                }
                else {
                    let rowData = {};
                    if (Array.isArray(row.values))
                        row.values.forEach((cellValue, cellIndex) => {
                            if (headers[cellIndex]) {
                                rowData[headers[cellIndex]] = cellValue;
                            }
                        });
                    rows.push({ value: rowData });
                }
            });
            console.log(rows);
            promises.push(this.priceRepository.create(rows));
        });
        await Promise.all(promises);
        return { message: 'Файл успешно обработан' };
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { limits: { fileSize: 100 * 1024 * 1024 } })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('price-list'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadPriceList", null);
exports.UploadController = UploadController = __decorate([
    (0, common_1.Controller)('api/upload'),
    __metadata("design:paramtypes", [price_repository_1.PriceRepository])
], UploadController);
//# sourceMappingURL=upload.controller.js.map