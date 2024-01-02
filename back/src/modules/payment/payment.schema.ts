import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PaymentStatus } from './enums/payment-status.enum';
import mongoose from 'mongoose';
import { Gateway } from './enums/gateway.enum';

@Schema({ timestamps: true })
export class Payment {
  @Prop()
  gateway: Gateway;

  @Prop({ default: PaymentStatus.FAILED })
  status: PaymentStatus;

  @Prop()
  userId: mongoose.Types.ObjectId;

  @Prop()
  amount: number;

  @Prop()
  authority: string;

  @Prop()
  transactionNo: number;

  @Prop()
  maskedCardNo: string;

  @Prop({ default: mongoose.now() })
  createdAt: Date;

  @Prop({ default: mongoose.now() })
  updatedAt: Date;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
