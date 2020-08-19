import { IsString, IsNumber, MaxLength } from 'class-validator';

export class UserDto {

    @IsNumber()
    id: number

    @IsString()
    @MaxLength(300)
    name: string;

    @IsNumber()
    cashBalance: number;
}
