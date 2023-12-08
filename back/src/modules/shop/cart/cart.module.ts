import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderItem, OrderItemSchema } from './cart.schema';
import { OrderItemRepo } from './cart.repo';
import { OrderItemService } from './cart.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderItem.name, schema: OrderItemSchema },
    ]),
  ],
  providers: [OrderItemRepo, OrderItemService],
  exports: [OrderItemService],
})
export class OrderItemModule {}
