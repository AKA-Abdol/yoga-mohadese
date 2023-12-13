import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles.guard';
import { Role } from 'src/decorators/roles.decorator';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { OutGetCartDto } from './dtos/out-get-cart.dto';
import { InGetShopQueryDto } from './dtos/in-get-shop.dto';
import { ShopService } from './shop.service';
import { InAddItemBodyDto } from './dtos/in-add-item.dto';
import { OutAddItemDto } from './dtos/out-add-item.dto';
import { InCompleteOrderQueryDto } from './dtos/in-complete-order.dto';
import { TypeOrderDto } from './order/dtos/type-order.dto';
import { OutProduct } from './shop.entity';
import { InDeleteItemBodyDto } from './dtos/in-delete-item.dto';

@ApiTags('Shop')
@UseGuards(RolesGuard)
@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('/courses')
  @ApiOperation({ summary: 'get course shop items' })
  async get(@Query() queryInput: InGetShopQueryDto) {
    return this.shopService.getShopCourses(queryInput);
  }

  @Get('/courses/:id')
  @ApiOperation({ summary: 'get course shop item details' })
  async getOne(@Param('id') id: string): Promise<OutProduct> {
    return this.shopService.getProduct(id);
  }

  @Post('/cart/item')
  @Role('USER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'add shop item to cart' })
  async addItem(
    @Req() { userId }: { userId: string },
    @Body() input: InAddItemBodyDto,
  ): Promise<OutAddItemDto> {
    return this.shopService.addItem(userId, input);
  }

  @Delete('/cart/item')
  @Role('USER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'delete shop item from cart' })
  async deleteItem(
    @Req() { userId }: { userId: string },
    @Body() input: InDeleteItemBodyDto,
  ) {
    return this.shopService.deleteItem(userId, input);
  }

  @Get('/cart')
  @Role('USER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'get cart' })
  async getCart(@Req() { userId }: { userId: string }): Promise<OutGetCartDto> {
    return this.shopService.getCart(userId);
  }

  @Post('/cart/submit-order')
  @Role('USER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'order all items in cart' })
  async createOrder(@Req() { userId }: { userId: string }) {
    this.shopService.submitOrder(userId);
    return {
      paymentLink: `api/shop/cart/order?userId=${userId}&secret=secret`,
    };
    // save files and order in the redis and waiting for payment
  }

  @Get('/cart/order')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'redirect for paying cart items and submit Orders' })
  async completeOrder(
    @Query() input: InCompleteOrderQueryDto,
  ): Promise<TypeOrderDto> {
    return this.shopService.createOrder(input);
  }
}
