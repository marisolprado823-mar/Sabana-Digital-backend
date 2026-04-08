import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('Animales')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar un nuevo animal' })
  create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animalsService.create(createAnimalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los animales' })
  findAll() {
    return this.animalsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un animal por ID' })
  findOne(@Param('id') id: string) {
    return this.animalsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar datos de un animal' })
  update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return this.animalsService.update(+id, updateAnimalDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un animal del sistema' })
  remove(@Param('id') id: string) {
    return this.animalsService.remove(+id);
  }
}