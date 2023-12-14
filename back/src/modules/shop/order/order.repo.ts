import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './order.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class OrderRepo {
  constructor(@InjectModel(Order.name) private model: Model<Order>) {}

  async create(order: Order): Promise<MongoDoc<Order>> {
    return this.model.create(order);
  }

  async findOne(_id: mongoose.Types.ObjectId) {
    return this.model.findOne({ _id });
  }

  async getPaginated(
    limit: number,
    skip: number,
  ): Promise<PaginatedType<MongoDoc<Order>>> {
    const aggregate = await this.model.aggregate([
      {
        $facet: {
          values: [{ $skip: skip }, { $limit: limit }],
          count: [{ $count: 'count' }],
        },
      },
    ]);
    return {
      count: aggregate[0].count[0].count,
      values: aggregate[0].values,
    };
  }
}
