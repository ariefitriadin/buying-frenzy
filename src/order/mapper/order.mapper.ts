import {Order} from "../../model/order.entity";
import {OrderDto} from "../dto/order.dto";

export const toOrderDto = (data: Order): OrderDto => {
    const {menu, restaurant, transactionAmount, transactionDate} = data;

    return {
        dishName: menu.dishName,
        restaurantName: restaurant.restaurantName,
        transactionAmount,
        transactionDate,
    }
}
