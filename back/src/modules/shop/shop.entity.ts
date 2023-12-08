import mongoose from 'mongoose';

export enum ProductType {
  COURSE = 'Course',
  SHOP_ITEM = 'Item',
}

export interface ProductIdentifier<T = ProductType> {
  id: mongoose.Types.ObjectId;
  type: T;
}

export interface InProduct<T = any> extends ProductIdentifier {
  price: number;
  images: string[];
  detail: T;
}
