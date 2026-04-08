import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { HealthEventsService } from './health-events.service';
import { CreateHealthEventDto } from './dto/create-health-event.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Eventos de Salud')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('health-events')
export class HealthEventsController {
  constructor(private readonly healthService: HealthEventsService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar un nuevo evento de salud' })
  create(@Body() createDto: CreateHealthEventDto) {
    return this.healthService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los eventos de salud' })
  findAll() {
    return this.healthService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un evento de salud por ID' })
  findOne(@Param('id') id: string) {
    return this.healthService.findOne(+id);
  }
}