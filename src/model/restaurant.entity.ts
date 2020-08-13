import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Menu } from './menu.entity';

@Entity({ name: 'restaurant'})
export class Restaurant extends BaseEntity {

    @Column({ type: 'varchar', length: 300})
    restaurantName: string;

    @Column({ type: 'float'})
    cashBalance: number;

    @OneToMany(type => Menu, menu => menu.restaurantId)
    menus: Menu[]
}
