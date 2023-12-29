import { Injectable } from '@nestjs/common';
import { PaymentGateway } from '../../interfaces/payment-gateway.interface';
import { PaymentVerification } from '../../interfaces/payment-verification.interface';
import { OutCreateGateway } from '../../interfaces/out-create-gateway.interface';
import { PaymentVerificationStatus } from 'src/payment/enums/payment-verification-status.enum';

@Injectable()
export class ZarinpalPaymentGateway implements PaymentGateway {
  async createGateway(
    amount: number,
    callbackUrl: string,
  ): Promise<OutCreateGateway> {
    return {
      authority: `authority-${amount}`,
      gatewayLink: `zarinpal-auth=authority-${amount}`,
    };
  }

  async verify(
    verificationId: string,
    amount: number,
  ): Promise<PaymentVerification> {
    return {
      status: PaymentVerificationStatus.VERIFIED,
      maskedCardNo: '610433****1868',
      transactionNo: 123,
    };
  }
}
