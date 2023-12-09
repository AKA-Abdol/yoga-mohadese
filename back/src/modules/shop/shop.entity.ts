import mongoose from 'mongoose';

export enum ProductType {
  COURSE = 'Course',
  SHOP_ITEM = 'Item',
}

export interface ProductIdentifier<
  K = ProductType,
  T = mongoose.Types.ObjectId,
> {
  id: T;
  type: K;
}

export interface InProduct<T = any> extends ProductIdentifier {
  price: number;
  images: string[];
  detail: T;
}

export interface OutProduct<T = any>
  extends ProductIdentifier<ProductType, string> {
  price: number;
  images: string[];
  detail: T;
  maxQuantity: number;
}
