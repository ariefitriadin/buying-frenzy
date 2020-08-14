import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Restaurant } from './restaurant.entity';

@Entity({ name: 'openinghour'})
export class OpenHour extends BaseEntity {

    @Column({ type: 'timestamptz' })
    openingHour: Date;

    @ManyToOne(type => Restaurant, restaurant => restaurant.openingHours)
    restaurant: Restaurant
}
