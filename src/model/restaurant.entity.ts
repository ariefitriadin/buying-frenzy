import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Menu } from './menu.entity';
import { OpenHour } from './openhour.entity';
import { Order } from './order.entity';

@Entity({ name: 'restaurant'})
export class Restaurant extends BaseEntity {

    @Column({ type: 'varchar', length: 300})
    restaurantName: string;

    @Column({ type: 'float'})
    cashBalance: number;

    @OneToMany(type => Menu, menu => menu.restaurant)
    menus?: Menu[]

    @OneToMany(type => OpenHour, openinghour => openinghour.restaurant)
    openingHours?: OpenHour[]

    @OneToMany(type => Order, order => order.restaurant)
    orders?: Order[]
}
