import { ApiProperty } from '@nestjs/swagger';
import { TypeCourseDto } from './type-course.dto';

export class OutGetCoursesDto {
  @ApiProperty({ required: true, default: [] })
  courses: TypeCourseDto[];
  @ApiProperty({ required: true, default: 0 })
  count: number;
}
