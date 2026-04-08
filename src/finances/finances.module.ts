import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancesService } from './finances.service';
import { FinancesController } from './finances.controller';
import { Finance } from './entities/finance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Finance])],
  controllers: [FinancesController],
  providers: [FinancesService],
  exports: [TypeOrmModule] 
})
export class FinancesModule {}