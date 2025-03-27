import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCarDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id?: number;

  @IsString()
  @MinLength(3)
  @IsOptional()
  @ApiProperty()
  brand?: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  @ApiProperty()
  model?: string;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  description: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  year?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty() // Asegúrate de que ApiProperty esté aquí
  stock?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty() // Asegúrate de que ApiProperty esté aquí
  price?: number;

  @IsOptional()
  @ApiProperty() // Asegúrate de que ApiProperty esté aquí
  isAvailable?: boolean;
}

export class UpdateCarDto extends PartialType(CreateCarDto) {}
