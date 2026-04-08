import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Permisos para que Swagger y el Frontend puedan hablar con el servidor
  app.enableCors();

  // Configuración de validación de datos
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configuración de Swagger - Sabana Digital
  const config = new DocumentBuilder()
    .setTitle('Sabana Digital API')
    .setDescription('Sistema de gestión pecuaria - Departamento de Córdoba')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Puerto dinámico para Render o local 3000
  await app.listen(process.env.PORT || 3000);
}
bootstrap();