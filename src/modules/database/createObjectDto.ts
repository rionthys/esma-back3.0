import {IsString, ValidateNested} from 'class-validator';

export class CreateObjectDTO {
    @ValidateNested()
    @IsString()
    trademark: string;

    @ValidateNested()
    @IsString()
    name: string;

    @ValidateNested()
    @IsString()
    territory: string;

    @ValidateNested()
    @IsString()
    nonProtectedElements: string;

    @ValidateNested()
    @IsString()
    ownerNameAndAddress: string;

    @ValidateNested()
    @IsString()
    applicationNumber: string;

    @ValidateNested()
    @IsString()
    dateNumber: string;

    @ValidateNested()
    @IsString()
    numberRegistration: string;

    @ValidateNested()
    @IsString()
    dateRegistration: string;

    @ValidateNested()
    @IsString()
    datePublication: string;

    @ValidateNested()
    @IsString()
    priorityNumber: string;

    @ValidateNested()
    @IsString()
    priorityDate1: string;

    @ValidateNested()
    @IsString()
    priorityDate2: string;

    @ValidateNested()
    @IsString()
    validityStart: string;

    @ValidateNested()
    @IsString()
    validityEnd: string;

    @ValidateNested()
    @IsString()
    extensionStart: string;

    @ValidateNested()
    @IsString()
    extensionEnd: string;

    @ValidateNested()
    @IsString()
    niceClasses: string;
}