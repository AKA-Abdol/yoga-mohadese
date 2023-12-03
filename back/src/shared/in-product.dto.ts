import { ProductType } from 'src/modules/order/orderItem/dtos/product';

export interface InProduct<T = any> {
  getPrice(): number;
  getImages(): string[];
  getDetails(): T;
  getType(): ProductType;
}
