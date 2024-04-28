import { AffairsEntity } from "./affairs.entity";
export declare class MailsRegistersEntity {
    id: number;
    number: string;
    type: string;
    services: string;
    destination: string;
    address: string;
    date: string;
    content: string;
    affair: AffairsEntity;
    created_at: Date;
    updated_at: Date;
}
