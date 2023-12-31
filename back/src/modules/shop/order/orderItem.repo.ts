import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderItem } from './orderItem.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class OrderItemRepo {
  constructor(@InjectModel(OrderItem.name) private model: Model<OrderItem>) {}

  async create(orderItem: OrderItem): Promise<MongoDoc<OrderItem>> {
    return this.model.create(orderItem);
  }

  async getByOrderId(
    orderId: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<OrderItem>[]> {
    return this.model.find({ orderId });
  }
}
