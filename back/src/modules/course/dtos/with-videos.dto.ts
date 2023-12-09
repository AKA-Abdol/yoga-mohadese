import { TypeVideoDto } from 'src/modules/video/dtos/type-video.dto';
import { TypeCourseDto } from './type-course.dto';

export interface CourseWithVideos extends TypeCourseDto {
  videos: TypeVideoDto[];
}
