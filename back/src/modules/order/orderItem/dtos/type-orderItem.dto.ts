import mongoose from 'mongoose';
import { ProductType } from './product';

export interface TypeOrderItemDto {
  id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  count: number;
  product: {
    type: ProductType;
    id: mongoose.Types.ObjectId;
  };
}
