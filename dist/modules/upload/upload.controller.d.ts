/// <reference types="multer" />
import { PriceRepository } from "../../shared/database/repositories/price.repository";
export declare class UploadController {
    private readonly priceRepository;
    constructor(priceRepository: PriceRepository);
    uploadFile(file: Express.Multer.File): {
        message: string;
        fileName: string;
    };
    uploadPriceList(file: any): Promise<{
        message: string;
    }>;
}
