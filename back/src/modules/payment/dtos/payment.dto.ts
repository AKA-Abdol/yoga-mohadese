import { Gateway } from '../enums/gateway.enum';
import { PaymentStatus } from '../enums/payment-status.enum';
import { Payment } from '../payment.schema';

export class PaymentDto {
  id: string;
  gateway: Gateway;
  status: PaymentStatus;
  amount: number;
  transactionNo?: number;
  maskedCardNo?: string;
  createdAt: Date;
  updateAt: Date;

  static fromPayment(payment: MongoDoc<Payment>): PaymentDto {
    const dto = new PaymentDto();
    dto.id = payment._id.toString();
    dto.gateway = payment.gateway;
    dto.status = payment.status;
    dto.amount = payment.amount;
    dto.transactionNo = payment.transactionNo;
    dto.maskedCardNo = payment.maskedCardNo;
    dto.createdAt = payment.createdAt;
    dto.updateAt = payment.updatedAt;
    return dto;
  }
}
