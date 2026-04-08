import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalsRepository: Repository<Animal>,
  ) {}

  async create(createAnimalDto: CreateAnimalDto) {
    const animal = this.animalsRepository.create(createAnimalDto);
    return await this.animalsRepository.save(animal);
  }

  async findAll() {
    return await this.animalsRepository.find();
  }

  async findOne(id: number) {
    const animal = await this.animalsRepository.findOne({ where: { id } });
    if (!animal) throw new NotFoundException(`Animal #${id} no encontrado`);
    return animal;
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    const animal = await this.animalsRepository.preload({
      id: id,
      ...updateAnimalDto,
    });
    if (!animal) throw new NotFoundException(`Animal #${id} no existe`);
    return this.animalsRepository.save(animal);
  }

  async remove(id: number) {
    const animal = await this.findOne(id);
    return this.animalsRepository.remove(animal);
  }
}