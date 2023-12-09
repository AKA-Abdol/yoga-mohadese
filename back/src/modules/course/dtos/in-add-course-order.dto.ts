import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class InAddCourseOrderBody {
  @ApiProperty({ required: true, default: '' })
  @IsString()
  courseId: string;
}
