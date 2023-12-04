import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles.guard';
import { OrderItemService } from '../orderItem/orderItem.service';
import { Role } from 'src/decorators/roles.decorator';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { OutGetCartDto } from './dtos/out-get-cart.dto';
import { CartService } from './cart.service';

@UseGuards(RolesGuard)
@Controller('cart')
export class CartController {
  constructor(
    private readonly cartService: CartService,
    private readonly orderItemService: OrderItemService,
  ) {}

  @Get('')
  @Role('USER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'get cart' })
  async getCart(@Req() { userId }: { userId: string }): Promise<OutGetCartDto> {
    return this.cartService.getCart(userId);
  }
}
