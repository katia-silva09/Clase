import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './modules/cars/controllers/cars.controller';
import { CarsService } from './modules/cars/services/cars.service';
import { CarsModule } from './modules/cars/cars.module';
import { BrandsModule } from './modules/brands/brands.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CarsModule,
    BrandsModule,
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, CarsController],
  providers: [AppService, CarsService],
})
export class AppModule {}
