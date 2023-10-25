import { Injectable } from '@nestjs/common';
import { IUsers } from './type/user.interface';
import { readFile, writeFile } from 'fs/promises';
import * as path from 'path';

@Injectable()
export class UserService {
  constructor() {}
  async getAllUsers(): Promise<IUsers[]> {
    const filePath = path.join('src/modules/user', './data/db.json');
    const users: any = await readFile(filePath, 'utf8');
    const result: IUsers[] = JSON.parse(users);
    return result;
  }
  async getOneUser(id: number): Promise<IUsers> {
    const filePath = path.join('src/modules/user', './data/db.json');
    const users: any = await readFile(filePath, 'utf8');
    const result: IUsers[] = JSON.parse(users);
    const user: IUsers = result.find((item: IUsers) => item.id == id);
    return user;
  }
  async deleteUser(id: number): Promise<string> {
    const filePath = path.join('src/modules/user', './data/db.json');
    const users: any = await readFile(filePath, 'utf8');
    const result: IUsers[] = JSON.parse(users);
    const checkUser: IUsers = result.find((item: IUsers) => item.id == id);

    if (checkUser) {
      const user = result.filter((item: IUsers) => item.id != id);
      await writeFile(filePath, JSON.stringify(user), 'utf8');
      return 'successfully';
    } else {
      return 'not found';
    }
  }
}
