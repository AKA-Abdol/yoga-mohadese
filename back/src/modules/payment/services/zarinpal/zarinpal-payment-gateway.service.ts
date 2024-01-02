import { BadRequestException, Injectable } from '@nestjs/common';
import { PaymentGateway } from '../../interfaces/payment-gateway.interface';
import { PaymentVerification } from '../../interfaces/payment-verification.interface';
import { OutCreateGateway } from '../../interfaces/out-create-gateway.interface';
import { PaymentVerificationStatus } from 'src/modules/payment/enums/payment-verification-status.enum';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { IZarinpalCreateGatewayRequest } from './interfaces/create-gateway-req.interface';
import { Currency } from './enums/currency.enum';
import { IZarinpalCreateGatewayResponse } from './interfaces/create-gateway-res.interface';
import { CREATE_GATEWAY_URL, getGatewayLink } from './zarinpal.config';

@Injectable()
export class ZarinpalPaymentGateway implements PaymentGateway {
  constructor(private readonly httpService: HttpService) {}
  async createGateway(
    amount: number,
    callbackUrl: string,
    description: string,
  ): Promise<OutCreateGateway> {
    const requestBody: IZarinpalCreateGatewayRequest = {
      amount,
      callback_url: callbackUrl,
      description,
      merchant_id: process.env.ZARINPAL_MERCHANT_ID ?? '',
      currency: Currency.TOMAN,
    };
    const { data } = await firstValueFrom(
      this.httpService.post<IZarinpalCreateGatewayResponse>(
        CREATE_GATEWAY_URL,
        requestBody,
      ),
    );
    if (data.errors.length > 0)
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
    return {
      status: PaymentVerificationStatus.VERIFIED,
      maskedCardNo: '610433****1868',
      transactionNo: 123,
    };
  }
}
