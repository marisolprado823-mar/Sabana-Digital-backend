import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './entities/sale.entity';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,
  ) {}

  async create(createSaleDto: CreateSaleDto) {
    const { userId, livestockId, ...saleData } = createSaleDto;
    
    const newSale = this.saleRepository.create({
      ...saleData,
      user: { id: userId },
      livestock: { id: livestockId }
    });

    return await this.saleRepository.save(newSale);
  }

  findAll() {
    return this.saleRepository.find({
      relations: {
        user: true,
        livestock: true
      }
    });
  }

  async findOne(id: number) {
    const sale = await this.saleRepository.findOne({
      where: { id },
      relations: { user: true, livestock: true }
    });
    if (!sale) throw new NotFoundException(`Venta con ID ${id} no encontrada`);
    return sale;
  }

  async update(id: number, updateSaleDto: UpdateSaleDto) {
    const { userId, livestockId, ...saleData } = updateSaleDto;
    
    return await this.saleRepository.save({
      id,
      ...saleData,
      user: userId ? { id: userId } : undefined,
      livestock: livestockId ? { id: livestockId } : undefined
    });
  }

  async remove(id: number) {
    const sale = await this.findOne(id);
    return await this.saleRepository.remove(sale);
  }
}