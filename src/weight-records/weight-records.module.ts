import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeightRecordsService } from './weight-records.service';
import { WeightRecordsController } from './weight-records.controller';
import { WeightRecord } from './entities/weight-record.entity';
import { AnimalsModule } from '../animals/animals.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([WeightRecord]),
    AnimalsModule,
  ],
  controllers: [WeightRecordsController],
  providers: [WeightRecordsService],
})
export class WeightRecordsModule {}