import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderItem } from './orderItem.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class OrderItemRepo {
  constructor(@InjectModel(OrderItem.name) private model: Model<OrderItem>) {}

  async hasOrderItem(
    userId: mongoose.Types.ObjectId,
    productId: mongoose.Types.ObjectId,
  ) {
    const orderItem = await this.model
      .findOne({
        userId,
        productId,
      })
      .exec();

    console.log(orderItem);

    return orderItem !== null;
  }

  async create(orderItem: OrderItem): Promise<MongoDoc<OrderItem>> {
    return await this.model.create(orderItem);
  }

  async incrementCount(
    userId: mongoose.Types.ObjectId,
    productId: mongoose.Types.ObjectId,
    count = 1,
  ) {
    this.model.updateOne({ userId, productId }, { $inc: { count } });
  }
}
