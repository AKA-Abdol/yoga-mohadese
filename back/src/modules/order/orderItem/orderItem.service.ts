import { Injectable } from '@nestjs/common';
import { OrderItemRepo } from './orderItem.repo';
import { Product } from './dtos/product';
import mongoose from 'mongoose';
import { OrderItem } from './orderItem.schema';

@Injectable()
export class OrderItemService {
  constructor(private readonly orderItemRepo: OrderItemRepo) {}

  async hasOrderItem(userId: string, productId: string): Promise<boolean> {
    return this.orderItemRepo.hasOrderItem(
      new mongoose.Types.ObjectId(userId),
      new mongoose.Types.ObjectId(productId),
    );
  }

  async addOrderItem(
    userId: string,
    product: Product,
    count = 1,
  ): Promise<MongoDoc<OrderItem>> {
    return await this.orderItemRepo.create({
      productId: new mongoose.Types.ObjectId(product.id),
      productType: product.type,
      userId: new mongoose.Types.ObjectId(userId),
      count,
    });
  }
}
