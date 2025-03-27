import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCarDto } from '../dto/car.dto';
import { Repository } from 'typeorm';
import { Car } from '../entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    try {
      const car = this.carRepository.create(createCarDto);
      await this.carRepository.save(car);

      return car;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!');
    }
  }
}
