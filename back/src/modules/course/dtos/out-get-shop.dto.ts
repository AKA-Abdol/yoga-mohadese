import { ApiProperty } from '@nestjs/swagger';
import { CourseWithVideos } from './with-videos.dto';

export class OutGetCoursesDto {
  @ApiProperty({ required: true, default: [] })
  courses: Array<CourseWithVideos>;
  @ApiProperty({ required: true, default: 0 })
  count: number;
}
