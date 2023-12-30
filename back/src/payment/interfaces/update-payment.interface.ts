import { PaymentStatus } from '../enums/payment-status.enum';

export interface IUpdatePayment {
  status: PaymentStatus;
  transactionNo?: number;
  maskedCardNo?: string;
}
