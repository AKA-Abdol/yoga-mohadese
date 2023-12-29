import { PaymentVerificationStatus } from '../enums/payment-verification-status.enum';

interface SuccessfulPaymentVerification {
  status:
    | PaymentVerificationStatus.VERIFIED
    | PaymentVerificationStatus.DOUBLE_VERIFIED;
  transactionNo: number;
  maskedCardNo: string;
}

interface FailedPaymentVerification {
  status: PaymentVerificationStatus.NOT_VERIFIED;
}

export type PaymentVerification =
  | SuccessfulPaymentVerification
  | FailedPaymentVerification;
