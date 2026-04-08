import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { Animal } from './entities/animal.entity';
import { FinancesModule } from '../finances/finances.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Animal]),
    FinancesModule, 
  ],
  controllers: [AnimalsController],
  providers: [AnimalsService],
  exports: [AnimalsService]
})
export class AnimalsModule {}