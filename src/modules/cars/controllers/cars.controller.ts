import { Controller, Get, Post } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  constructor() {}

  @Get()
  getCarsAll() {
    return 'Get all cars';
  }
  @Post()
  createCar() {
    return 'Create a car';
  }
}
