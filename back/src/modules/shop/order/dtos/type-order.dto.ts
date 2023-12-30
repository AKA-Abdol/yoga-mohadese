import { TypeOrderItemAbstractDto } from './type-order-item-abstract.dto';

export class TypeOrderDto {
  id: string;
  createdAt: Date;
  userId: string;
  paymentAmount: number;
  items: TypeOrderItemAbstractDto[];
}
