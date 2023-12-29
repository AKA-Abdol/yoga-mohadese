import { BadRequestException, Injectable } from '@nestjs/common';
import { PaymentRepo } from './payment.repo';
import { Gateway } from './enums/gateway.enum';
import { ZarinpalPaymentGateway } from './services/zarinpal/zarinpal-payment-gateway.service';
import mongoose from 'mongoose';
import { PaymentGateway } from './interfaces/payment-gateway.interface';
import { PaymentStatus } from './enums/payment-status.enum';
import { PaymentVerificationStatus } from './enums/payment-verification-status.enum';
import {
  IVerifyResponse,
  failedVerification,
} from './interfaces/verify-response.interface';

@Injectable()
export class PaymentService {
  constructor(
    private readonly paymentRepo: PaymentRepo,
    private readonly zarinpalPaymentGateway: ZarinpalPaymentGateway,
  ) {}

  private getPaymentGateWay(gatewayType: Gateway): PaymentGateway {
    switch (gatewayType) {
      case Gateway.ZARINPAL:
        return this.zarinpalPaymentGateway;
      default:
        throw new BadRequestException('درگاه پرداخت وجود ندارد');
    }
  }

  private convertVerificationStatus2PaymentStatus(
    verificationStatus: PaymentVerificationStatus,
  ): PaymentStatus {
    switch (verificationStatus) {
      case PaymentVerificationStatus.NOT_VERIFIED:
        return PaymentStatus.FAILED;
      default:
        return PaymentStatus.SUCCESSFUL;
    }
  }

  async createGateway(
    userId: string,
    amount: number,
    gatewayType: Gateway,
    callbackUrl: string,
  ) {
    const paymentGateway = this.getPaymentGateWay(gatewayType);
    const gateway = await paymentGateway.createGateway(amount, callbackUrl);

    await this.paymentRepo.create({
      userId: new mongoose.Types.ObjectId(userId),
      amount,
      gateway: gatewayType,
      authority: gateway.authority,
    });

    return gateway.gatewayLink;
  }

  async verify(
    authority: string,
    gatewayType: Gateway,
  ): Promise<IVerifyResponse> {
    const paymentGateway = this.getPaymentGateWay(gatewayType);
    const payment = await this.paymentRepo.findByAuthority(authority);
    if (payment === null) return failedVerification;
    if (payment.status === PaymentStatus.SUCCESSFUL)
      return {
        status: PaymentVerificationStatus.DOUBLE_VERIFIED,
        amount: payment.amount,
        transactionNo: payment.transactionNo,
        userId: payment.userId.toString(),
      };
    const paymentVerification = await paymentGateway.verify(
      payment.authority,
      payment.amount,
    );
    await this.paymentRepo.update(payment.authority, {
      ...paymentVerification,
      status: this.convertVerificationStatus2PaymentStatus(
        paymentVerification.status,
      ),
    });
    if (paymentVerification.status === PaymentVerificationStatus.NOT_VERIFIED)
      return failedVerification;

    return {
      amount: payment.amount,
      userId: payment.userId.toString(),
      status: paymentVerification.status,
      transactionNo: paymentVerification.transactionNo,
    };
  }
}
