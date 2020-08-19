import { ApiResponseModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import {IsNumber, IsDate, IsString, MaxLength} from 'class-validator';
export class OrderDto {

    @ApiResponseModelProperty()
    @IsString()
    @MaxLength(300)
    dishName: string;

    @ApiResponseModelProperty()
    @IsString()
    @MaxLength(300)
    restaurantName: string;

    @ApiResponseModelProperty()
    @IsNumber()
    transactionAmount: number;

    @ApiResponseModelProperty()
    @IsDate()
    transactionDate: Date;
}
