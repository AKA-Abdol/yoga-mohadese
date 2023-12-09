import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { CourseModule } from '../course/course.module';
import { ShopService } from './shop.service';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [CourseModule, CartModule],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
