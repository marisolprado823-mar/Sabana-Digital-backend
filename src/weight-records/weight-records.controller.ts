import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  UseGuards 
} from '@nestjs/common';
import { WeightRecordsService } from './weight-records.service';
import { CreateWeightRecordDto } from './dto/create-weight-record.dto'; 
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Registros de Peso') 
@ApiBearerAuth() 
@UseGuards(AuthGuard) 
@Controller('weight-records')
export class WeightRecordsController {
  constructor(private readonly weightService: WeightRecordsService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar un nuevo pesaje' })
  create(@Body() createDto: CreateWeightRecordDto) { 
    return this.weightService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener historial de todos los pesajes' })
  findAll() {
    return this.weightService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar un pesaje específico' })
  findOne(@Param('id') id: string) {
    return this.weightService.findOne(+id);
  }
}