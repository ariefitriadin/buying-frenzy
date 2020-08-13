import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Restaurant } from './restaurant.entity';

@Entity({ name: 'menu'})
export class Menu extends BaseEntity {

    @Column({ type: 'double'})
    restaurantId: number;

    @Column({ type: 'varchar', length: 300})
    dishName: string;

    @Column({ type: 'float'})
    price: number;

    @ManyToOne(type => Restaurant, restaurant => restaurant.menus)
    restaurant: Restaurant
}
