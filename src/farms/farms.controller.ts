import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { FarmsService } from './farms.service';
import { CreateFarmDto } from './dto/create-farm.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('Fincas')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('farms')
export class FarmsController {
  constructor(private readonly farmsService: FarmsService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar una nueva finca' })
  create(@Body() createFarmDto: CreateFarmDto) {
    return this.farmsService.create(createFarmDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las fincas' })
  findAll() {
    return this.farmsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener detalle de una finca' })
  findOne(@Param('id') id: string) {
    return this.farmsService.findOne(+id);
  }
}