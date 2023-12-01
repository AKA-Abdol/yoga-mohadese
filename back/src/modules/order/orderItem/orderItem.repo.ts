import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderItem } from './orderItem.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class OrderItemRepo {
  constructor(
    @InjectModel(OrderItem.name) private orderItemModel: Model<OrderItem>,
  ) {}

  async hasOrderItem(
    userId: mongoose.Types.ObjectId,
    productId: mongoose.Types.ObjectId,
  ) {
    const orderItem = this.orderItemModel.findOne({
      userId,
      productId,
    });

    return orderItem !== null;
  }

  async create(orderItem: OrderItem): Promise<MongoDoc<OrderItem>> {
    return await this.orderItemModel.create(orderItem);
  }
}
