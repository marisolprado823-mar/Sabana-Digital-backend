import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Marisol Prado', description: 'Nombre completo del usuario' })
  @IsString()
  @IsNotEmpty()
  fullName!: string; 

  @ApiProperty({ example: 'marisol@correo.com', description: 'Correo electrónico' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: '123456', description: 'Contraseña (mínimo 6 caracteres)' })
  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password!: string;
}