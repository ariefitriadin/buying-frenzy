import {User} from "../../model/user.entity";
import {UserListDto} from "../dto/user.list.dto";
import {Order} from "../../model/order.entity";
import {toOrderDto} from "../../order/mapper/order.mapper";


export const toUserListDto = ( dataUser: User): UserListDto => {

    return {
        id: dataUser.id,
        name: dataUser.name,
        cashBalance: dataUser.cashBalance,
        purchaseHistory: dataUser.orders.map((order: Order) => toOrderDto(order))
    };
}
