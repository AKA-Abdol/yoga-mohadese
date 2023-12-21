import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum TicketType {
  FORGET_PASSWORD = 'forget-password',
  TECHNICAL_ISSUE = 'technical-issue',
  ONSITE_CLASS_REQUEST = 'onsite-class',
}

@Schema()
export class Ticket {
  @Prop({ required: true })
  type: TicketType;

  @Prop({ required: true })
  fullname: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ default: '' })
  username: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
