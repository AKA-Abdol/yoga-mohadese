import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderItem, OrderItemSchema } from './orderItem/orderItem.schema';
import { OrderItemRepo } from './orderItem/orderItem.repo';
import { OrderItemService } from './orderItem/orderItem.service';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { CourseModule } from '../course/course.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderItem.name, schema: OrderItemSchema },
    ]),
    forwardRef(() => CourseModule),
  ],
  controllers: [OrderController],
  providers: [OrderItemRepo, OrderItemService, OrderService],
  exports: [OrderItemService],
})
export class OrderModule {}
