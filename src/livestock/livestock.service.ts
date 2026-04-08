import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livestock } from './entities/livestock.entity';
import { CreateLivestockDto } from './dto/create-livestock.dto';
import { UpdateLivestockDto } from './dto/update-livestock.dto';

@Injectable()
export class LivestockService {
  constructor(
    @InjectRepository(Livestock)
    private readonly livestockRepository: Repository<Livestock>,
  ) {}

  async create(createLivestockDto: CreateLivestockDto) {
    
    const { farmId, ...animalData } = createLivestockDto;
    
    
    const newAnimal = this.livestockRepository.create({
      ...animalData,
      farm: { id: farmId }
    });

    return await this.livestockRepository.save(newAnimal);
  }

  findAll() {
    return this.livestockRepository.find({
      relations: {
        farm: true,
      },
    });
  }

  findOne(id: number) {
    return this.livestockRepository.findOne({
      where: { id },
      relations: { farm: true }
    });
  }

  async update(id: number, updateLivestockDto: UpdateLivestockDto) {
    const { farmId, ...animalData } = updateLivestockDto;
    
    
    return await this.livestockRepository.save({
      id,
      ...animalData,
      farm: farmId ? { id: farmId } : undefined
    });
  }

  async remove(id: number) {
    const animal = await this.findOne(id);
    return await this.livestockRepository.delete(id);
  }
}