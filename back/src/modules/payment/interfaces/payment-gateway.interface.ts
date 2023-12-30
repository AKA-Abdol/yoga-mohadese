import { OutCreateGateway } from './out-create-gateway.interface';
import { PaymentVerification } from './payment-verification.interface';

export interface PaymentGateway {
  createGateway(amount: number, callbackUrl: string): Promise<OutCreateGateway>;
  verify(authority: string, amount: number): Promise<PaymentVerification>;
}
