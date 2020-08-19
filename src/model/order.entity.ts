import { Entity, Column, CreateDateColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Restaurant } from './restaurant.entity';
import { Menu } from "./menu.entity";


@Entity({ name: 'order'})
export class Order extends BaseEntity {

    @Column({ type: 'float'})
    transactionAmount: number;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    transactionDate: Date;

    @OneToOne(type => Menu)
    @JoinColumn()
    menu: Menu;

    @ManyToOne(type => User, user => user.orders)
    user: User;

    @ManyToOne(type => Restaurant, restaurant => restaurant.orders)
    restaurant: Restaurant;
}
