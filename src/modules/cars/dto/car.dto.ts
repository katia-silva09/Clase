import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsString()
  @MinLength()
  @ApiProperty()
  brand: string;

  @IsInt()
  @MinLength()
  @IsOptional()
  @ApiProperty()
  model: string;

  @IsString()
  @MinLength()
  @ApiProperty()
  description: string;

  @IsInt()
  @MinLength()
  @ApiProperty()
  year: number;

  price: number;

  stock: number;

  isAvailable: boolean;
}
export class UpdateCarDto extends PartialType(CreateCarDto) {}
