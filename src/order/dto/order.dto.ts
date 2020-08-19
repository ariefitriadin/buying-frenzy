import {IsNumber, IsDate, IsString, MaxLength} from 'class-validator';
export class OrderDto {

    @IsString()
    @MaxLength(300)
    dishName: string;

    @IsString()
    @MaxLength(300)
    restaurantName: string;

    @IsNumber()
    transactionAmount: number;

    @IsDate()
    transactionDate: Date;
}
