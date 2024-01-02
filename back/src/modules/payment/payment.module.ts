import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PaymentRepo } from './payment.repo';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './payment.schema';
import { ZarinpalPaymentGateway } from './services/zarinpal/zarinpal-payment-gateway.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
    HttpModule,
  ],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentRepo, ZarinpalPaymentGateway],
  exports: [PaymentService],
})
export class PaymentModule {}
