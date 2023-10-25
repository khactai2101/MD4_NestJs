import { Controller, Get, Param, Delete } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { IUsers } from './type/user.interface';
import * as path from 'path';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(public userService: UserService) {}
  @Get('/')
  async getUsers(): Promise<IUsers[]> {
    return await this.userService.getAllUsers();
  }
  @Get('/detail/:id')
  async getOneUser(@Param() param): Promise<any> {
    return await this.userService.getOneUser(param.id);
  }

  @Delete('/delete/:id')
  async deleteUser(@Param() param): Promise<string> {
    return await this.userService.deleteUser(param.id);
  }
}
