import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { OrderItemType } from './orderItem.types';

@Schema()
export class OrderItem {
  @Prop({ required: true })
  userId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  type: OrderItemType;

  @Prop({ required: true })
  productId: mongoose.Types.ObjectId;

  @Prop({ default: 1 })
  count?: number;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
