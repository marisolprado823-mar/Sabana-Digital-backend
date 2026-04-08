import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { LivestockService } from './livestock.service';
import { CreateLivestockDto } from './dto/create-livestock.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('Livestock')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('livestock')
export class LivestockController {
  constructor(private readonly livestockService: LivestockService) {}

  @Post()
  @ApiOperation({ summary: 'Create livestock' })
  create(@Body() createLivestockDto: CreateLivestockDto) {
    return this.livestockService.create(createLivestockDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all livestock' })
  findAll() {
    return this.livestockService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get livestock by ID' })
  findOne(@Param('id') id: string) {
    return this.livestockService.findOne(+id);
  }
}