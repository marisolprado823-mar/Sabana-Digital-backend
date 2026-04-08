import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'; 

@ApiTags('Ventas') 
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar una nueva venta de ganado' })
  @ApiResponse({ status: 201, description: 'Venta creada exitosamente.' })
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las ventas realizadas' })
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar una venta específica por ID' })
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar los datos de una venta' })
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.salesService.update(+id, updateSaleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un registro de venta' })
  remove(@Param('id') id: string) {
    return this.salesService.remove(+id);
  }
}