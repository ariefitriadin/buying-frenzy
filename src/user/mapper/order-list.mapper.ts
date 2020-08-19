import {User} from "../../model/user.entity";
import {UserListDto} from "../dto/user.list.dto";
import {UserDto} from "../dto/user.dto";
import {Order} from "../../model/order.entity";
import {toOrderDto} from "../../order/mapper/order.mapper";


export const toUserListDto = ( dataUser: User): UserListDto => {

    return {
        user: toUserDto(dataUser),
        purchaseHistory: dataUser.orders.map((order: Order) => toOrderDto(order))
    };
}

export const toUserDto = (data: User): UserDto => {
    const { id, name, cashBalance  } = data;

    return {
        id,
        name,
        cashBalance,
    };
}

