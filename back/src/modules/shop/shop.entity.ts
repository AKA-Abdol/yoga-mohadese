import mongoose from 'mongoose';
import { Course } from '../course/course.schema';

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

interface Product<T extends ProductType, K = any> extends ProductIdentifier<T> {
  price: number;
  images: string[];
  detail: K;
  title: string;
}

export type InProduct = Product<ProductType.COURSE, MongoDoc<Course>>;

export interface OutProduct<T = any>
  extends ProductIdentifier<ProductType, string> {
  price: number;
  images: string[];
  title: string;
  detail: T;
  maxQuantity: number;
}
