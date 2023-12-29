import { IsEnum, IsString } from 'class-validator';
import { ZarinpalCallbackStatus } from './zarinpal.enums';

export class ZarinpalCallbackQueryDto {
  @IsEnum(ZarinpalCallbackStatus)
  Status: ZarinpalCallbackStatus;

  @IsString()
  Authority: string;
}
