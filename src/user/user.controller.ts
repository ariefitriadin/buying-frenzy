import {Controller, Get, Req} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserListDto} from "./dto/user.list.dto";
import {ApiCreatedResponse} from "@nestjs/swagger";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiCreatedResponse({ type: UserListDto, isArray: true })
    async getAll(@Req() req: any): Promise<UserListDto[]> {
        return await this.userService.getListUser();
    }
}
