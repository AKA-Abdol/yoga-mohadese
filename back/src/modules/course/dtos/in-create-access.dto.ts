import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class InAccessCourse {
  @ApiProperty({ required: true, default: 'course_id' })
  @IsString()
  course_id: string;

  @ApiProperty({ required: true, default: 'user_id' })
  @IsString()
  user_id: string;
}
