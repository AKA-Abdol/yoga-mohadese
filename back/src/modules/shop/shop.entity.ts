import mongoose from 'mongoose';
import { TypeCourseDto } from '../course/dtos/type-course.dto';

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

export type InCourseProduct = Product<ProductType.COURSE, TypeCourseDto>;
export type InProduct = InCourseProduct;

export interface IOutProduct<T = any>
  extends ProductIdentifier<ProductType, string> {
  price: number;
  images: string[];
  title: string;
  detail: T;
  maxQuantity: number;
}

export type OutCourseProduct = IOutProduct<TypeCourseDto>;
export type OutProduct = OutCourseProduct;
