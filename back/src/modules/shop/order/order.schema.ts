import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export enum PaymentType {
  ONLINE = 'Online',
  ADMIN_CREDIT = 'AdminCredit',
}

@Schema({ timestamps: { createdAt: true } })
export class Order {
  @Prop({ required: true })
  userId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  paymentType: PaymentType;

  @Prop({ default: new Date() })
  createdAt?: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
