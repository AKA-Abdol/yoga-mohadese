import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderItem, OrderItemSchema } from './orderItem/orderItem.schema';
import { OrderItemRepo } from './orderItem/orderItem.repo';
import { OrderItemService } from './orderItem/orderItem.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderItem.name, schema: OrderItemSchema },
    ]),
  ],
  providers: [OrderItemRepo, OrderItemService],
  exports: [OrderItemService],
})
export class OrderModule {}
