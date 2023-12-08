import { Injectable } from '@nestjs/common';
import { CartRepo } from './cart.repo';
import mongoose from 'mongoose';
import { Cart } from './cart.schema';
import { CartDao } from './daos/orderItem.dao';
import { TypeCart } from './dtos/type-cart.dto';
import { InProduct, ProductIdentifier } from '../shop.entity';

@Injectable()
export class CartService {
  constructor(private readonly cartRepo: CartRepo) {}

  async hasOrderItem(userId: string, productId: string): Promise<boolean> {
    return this.cartRepo.hasOrderItem(
      new mongoose.Types.ObjectId(userId),
      new mongoose.Types.ObjectId(productId),
    );
  }

  async add(
    userId: string,
    product: ProductIdentifier,
    count = 1,
  ): Promise<MongoDoc<Cart>> {
    return await this.cartRepo.create({
      productId: new mongoose.Types.ObjectId(product.id),
      productType: product.type,
      userId: new mongoose.Types.ObjectId(userId),
      count,
    });
  }

  async getByUserId(userId: string): Promise<TypeCart[]> {
    const cartItems = await this.cartRepo.getByUserId(
      new mongoose.Types.ObjectId(userId),
    );
    return cartItems.map(CartDao.convertOne);
  }

  async softDeleteMany(ids: mongoose.Types.ObjectId[]) {
    await Promise.all(ids.map((id) => this.cartRepo.softDelete(id)));
  }
}
