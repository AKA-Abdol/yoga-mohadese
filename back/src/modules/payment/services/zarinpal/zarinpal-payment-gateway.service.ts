import { BadRequestException, Injectable } from '@nestjs/common';
import { PaymentGateway } from '../../interfaces/payment-gateway.interface';
import {
  PaymentVerification,
  failedPaymentVerification,
} from '../../interfaces/payment-verification.interface';
import { OutCreateGateway } from '../../interfaces/out-create-gateway.interface';
import { PaymentVerificationStatus } from 'src/modules/payment/enums/payment-verification-status.enum';
import { HttpService } from '@nestjs/axios';
import { Observable, catchError, firstValueFrom } from 'rxjs';
import { IZarinpalCreateGatewayRequest } from './interfaces/create-gateway-req.interface';
import { Currency } from './enums/currency.enum';
import { IZarinpalCreateGatewayResponse } from './interfaces/create-gateway-res.interface';
import {
  CREATE_GATEWAY_URL,
  VERIFY_PAYMENT_URL,
  getGatewayLink,
  getMerchantId,
} from './zarinpal.config';
import { IZarinpalVerifyResponse } from './interfaces/verify-payment-res.interface';
import { IZarinpalVerifyRequest } from './interfaces/verify-payment-req.interface';
import { ZarinpalPaymentVerificationStatus } from './enums/payment-verification-status.enum';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';

@Injectable()
export class ZarinpalPaymentGateway implements PaymentGateway {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async createGateway(
    amount: number,
    callbackUrl: string,
    description: string,
  ): Promise<OutCreateGateway> {
    const requestBody: IZarinpalCreateGatewayRequest = {
      amount,
      callback_url: callbackUrl,
      description,
      merchant_id: this.configService.get<string>('ZARINPAL_MERCHANT_ID') ?? '',
      currency: Currency.TOMAN,
    };
    console.log(requestBody);
    const { data } = await firstValueFrom(
      this.httpService
        .post<IZarinpalCreateGatewayResponse>(CREATE_GATEWAY_URL, requestBody)
        .pipe(
          catchError(() => {
            throw new BadRequestException(
              'در حال حاضر امکان ساخت درگاه وجود ندارد. لطفا دقایقی دیگر دوباره مراجعه کنید',
            );
          }),
        ),
    );
    console.log(data);
    if (!data.data.authority)
      throw new BadRequestException(
        'در حال حاضر امکان ساخت درگاه وجود ندارد. لطفا دقایقی دیگر دوباره مراجعه کنید',
      );
    return {
      authority: data.data.authority,
      gatewayLink: getGatewayLink(data.data.authority),
    };
  }

  async verify(
    verificationId: string,
    amount: number,
  ): Promise<PaymentVerification> {
    const requestBody: IZarinpalVerifyRequest = {
      amount,
      authority: verificationId,
      merchant_id: this.configService.get<string>('ZARINPAL_MERCHANT_ID') ?? '',
    };
    try {
      const { data } = await firstValueFrom(
        this.httpService.post<IZarinpalVerifyResponse>(
          VERIFY_PAYMENT_URL,
          requestBody,
        ),
      );
      if (!data.data.card_pan) return failedPaymentVerification;

      return {
        status: this.getVerificationStatus(data.data.code),
        maskedCardNo: data.data.card_pan,
        transactionNo: data.data.ref_id,
      };
    } catch (err) {
      return failedPaymentVerification;
    }
  }

  private getVerificationStatus(code: ZarinpalPaymentVerificationStatus) {
    switch (code) {
      case ZarinpalPaymentVerificationStatus.VERIFIED:
        return PaymentVerificationStatus.VERIFIED;
      default:
        return PaymentVerificationStatus.DOUBLE_VERIFIED;
    }
  }
}
