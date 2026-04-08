import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HealthEvent } from './entities/health-event.entity';
import { CreateHealthEventDto } from './dto/create-health-event.dto';
import { UpdateHealthEventDto } from './dto/update-health-event.dto';
import { AnimalsService } from '../animals/animals.service';

@Injectable()
export class HealthEventsService {
  constructor(
    @InjectRepository(HealthEvent)
    private readonly healthRepository: Repository<HealthEvent>,
    private readonly animalsService: AnimalsService,
  ) {}

  async create(createDto: CreateHealthEventDto) {
    await this.animalsService.findOne(createDto.animalId);
    const event = this.healthRepository.create(createDto);
    return await this.healthRepository.save(event);
  }

  async findAll() {
    return await this.healthRepository.find({
      relations: ['animal']
    });
  }

  async findOne(id: number) {
    const event = await this.healthRepository.findOne({
      where: { id },
      relations: ['animal']
    });
    if (!event) throw new NotFoundException('Evento de salud no encontrado');
    return event;
  }

  async update(id: number, updateDto: UpdateHealthEventDto) {
    const event = await this.findOne(id);
    return await this.healthRepository.save({ ...event, ...updateDto });
  }

  async remove(id: number) {
    const event = await this.findOne(id);
    return await this.healthRepository.remove(event);
  }
}