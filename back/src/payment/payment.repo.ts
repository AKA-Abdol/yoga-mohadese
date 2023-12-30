import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Payment } from './payment.schema';
import { Model } from 'mongoose';
import { ICreatePayment } from './interfaces/create-payment.interface';
import { IUpdatePayment } from './interfaces/update-payment.interface';
import mongoose from 'mongoose';

@Injectable()
export class PaymentRepo {
  constructor(
    @InjectModel(Payment.name) private readonly model: Model<Payment>,
  ) {}

  create(payment: ICreatePayment): Promise<MongoDoc<Payment>> {
    return this.model.create(payment);
  }

  async update(
    authority: string,
    paymentUpdate: IUpdatePayment,
  ): Promise<MongoDoc<Payment> | null> {
    return await this.model.findOneAndUpdate({ authority }, paymentUpdate, {
      new: true,
    });
  }

  async findByAuthority(authority: string) {
    return this.model.findOne({ authority });
  }

  async findById(_id: mongoose.Types.ObjectId) {
    return this.model.findOne({ _id });
  }

  async findAllByUserId(userId: mongoose.Types.ObjectId) {
    return this.model.find({ userId });
  }
}
