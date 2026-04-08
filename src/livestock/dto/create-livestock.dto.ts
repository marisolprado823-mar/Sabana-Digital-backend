import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateLivestockDto {
  @ApiProperty({ example: 'Bovino' })
  @IsString()
  @IsNotEmpty()
  species!: string;

  @ApiProperty({ example: 'Brahman' })
  @IsString()
  @IsNotEmpty()
  breed!: string;

  @ApiProperty({ example: 450 })
  @IsNumber()
  @IsNotEmpty()
  weight!: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  farmId!: number;
}