import { PaymentVerificationStatus } from '../enums/payment-verification-status.enum';

export interface PaymentVerification {
  status:
    | PaymentVerificationStatus.VERIFIED
    | PaymentVerificationStatus.DOUBLE_VERIFIED;
  transactionNo?: number;
  maskedCardNo?: string;
}
