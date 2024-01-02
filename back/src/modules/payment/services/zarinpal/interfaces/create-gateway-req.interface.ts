import { Currency } from '../enums/currency.enum';

export interface IZarinpalCreateGatewayRequest {
  merchant_id: string;
  amount: number;
  description: string;
  callback_url: string;
  currency: Currency;
}
