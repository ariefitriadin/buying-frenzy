import {Controller, Get, Req} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserListDto} from "./dto/user.list.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAll(@Req() req: any): Promise<UserListDto[]> {
        return await this.userService.getListUser();
    }
}
