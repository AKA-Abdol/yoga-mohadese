import { PaymentVerificationStatus } from '../enums/payment-verification-status.enum';

interface BaseVerification {
  paymentId: string;
}
interface SuccessfulVerification extends BaseVerification {
  status:
    | PaymentVerificationStatus.VERIFIED
    | PaymentVerificationStatus.DOUBLE_VERIFIED;
  userId: string;
}

interface FailedVerification extends BaseVerification {
  status: PaymentVerificationStatus.NOT_VERIFIED;
}

export const failedVerification = (paymentId = ''): FailedVerification => ({
  status: PaymentVerificationStatus.NOT_VERIFIED,
  paymentId,
});

export type IVerifyResponse = FailedVerification | SuccessfulVerification;
