import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Access {
  @Prop({ required: true })
  course_id: mongoose.Types.ObjectId;

  @Prop({ required: true })
  user_id: mongoose.Types.ObjectId;
}

export const AccessSchema = SchemaFactory.createForClass(Access);
