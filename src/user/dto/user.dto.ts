import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import { IsString, IsNumber, MaxLength } from 'class-validator';

export class UserDto {

    @ApiModelProperty()
    @IsNumber()
    id: number

    @ApiModelProperty()
    @IsString()
    @MaxLength(300)
    name: string;

    @ApiModelProperty()
    @IsNumber()
    cashBalance: number;
}
