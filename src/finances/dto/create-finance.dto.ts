import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateFinanceDto {
  @ApiProperty({ example: 'Compra de concentrado', description: 'Concepto del gasto o ingreso' })
  @IsString()
  @IsNotEmpty()
  concept!: string;

  @ApiProperty({ example: 150000, description: 'Monto total' })
  @IsNumber()
  @IsNotEmpty()
  amount!: number;

  @ApiProperty({ example: '2026-04-06', description: 'Fecha del registro (YYYY-MM-DD)' })
  @IsString()
  @IsNotEmpty()
  expenseDate!: string;

  @ApiProperty({ example: 1, description: 'ID del animal asociado (opcional)', required: false })
  @IsNumber()
  @IsOptional()
  animalId?: number;
}