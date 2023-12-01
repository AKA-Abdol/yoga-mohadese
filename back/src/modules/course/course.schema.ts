import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Course {
  @Prop({ required: true })
  level: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  start_date: Date;

  @Prop({ required: true })
  end_date: Date;

  @Prop()
  deletedAt?: Date;

  @Prop({ default: 0 })
  price: number;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
