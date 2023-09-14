import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Counter {
  @Prop({ required: true })
  video_id: mongoose.Types.ObjectId;

  @Prop({ required: true })
  user_id: mongoose.Types.ObjectId;

  @Prop({ required: true })
  minute: number;
}

export const CounterSchema = SchemaFactory.createForClass(Counter);
