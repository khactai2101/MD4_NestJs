import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJs!';
  }
  getUser(): string {
    return 'User List';
  }
  getProduct(): string {
    return 'Product List';
  }
}
