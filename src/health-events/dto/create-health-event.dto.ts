import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHealthEventDto {
  @ApiProperty({ example: 'Vacunación', description: 'Tipo de evento de salud' })
  @IsString()
  @IsNotEmpty()
  type!: string;

  @ApiProperty({ example: 'Vacuna contra la fiebre aftosa', description: 'Detalles del evento' })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({ example: '2026-04-06', description: 'Fecha del evento (YYYY-MM-DD)' })
  @IsString()
  @IsNotEmpty()
  eventDate!: string;

  @ApiProperty({ example: 1, description: 'ID del animal afectado' })
  @IsNumber()
  @IsNotEmpty()
  animalId!: number;
}