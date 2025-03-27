import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarsService } from '../services/cars.service';
import { CreateCarDto } from '../dto/car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getCarsAll() {
    return 'Todos los cars';
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }
}
