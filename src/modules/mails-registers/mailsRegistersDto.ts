import {IsString} from 'class-validator';

class ContentDto {
    @IsString()
    document: string;

    @IsString()
    description: string;
}

export class MailsRegistersDto {
    @IsString()
    type: string;

    @IsString()
    number: string;

    @IsString()
    services: string;

    @IsString()
    destination: string;

    @IsString()
    address?: string;

    @IsString()
    responsible?: string;

    @IsString()
    affairId?: string;

    @IsString()
    content: string;
}
