import { PaymentType } from '../order.schema';
import { TypeOrderItemDto } from './type-orderItem.dto';

export class OutGetOrderDto {
  createdAt: Date;
  paymentType: PaymentType;
  paymentAmount: number;
  items: TypeOrderItemDto[];
}
