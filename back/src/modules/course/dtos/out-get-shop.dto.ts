import { ApiProperty } from '@nestjs/swagger';
import { InCourseProduct } from 'src/modules/shop/shop.entity';

export class OutGetCoursesDto {
  @ApiProperty({ required: true, default: [] })
  courses: InCourseProduct[];
  @ApiProperty({ required: true, default: 0 })
  count: number;
}
