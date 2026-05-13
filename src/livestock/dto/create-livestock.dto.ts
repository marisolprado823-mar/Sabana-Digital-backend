import { IsString, IsNumber, IsOptional, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; 


export class CreateLivestockDto {
  @ApiProperty({ description: 'Nombre del animal', example: 'Lola' }) 
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  name: string;

  @ApiProperty({ description: 'Especie del animal', example: 'Vacuno' }) 
  @IsString()
  @IsNotEmpty()
  species: string;

  @ApiProperty({ description: 'Raza del animal', example: 'Brahman' }) 
  @IsString()
  @IsNotEmpty()
  breed: string;

  @ApiProperty({ description: 'Peso actual en kg', example: 450.5 }) 
  @IsNumber()
  @Min(0)
  weight: number;

  @ApiProperty({ description: 'Peso inicial', example: 30, required: false }) 
  @IsOptional()
  @IsNumber()
  initialWeight?: number;

  @ApiProperty({ description: 'Estado actual', default: 'Activo' }) 
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({ description: 'ID de la granja', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  farmId: number;

  @ApiProperty({ description: 'ID del usuario dueño', example: 1 }) 
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}