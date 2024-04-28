import { PriceService } from "./price.service";
import { CreateAffairsDto } from "../affairs/createAffairsDto";
import { PriceEntity } from "../../shared/database/entities/price.entity";
export declare class PriceController {
    private readonly priceService;
    constructor(priceService: PriceService);
    findAll(): Promise<PriceEntity[]>;
    create(createDto: CreateAffairsDto): Promise<PriceEntity | PriceEntity[]>;
    findOne(id: string): Promise<PriceEntity>;
    update(id: string, updateDto: any): Promise<PriceEntity>;
    remove(id: string): Promise<void>;
}
