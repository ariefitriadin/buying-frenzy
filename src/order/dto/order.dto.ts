import { ApiModelProperty } from '@nestjs/swagger';
import {IsNumber, IsDate} from 'class-validator';

export class OrderDto {
    @IsNumber()
    transactionAmount: number

    @IsDate()
    transactionDate: Date
}
