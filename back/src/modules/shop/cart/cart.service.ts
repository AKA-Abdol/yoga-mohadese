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

  async hasCartItem(
    userId: string,
    productId: string,
    quantity = 1,
  ): Promise<boolean> {
    return this.cartRepo.hasCartItem(
      new mongoose.Types.ObjectId(userId),
      new mongoose.Types.ObjectId(productId),
      quantity,
    );
  }

  async add(
    userId: string,
    product: ProductIdentifier,
    quantity = 1,
  ): Promise<void> {
    if (await this.hasCartItem(userId, product.id.toString())) {
      this.cartRepo.incrementCount(
        new mongoose.Types.ObjectId(userId),
        product.id,
        quantity,
      );
      return;
    }
    await this.cartRepo.create({
      productId: new mongoose.Types.ObjectId(product.id),
      productType: product.type,
      userId: new mongoose.Types.ObjectId(userId),
      quantity,
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

  async decreaseCartItemQuantity(
    userId: string,
    productId: string,
  ): Promise<void> {
    const userObjectId = new mongoose.Types.ObjectId(userId),
      productObjectId = new mongoose.Types.ObjectId(productId);

    const cartItem = await this.cartRepo.getItem(userObjectId, productObjectId);
    if (cartItem.quantity === 1)
      await this.cartRepo.deleteOne(userObjectId, productObjectId);
    else await this.cartRepo.incrementCount(userObjectId, productObjectId, -1);
  }

  async emptyCart(userId: string) {
    const { deletedCount } = await this.cartRepo.deleteByUserId(
      new mongoose.Types.ObjectId(userId),
    );
    if (deletedCount === 0)
      throw new BadRequestException('سبد خرید خالی بوده است');
  }

  async deleteProduct(userId: string, productId: string) {
    this.cartRepo.deleteOne(
      new mongoose.Types.ObjectId(userId),
      new mongoose.Types.ObjectId(productId),
    );
  }
}
