import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Restaurant } from './restaurant.entity';
import {Order} from "./order.entity";

@Entity({ name: 'menu'})
export class Menu extends BaseEntity {

    @Column({ type: 'varchar', length: 300})
    dishName: string;

    @Column({ type: 'float'})
    price: number;

    @ManyToOne(type => Restaurant, restaurant => restaurant.menus)
    restaurant: Restaurant;
}
