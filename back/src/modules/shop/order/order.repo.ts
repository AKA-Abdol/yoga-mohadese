import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './order.schema';
import { Model } from 'mongoose';

@Injectable()
export class OrderRepo {
  constructor(@InjectModel(Order.name) private model: Model<Order>) {}

  async create(order: Order): Promise<MongoDoc<Order>> {
    return this.model.create(order);
  }
}
