import mongoose from 'mongoose';
import { ProductType } from '../../shop.entity';

export interface TypeCart {
  id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  count: number;
  product: {
    type: ProductType;
    id: mongoose.Types.ObjectId;
  };
}
