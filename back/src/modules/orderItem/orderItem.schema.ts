import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ProductType } from './dtos/product';

@Schema({ collection: 'orderItems' })
export class OrderItem {
  @Prop({ required: true })
  userId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  productId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  productType: ProductType;

  @Prop({ default: 1 })
  count: number;

  @Prop({ default: false })
  isDeleted?: boolean;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
