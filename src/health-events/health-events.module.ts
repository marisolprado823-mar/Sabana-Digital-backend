import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthEventsService } from './health-events.service';
import { HealthEventsController } from './health-events.controller';
import { HealthEvent } from './entities/health-event.entity';
import { LivestockModule } from '../livestock/livestock.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([HealthEvent]),
    LivestockModule,
  ],
  controllers: [HealthEventsController],
  providers: [HealthEventsService],
})
export class HealthEventsModule {}