import {Injectable} from '@nestjs/common';
import {AccountsRepository} from "../../shared/database/repositories/accounts.repository";
import {AccountsEntity} from "../../shared/database/entities/accounts.entity";
import {PriceRepository} from "../../shared/database/repositories/price.repository";
import * as path from 'path';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import {AffairsRepository} from "../../shared/database/repositories/affairs.repository";
import {AffairsLogsRepository} from "../../shared/database/repositories/affairs-logs.repository";

const fs = require('fs');
const writtenNumber = require('written-number');
const libre = require('libreoffice-convert');

@Injectable()
export class AccountsService {

    constructor(
        private readonly affairs: AffairsRepository,
        private readonly accountsRepository: AccountsRepository,
        private readonly affairsLogs: AffairsLogsRepository,
        private readonly priceRepository: PriceRepository,
    ) {
    }

    async create(postData: any): Promise<AccountsEntity> {
        const prices = await this.priceRepository.findAll();
        const price = prices.find((service) =>
            Object.values(service.value).includes(postData.service)
        );
        console.log(postData);
        postData.price = price ? price.value[postData.type] : undefined;
        postData.gospos = price ? price.value[postData.status] : undefined;

        const affair = await this.affairs.findOne(postData.affair)
        const replacement = await this.getReplacement(postData, affair);

        postData.invoice = await this.replaceWordInDoc(replacement, postData.type.toLowerCase());
        await this.affairsLogs.create({
            action: 'выставлен счет',
            type: 'исходящие',
            affairs: affair,
            documents: [postData.invoice]
        });
        return await this.accountsRepository.create(postData);
    }

    async findAll() {
        let accounts = await this.accountsRepository.findAll();
        accounts = accounts.map((account) => {
            return {
                ...account,
                client: account?.affair?.object?.client,
            }
        })
        return accounts;
    }

    findOne(id: number): Promise<AccountsEntity> {
        return this.accountsRepository.findOne(id);
    }

    async update(id: number, updateDto: any): Promise<AccountsEntity> {
        updateDto.state = updateDto.state === 'да';
        return await this.accountsRepository.update(id, updateDto);
    }

    async remove(id: number): Promise<void> {
        return this.accountsRepository.remove(id);
    }

    async replaceWordInDoc(replacement: any, type: string) {
        const basePath = path.resolve('/www/esma/esma-back/uploads');
        const sourceFilePath = path.join(basePath, 'invoice_' + type + '.pages');
        const targetDocxPath = path.join(basePath, `${new Date().getTime()}.pages`);
        const targetPdfPath = path.join(basePath, `${new Date().getTime()}.pdf`);

        const content = fs.readFileSync(sourceFilePath, 'binary');

        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        console.log(replacement);

        doc.setData(replacement);

        try {
            doc.render();
        } catch (error) {
            const e = error;
            throw new Error(`Docxtemplater error: ${e.message}`);
        }

        const buf = doc.getZip().generate({type: 'nodebuffer'});
        fs.writeFileSync(path.resolve(__dirname, targetDocxPath), buf);

        try {
            await this.convertToPdf(targetDocxPath, targetPdfPath);
            return targetPdfPath.replace('/www/esma/esma-back/uploads', '');
        } catch (error) {
            console.error('PDF conversion failed:', error);
            throw error;
        }
    }

    convertToPdf(docPath, targetPath) {
        return new Promise((resolve, reject) => {
            const docxContent = fs.readFileSync(docPath);
            libre.convert(docxContent, '.pdf', undefined, (err, done) => {
                if (err) {
                    reject(err);
                } else {
                    fs.writeFileSync(targetPath, done);
                    resolve(targetPath);
                }
            });
        });
    };

    async getReplacement(postData: any, affair) {
        const number = await this.accountsRepository.count();

        const date = new Date(postData.date);
        const options: Intl.DateTimeFormatOptions = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        const formatter = new Intl.DateTimeFormat('ru-RU', options);
        let servicepriceword = postData.type === 'KZT' ? this.numberToWord(postData.price) + ' тенге' : '';
        if (postData.type === 'KZT') {
            servicepriceword = this.numberToWord(postData.price) + ' тенге';
        } else if (postData.type === 'RUB') {
            servicepriceword = this.numberToWord(postData.price) + ' рублей';
        } else if (postData.type === 'EUR') {
            servicepriceword = this.numberToWord(postData.price, 'en') + ' euro';
        } else if (postData.type === 'USD') {
            servicepriceword = this.numberToWord(postData.price, 'en') + ' dollars';
        }
        return {
            affairnumber: affair.number,
            contractnumber: affair?.object?.contracts[0]?.number ? affair?.object?.contracts[0]?.number + ' ' : '',
            servicename: postData.service,
            servicepriceword,
            affairview: affair?.view,
            serviceprice: postData.price,
            clientorgn: affair?.object?.client?.orgn,
            clientkpp: affair?.object?.client?.bin,
            clientbin: affair?.object?.client?.bin,
            clientinn: affair?.object?.client?.inn,
            clientaddress: affair?.object?.client?.address,
            clientname: affair?.object?.client?.name,
            invoicenumber: number + 1,
            invoicedate: formatter.format(date) + ' г.',
        };
    }

    numberToWord(number: string, lang: string = 'ru') {
        writtenNumber.defaults.lang = lang;
        return writtenNumber(+number);
    }
}
