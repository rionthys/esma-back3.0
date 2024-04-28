import {IsInt, IsString, ValidateNested} from 'class-validator';
import {UsersEntity} from "../../shared/database/entities/users.entity";

export class CreateAffairsDto {
    @ValidateNested()
    @IsString()
    view: string;

    @ValidateNested()
    @IsString()
    name: string;

    @ValidateNested()
    @IsInt()
    object: number;

    @ValidateNested()
    @IsString()
    type: string;

    @ValidateNested()
    @IsString()
    status: string;

    @ValidateNested()
    @IsString()
    deadlines: string;

    @IsInt()
    subscriber: UsersEntity;

    @IsInt()
    responsible: UsersEntity;

    @IsString()
    attention: string;

    @ValidateNested()
    @IsString()
    client: string;
}