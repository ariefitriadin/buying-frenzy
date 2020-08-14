import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class UserDto {

    @IsString()
    name: string

    @IsNumber()
    cashBalance: number
}
