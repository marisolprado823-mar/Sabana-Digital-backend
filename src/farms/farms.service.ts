import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Farm } from './entities/farm.entity';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';

@Injectable()
export class FarmsService {
  constructor(
    @InjectRepository(Farm)
    private readonly farmRepository: Repository<Farm>,
  ) {}

  async create(createFarmDto: CreateFarmDto) {
    const newFarm = this.farmRepository.create(createFarmDto);
    return await this.farmRepository.save(newFarm);
  }

  async findAll() {
    return await this.farmRepository.find();
  }

  async findOne(id: number) {
    const farm = await this.farmRepository.findOne({ where: { id } });
    if (!farm) {
      throw new NotFoundException(`La finca con ID ${id} no fue encontrada`);
    }
    return farm;
  }

  async update(id: number, updateFarmDto: UpdateFarmDto) {
    const farm = await this.findOne(id);
    const updatedFarm = this.farmRepository.merge(farm, updateFarmDto);
    return await this.farmRepository.save(updatedFarm);
  }

  async remove(id: number) {
    const farm = await this.findOne(id);
    return await this.farmRepository.remove(farm);
  }
}