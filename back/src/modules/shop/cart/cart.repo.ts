import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './cart.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class CartRepo {
  constructor(@InjectModel(Cart.name) private model: Model<Cart>) {}

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

  async create(orderItem: Cart): Promise<MongoDoc<Cart>> {
    return await this.model.create(orderItem);
  }

  async incrementCount(
    userId: mongoose.Types.ObjectId,
    productId: mongoose.Types.ObjectId,
    count = 1,
  ) {
    this.model.updateOne({ userId, productId }, { $inc: { count } });
  }

  async softDelete(id: mongoose.Types.ObjectId) {
    const orderItem = await this.model.findOne({ _id: id }).exec();
    if (orderItem === null) return;
    orderItem.isDeleted = true;
    orderItem.save();
  }

  async getByUserId(
    userId: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<Cart>[]> {
    return this.model.find({ userId, isDeleted: false }).exec();
  }
}
