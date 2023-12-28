import { ZarinpalCallbackStatus } from './zarinpal.enums';

export class ZarinpalCallbackQueryDto {
  Status: ZarinpalCallbackStatus;
  Authority: string;
}
