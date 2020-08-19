import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import { OrderDto} from "../../order/dto/order.dto";

export class UserListDto {

    @ApiModelProperty()
    readonly cashBalance: number;

    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty({type: OrderDto, isArray: true})
    readonly purchaseHistory: OrderDto[]
}
