import {IsOptional, IsString, ValidateNested} from 'class-validator';

export class UserDto {
    @ValidateNested()
    @IsString()
    name: string;

    @ValidateNested()
    @IsString()
    password: string;

    @ValidateNested()
    @IsString()
    login: string;

    @IsOptional()
    rights: object;
}