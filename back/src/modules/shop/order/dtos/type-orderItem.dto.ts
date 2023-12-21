import { ProductType } from '../../shop.entity';
import { OrderItemDetailType } from '../orderItem.schema';

export class TypeOrderItemDto {
  id: string;

  orderId: string;

  title: string;

  productId: string;

  productType: ProductType;

  quantity: number;

  price: number;

  images: string[];

  detail: OrderItemDetailType;
}
