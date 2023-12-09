import {
  Body,
  Controller,
  Get,
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

@ApiTags('Shop')
@UseGuards(RolesGuard)
@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('/courses')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'get course shop items' })
  async get(@Query() queryInput: InGetShopQueryDto) {
    return this.shopService.getShopCourses(queryInput);
  }

  @Post('/cart/add-item')
  @Role('USER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'add shop item to cart' })
  async addItem(
    @Req() { userId }: { userId: string },
    @Body() input: InAddItemBodyDto,
  ): Promise<OutAddItemDto> {
    return this.shopService.addItem(userId, input);
  }

  @Get('/cart')
  @Role('USER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'get cart' })
  async getCart(@Req() { userId }: { userId: string }): Promise<OutGetCartDto> {
    return this.shopService.getCart(userId);
  }
}
