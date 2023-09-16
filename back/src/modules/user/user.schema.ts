import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  is_admin: boolean;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: false })
  email?: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  createdAt: Date = new Date();

  @Prop()
  deletedAt?: Date;

  @Prop({ default: '' })
  note?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
