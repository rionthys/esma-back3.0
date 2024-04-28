import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import * as ExcelJS from 'exceljs';
import * as fs from "fs";
import {PriceRepository} from "../../shared/database/repositories/price.repository";

@Controller('api/upload')
export class UploadController {
    constructor(private readonly priceRepository: PriceRepository) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('file', {limits: {fileSize: 100 * 1024 * 1024}}))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        return {message: 'Файл успешно загружен', fileName: file?.filename};
    }

    @Post('price-list')
    async uploadPriceList(@Body() file) {
        const workbook = new ExcelJS.Workbook();
        console.log(file)
        const fileBuffer = fs.readFileSync(file.path);
        await workbook.xlsx.load(fileBuffer);

        const promises = [];
        workbook.eachSheet((worksheet, sheetId) => {
            let headers;
            const rows = [];
            worksheet.eachRow({includeEmpty: true}, (row, rowNumber) => {
                if (rowNumber === 1) {
                    headers = row.values;
                    this.priceRepository.deleteAll();
                } else {
                    let rowData = {};
                    if (Array.isArray(row.values))
                        row.values.forEach((cellValue, cellIndex) => {
                            if (headers[cellIndex]) {
                                rowData[headers[cellIndex]] = cellValue;
                            }
                        });
                    rows.push({value: rowData})
                }
            });
            console.log(rows);
            promises.push(this.priceRepository.create(rows));
        });

        await Promise.all(promises);
        return {message: 'Файл успешно обработан'};
    }
}
