import { PaymentVerificationStatus } from '../enums/payment-verification-status.enum';

interface SuccessfulVerification {
  status:
    | PaymentVerificationStatus.VERIFIED
    | PaymentVerificationStatus.DOUBLE_VERIFIED;

  amount: number;
  transactionNo: number;
  userId: string;
}

interface FailedVerification {
  status: PaymentVerificationStatus.NOT_VERIFIED;
}

export const failedVerification: FailedVerification = {
  status: PaymentVerificationStatus.NOT_VERIFIED,
};

export type IVerifyResponse = FailedVerification | SuccessfulVerification;
