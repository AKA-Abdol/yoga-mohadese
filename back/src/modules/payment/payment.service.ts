import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
import { PaymentDto } from './dtos/payment.dto';

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
    description = 'خرید از یوگا محدثه',
  ) {
    const paymentGateway = this.getPaymentGateWay(gatewayType);
    const gateway = await paymentGateway.createGateway(
      amount,
      callbackUrl,
      description,
    );

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
    if (payment === null) return failedVerification();
    if (payment.status === PaymentStatus.SUCCESSFUL)
      return {
        paymentId: payment._id.toString(),
        userId: payment.userId.toString(),
        status: PaymentVerificationStatus.DOUBLE_VERIFIED,
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
      return failedVerification(payment._id.toString());

    return {
      paymentId: payment._id.toString(),
      userId: payment.userId.toString(),
      status: paymentVerification.status,
    };
  }

  async getOne(paymentId: string): Promise<PaymentDto> {
    if (!mongoose.Types.ObjectId.isValid(paymentId))
      throw new NotFoundException('پرداخت یافت نشد');

    const payment = await this.paymentRepo.findById(
      new mongoose.Types.ObjectId(paymentId),
    );
    if (payment === null) throw new NotFoundException('پرداخت یافت نشد');
    return PaymentDto.fromPayment(payment);
  }

  async getAll(userId: string): Promise<PaymentDto[]> {
    const payments = await this.paymentRepo.findAllByUserId(
      new mongoose.Types.ObjectId(userId),
    );
    return payments.map(PaymentDto.fromPayment);
  }
}
