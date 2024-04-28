import {IsInt, ValidateNested} from "class-validator";

export class UpdateObjectDto {
    @ValidateNested()
    @IsInt()
    affair: number;
}