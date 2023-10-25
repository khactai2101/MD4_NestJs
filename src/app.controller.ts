import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

import { query } from 'express';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('/user/:id')
  // getHello(@Param() param, @Query() query): string {
  //   // console.log(param, 'Param');
  //   // console.log(query, ' query');
  //   return this.appService.getHello();
  // }
}
