import { PaymentType } from '../order.schema';
import { TypeOrderItemAbstractDto } from './type-order-item-abstract.dto';

export class TypeOrderDto {
  id: string;
  createdAt: Date;
  paymentType: PaymentType;
  userId: string;
  paymentAmount: number;
  items: TypeOrderItemAbstractDto[];
}
