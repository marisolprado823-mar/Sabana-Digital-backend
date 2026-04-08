import { Controller, Get, UseGuards } from '@nestjs/common';
import { FinancesService } from './finances.service';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Finances')
@ApiBearerAuth()
@Controller('finances')
export class FinancesController {
  constructor(private readonly financesService: FinancesService) {}

  @UseGuards(AuthGuard)
  @Get('report/general')
  async getReport() {
    return this.financesService.getGeneralReport();
  }
}