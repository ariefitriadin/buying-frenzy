import { UserDto} from "./user.dto";
import { OrderDto} from "../../order/dto/order.dto";

export class UserListDto {
    user: UserDto;
    purchaseHistory: OrderDto[]
}
