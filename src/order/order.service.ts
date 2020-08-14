import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Order} from "../model/order.entity";
import {Repository} from "typeorm/index";

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Order) private readonly repo: Repository<Order>) {}

    public async getAll() {
        return await this.repo.find();
    }
}
