import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles.guard';
import { OrderItemService } from './orderItem/orderItem.service';
import { Role } from 'src/decorators/roles.decorator';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { OutGetCartDto } from './dtos/out-get-cart.dto';
import { OrderService } from './order.service';

@UseGuards(RolesGuard)
@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly orderItemService: OrderItemService,
  ) {}

  @Get('/cart')
  @Role('USER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'get cart' })
  async getCart(@Req() { userId }: { userId: string }): Promise<OutGetCartDto> {
    return this.orderService.getCart(userId);
  }
}
