import { Entity, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Restaurant } from './restaurant.entity';


@Entity({ name: 'order'})
export class Order extends BaseEntity {

    @Column({ type: 'varchar', length: 300})
    dishName: string;

    @Column({ type: 'double'})
    userId: number;

    @Column({ type: 'double'})
    restaurantId: number;

    @Column({ type: 'varchar', length: 300})
    restaurantName: string;

    @Column({ type: 'float'})
    transactionAmount: number;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    transactionDate: Date;

    @ManyToOne(type => User, user => user.orders)
    user: User;

    @ManyToOne(type => Restaurant, restaurant => restaurant.orders)
    restaurant: Restaurant;
}
