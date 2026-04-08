import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAnimalDto {
  @ApiProperty({ example: 'Lola' })
  @IsString()
  name!: string;

  @ApiProperty({ example: 'Vacuno' })
  @IsString()
  species!: string;

  @ApiProperty({ example: 'Brahman', required: false })
  @IsOptional()
  @IsString()
  breed?: string;

  @ApiProperty({ example: '2024-03-25' })
  @IsDateString()
  birthDate!: string;

  @ApiProperty({ example: 1500000 })
  @IsNumber()
  purchasePrice!: number;
}