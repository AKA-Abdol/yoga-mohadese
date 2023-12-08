import { Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles.guard';
import { Role } from 'src/decorators/roles.decorator';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { OutGetCartDto } from './dtos/out-get-cart.dto';
import { CartService } from './shop.service';
import { CourseService } from '../course/course.service';
import { InGetShopQueryDto } from './dtos/in-get-shop.dto';

@ApiTags('SHOP')
@UseGuards(RolesGuard)
@Controller('shop')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('/courses')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'get course shop items' })
  async get(@Query() queryInput: InGetShopQueryDto) {
    return this.cartService.getShopCourses(queryInput);
  }


  @Post('/cart/add-item')
  @Role('USER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'add shop item to cart' })
  async addShopItem()


  @Get('')
  @Role('USER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'get cart' })
  async getCart(@Req() { userId }: { userId: string }): Promise<OutGetCartDto> {
    return this.cartService.getCart(userId);
  }
}
