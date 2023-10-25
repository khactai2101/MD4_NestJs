import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './modules/user/entities/user.entity';

@Module({
  imports: [
    UserModule,
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      host: 'localhost',
      username: 'root',
      password: '12345678',
      database: 'nestJs',
      entities: [Users],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
