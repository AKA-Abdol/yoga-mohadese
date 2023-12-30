import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './order.schema';
import { OrderService } from './order.service';
import { OrderRepo } from './order.repo';
import { OrderItemRepo } from './orderItem.repo';
import { OrderItem, OrderItemSchema } from './orderItem.schema';
import { PaymentModule } from 'src/modules/payment/payment.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
      { name: OrderItem.name, schema: OrderItemSchema },
    ]),
    PaymentModule,
  ],
  providers: [OrderRepo, OrderService, OrderItemRepo],
  exports: [OrderService],
})
export class OrderModule {}
