import { ApiProperty } from '@nestjs/swagger';
import { TypeCourseDto } from './type-course.dto';
import { TypeVideoDto } from '../../video/dtos/type-video.dto';

export class OutGetCourseDto {
  @ApiProperty({ required: true })
  course: TypeCourseDto & { videos: TypeVideoDto[] };
}
