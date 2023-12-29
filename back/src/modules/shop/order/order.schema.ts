import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: { createdAt: true } })
export class Order {
  @Prop({ required: true })
  userId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  paymentId: mongoose.Types.ObjectId;

  @Prop({ default: new Date() })
  createdAt?: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
