import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeightRecord } from './entities/weight-record.entity';
import { CreateWeightRecordDto } from './dto/create-weight-record.dto';
import { UpdateWeightRecordDto } from './dto/update-weight-record.dto'; 
import { AnimalsService } from '../animals/animals.service';

@Injectable()
export class WeightRecordsService {
  constructor(
    @InjectRepository(WeightRecord)
    private readonly weightRepository: Repository<WeightRecord>,
    private readonly animalsService: AnimalsService,
  ) {}

  async create(createDto: CreateWeightRecordDto) {
    
    await this.animalsService.findOne(createDto.animalId);
    
    const record = this.weightRepository.create(createDto);
    return await this.weightRepository.save(record);
  }

  async findAll() {
    return await this.weightRepository.find({
      relations: ['animal'] 
    });
  }

  async findOne(id: number) {
    const record = await this.weightRepository.findOne({
      where: { id },
      relations: ['animal']
    });

    if (!record) {
      throw new NotFoundException(`El registro de peso con ID ${id} no existe`);
    }
    return record;
  }

  
  async update(id: number, updateDto: UpdateWeightRecordDto) {
    const record = await this.findOne(id);
    const updatedRecord = this.weightRepository.merge(record, updateDto);
    return await this.weightRepository.save(updatedRecord);
  }

  
  async remove(id: number) {
    const record = await this.findOne(id);
    return await this.weightRepository.remove(record);
  }
}