import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeightRecord } from './entities/weight-record.entity';
import { CreateWeightRecordDto } from './dto/create-weight-record.dto';
import { LivestockService } from '../livestock/livestock.service';

@Injectable()
export class WeightRecordsService {
  constructor(
    @InjectRepository(WeightRecord)
    private readonly weightRecordRepository: Repository<WeightRecord>,
    private readonly livestockService: LivestockService,
  ) {}

  async create(createWeightRecordDto: CreateWeightRecordDto) {
    await this.livestockService.findOne(createWeightRecordDto.animalId);
    const record = this.weightRecordRepository.create(createWeightRecordDto);
    return await this.weightRecordRepository.save(record);
  }

  async findAll() {
    return await this.weightRecordRepository.find({ relations: ['animal'] });
  }

  async findOne(id: number) {
    const record = await this.weightRecordRepository.findOne({
      where: { id },
      relations: ['animal'],
    });
    if (!record) throw new NotFoundException('Registro de peso no encontrado');
    return record;
  }
}