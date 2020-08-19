import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../model/user.entity";
import { Repository } from "typeorm";
import { UserListDto } from "./dto/user.list.dto";
import {toUserListDto} from "./mapper/order-list.mapper";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

    public async getListUser(): Promise<UserListDto[]> {
        const userList = await this.userRepo.find();
        return userList.map(user => toUserListDto(user));
    }
}
