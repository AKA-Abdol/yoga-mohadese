import { PaymentDto } from 'src/modules/payment/dtos/payment.dto';
import { TypeOrderItemDto } from './type-orderItem.dto';

export class OutGetOrderDto {
  createdAt: Date;
  payment: PaymentDto;
  items: TypeOrderItemDto[];
}
