import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CourseModule } from '../course/course.module';
import { OrderItemModule } from '../orderItem/orderItem.module';
import { CartService } from './cart.service';

@Module({
  imports: [CourseModule, OrderItemModule],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
