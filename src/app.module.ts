import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsModule } from './animals/animals.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FinancesModule } from './finances/finances.module';
import { FarmsModule } from './farms/farms.module';
import { HealthEventsModule } from './health-events/health-events.module';
import { LivestockModule } from './livestock/livestock.module';
import { SalesModule } from './sales/sales.module';
import { WeightRecordsModule } from './weight-records/weight-records.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5433'), 
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true, 
    }),
    
    
    AnimalsModule,
    UsersModule,
    AuthModule,
    FinancesModule,
    FarmsModule,
    HealthEventsModule,
    LivestockModule,
    SalesModule,
    WeightRecordsModule,
  ],
})
export class AppModule {}