import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <-- 1. Importa esto
import { LivestockService } from './livestock.service';
import { LivestockController } from './livestock.controller';
import { Livestock } from './entities/livestock.entity'; // <-- 2. Importa tu entidad

@Module({
  imports: [
    // 3. Esta es la línea mágica que falta:
    TypeOrmModule.forFeature([Livestock]) 
  ],
  controllers: [LivestockController],
  providers: [LivestockService],
})
export class LivestockModule {}