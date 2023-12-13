import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ProductType } from '../shop.entity';

@Schema()
export class Cart {
  @Prop({ required: true })
  userId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  productId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  productType: ProductType;

  @Prop({ default: 1 })
  quantity: number;

  @Prop({ default: false })
  isDeleted?: boolean;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
