import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './cart.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class CartRepo {
  constructor(@InjectModel(Cart.name) private model: Model<Cart>) {}

  async hasCartItem(
    userId: mongoose.Types.ObjectId,
    productId: mongoose.Types.ObjectId,
    quantity = 1,
  ) {
    const cartItem = await this.model
      .findOne({
        userId,
        productId,
      })
      .exec();

    return cartItem !== null && cartItem.quantity >= quantity;
  }

  async create(cartItem: Cart): Promise<MongoDoc<Cart>> {
    return await this.model.create(cartItem);
  }

  async incrementCount(
    userId: mongoose.Types.ObjectId,
    productId: mongoose.Types.ObjectId,
    quantity: number,
  ) {
    this.model.updateOne({ userId, productId }, { $inc: { quantity } });
  }

  async softDelete(id: mongoose.Types.ObjectId) {
    const cartItem = await this.model.findOne({ _id: id }).exec();
    if (cartItem === null) return;
    cartItem.isDeleted = true;
    cartItem.save();
  }

  async getByUserId(
    userId: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<Cart>[]> {
    return this.model.find({ userId, isDeleted: false }).exec();
  }

  async deleteById(userId: mongoose.Types.ObjectId) {
    return await this.model.deleteMany({ userId });
  }

  async getItem(
    userId: mongoose.Types.ObjectId,
    productId: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<Cart>> {
    const cartItem = await this.model.findOne({ userId, productId });

    if (cartItem === null)
      throw new BadRequestException('محصول در سبد شما وجود ندارد');

    return cartItem;
  }

  async deleteOne(
    userId: mongoose.Types.ObjectId,
    productId: mongoose.Types.ObjectId,
  ) {
    return this.model.deleteOne({ userId, productId });
  }
}
