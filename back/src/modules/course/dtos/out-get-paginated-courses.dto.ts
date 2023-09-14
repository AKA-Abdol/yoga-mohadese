import { OutPaginatedDto } from '../../../dtos/out-paginated.dto';
import { TypeCourseDto } from './type-course.dto';

export class OutGetPaginatedCoursesDto
  implements OutPaginatedDto<TypeCourseDto>
{
  count: number;
  values: TypeCourseDto[];
}
