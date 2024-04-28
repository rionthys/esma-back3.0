import {IsInt, IsString} from 'class-validator';

export class CreateDocumentsDto {
    @IsString()
    applicant: string;

    @IsString()
    client: string;

    @IsString()
    status: string;

    @IsString()
    lang: string;

    @IsString()
    document: string;

    @IsString()
    deadline: string;

    @IsInt()
    object: number;
}