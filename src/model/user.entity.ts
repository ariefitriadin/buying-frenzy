import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Order } from './order.entity';

@Entity({ name: 'user'})
export class User extends BaseEntity {

    @Column({ type: 'varchar', length: 300})
    name: string;

    @Column({ type: 'float'})
    cashBalance: number;

    @OneToMany(type => Order, order => order.user)
    orders?: Order[]

}
