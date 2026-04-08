import { ApiProperty } from '@nestjs/swagger'; 
import { IsNumber, IsPositive, IsNotEmpty } from 'class-validator'; 

export class CreateSaleDto {
  
  @ApiProperty({ example: 3500000, description: 'Precio de la venta' })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  totalPrice!: number; 

  @ApiProperty({ example: 1, description: 'ID del usuario' })
  @IsNumber()
  @IsNotEmpty()
  userId!: number; 

  @ApiProperty({ example: 5, description: 'ID del ganado' })
  @IsNumber()
  @IsNotEmpty()
  livestockId!: number; 
}