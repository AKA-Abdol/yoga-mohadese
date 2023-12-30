import { IsEnum } from 'class-validator';
import { Gateway } from 'src/payment/enums/gateway.enum';

export class InSubmitOrderBody {
  @IsEnum(Gateway)
  gateway: Gateway;
}
