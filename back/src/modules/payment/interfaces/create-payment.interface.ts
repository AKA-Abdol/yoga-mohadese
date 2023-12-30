import mongoose from 'mongoose';
import { Gateway } from '../enums/gateway.enum';
export interface ICreatePayment {
  userId: mongoose.Types.ObjectId;
  amount: number;
  gateway: Gateway;
  authority: string;
}
