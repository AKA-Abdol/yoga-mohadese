import { BadRequestException, Injectable } from '@nestjs/common';
import { CartRepo } from './cart.repo';
import mongoose from 'mongoose';
import { Cart } from './cart.schema';
import { CartDao } from './daos/cart.dao';
import { TypeCart } from './dtos/type-cart.dto';
import { ProductIdentifier } from '../shop.entity';

@Injectable()
export class CartService {
  constructor(private readonly cartRepo: CartRepo) {}

  async hasCartItem(userId: string, productId: string): Promise<boolean> {
    return this.cartRepo.hasCartItem(
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

  async emptyCart(userId: string) {
    const { deletedCount } = await this.cartRepo.deleteById(
      new mongoose.Types.ObjectId(userId),
    );
    if (deletedCount === 0) throw new BadRequestException('سبد خرید خالی است');
  }
}
