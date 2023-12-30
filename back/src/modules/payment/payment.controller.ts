import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { RolesGuard } from 'src/guards/roles.guard';
import { Role } from 'src/decorators/roles.decorator';
@ApiTags('Payments')
@UseGuards(RolesGuard)
@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get('')
  @Role('USER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'get all payments' })
  async getAll(@Req() { userId }: { userId: string }) {
    return this.paymentService.getAll(userId);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'get payment data by id' })
  async get(@Param('id') id: string) {
    return this.paymentService.getOne(id);
  }
}
