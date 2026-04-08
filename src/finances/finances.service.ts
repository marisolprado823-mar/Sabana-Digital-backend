import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Finance } from './entities/finance.entity';

@Injectable()
export class FinancesService {
  constructor(
    @InjectRepository(Finance)
    private financeRepository: Repository<Finance>,
  ) {}

  async getGeneralReport() {
    const totalExpenses = await this.financeRepository.sum('amount');
    const recordsCount = await this.financeRepository.count();
    
    return {
      title: "Reporte General Sabana  Digital",
      totalInvested: totalExpenses || 0,
      totalOperations: recordsCount,
      currency: "COP",
      status: "Active"
    };
  }
}