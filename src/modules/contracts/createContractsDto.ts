import {IsInt, IsString} from 'class-validator';

export class CreateContractsDto {
    @IsString()
    client: string;

    @IsString()
    status: string;

    @IsInt()
    ds: number;

    @IsString()
    deadline: string;

    @IsInt()
    object: number;
}