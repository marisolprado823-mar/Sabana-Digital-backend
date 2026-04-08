import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateWeightRecordDto {
  @ApiProperty({ example: 450.5, description: 'Peso del animal en kilogramos' })
  @IsNumber()
  @IsNotEmpty()
  weight!: number;

  @ApiProperty({ example: '2026-04-06', description: 'Fecha del pesaje (YYYY-MM-DD)' })
  @IsString()
  @IsNotEmpty()
  recordDate!: string;

  @ApiProperty({ example: 12, description: 'ID del animal al que pertenece el peso' })
  @IsNumber()
  @IsNotEmpty()
  animalId!: number;
}