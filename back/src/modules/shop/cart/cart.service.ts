import { Injectable } from '@nestjs/common';
import { OrderItemRepo } from './cart.repo';
import { Product } from './dtos/product';
import mongoose from 'mongoose';
import { OrderItem } from './cart.schema';
import { TypeOrderItemDto } from './dtos/type-orderItem.dto';
import { OrderItemDao } from './daos/orderItem.dao';

@Injectable()
export class OrderItemService {
  constructor(private readonly orderItemRepo: OrderItemRepo) {}

  async hasOrderItem(userId: string, productId: string): Promise<boolean> {
    return this.orderItemRepo.hasOrderItem(
      new mongoose.Types.ObjectId(userId),
      new mongoose.Types.ObjectId(productId),
    );
  }

  async add(
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

  async getByUserId(userId: string): Promise<TypeOrderItemDto[]> {
    const orderItems = await this.orderItemRepo.getByUserId(
      new mongoose.Types.ObjectId(userId),
    );
    return orderItems.map(OrderItemDao.convertOne);
  }

  async softDeleteMany(ids: mongoose.Types.ObjectId[]) {
    await Promise.all(ids.map((id) => this.orderItemRepo.softDelete(id)));
  }
}
