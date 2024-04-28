import {IsArray, IsIn, IsInt, IsString} from 'class-validator';

export class CreateLogsDto {
    @IsIn(['входящие', 'исходящие', 'переписка'])
    type: string;

    @IsString()
    action: string;

    @IsArray()
    documents: string[];

    @IsInt()
    responsible: number;
}