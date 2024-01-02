import { ZarinpalPaymentVerificationStatus } from '../enums/payment-verification-status.enum';

export interface IZarinpalVerifyResponse {
  data: {
    code: ZarinpalPaymentVerificationStatus;
    card_pan: string;
    ref_id: number;
  };
  errors: any[];
}
