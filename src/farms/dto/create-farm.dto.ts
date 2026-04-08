import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateFarmDto {
  @ApiProperty({ example: 'Hacienda El Oasis' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 'La Apartada, Córdoba' })
  @IsString()
  @IsNotEmpty()
  location!: string;

  @ApiProperty({ example: 'Marisol Prado' })
  @IsString()
  @IsNotEmpty()
  ownerName!: string;
}