import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ProductType } from '../shop.entity';
import { Course } from 'src/modules/course/course.schema';

@Schema({ collection: 'orderItems' })
export class OrderItem {
  @Prop({ required: true })
  orderId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  productId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  productType: ProductType;

  @Prop({ required: true })
  count: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  images: string[];

  @Prop({ required: true, type: mongoose.Schema.Types.Mixed })
  detail: Pick<Course, 'start_date' | 'end_date' | 'level'>;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
