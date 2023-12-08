import { Module } from '@nestjs/common';
import { CartController } from './shop.controller';
import { CourseModule } from '../course/course.module';
import { OrderItemModule } from '../orderItem/orderItem.module';
import { CartService } from './shop.service';

@Module({
  imports: [CourseModule, OrderItemModule],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
