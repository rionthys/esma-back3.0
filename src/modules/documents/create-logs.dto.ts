import {IsIn, IsInt, IsString} from 'class-validator';

export class CreateLogsDto {
    @IsIn(['входящие', 'исходящие', 'переписка'])
    type: string;

    @IsString()
    action: string;

    @IsString()
    path: string;

    @IsInt()
    responsible: number;
}