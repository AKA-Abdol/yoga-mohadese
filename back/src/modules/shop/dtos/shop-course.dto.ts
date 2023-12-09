import { TypeCourseDto } from 'src/modules/course/dtos/type-course.dto';
import { OutProduct } from '../shop.entity';

export type TypeShopCourseDto = OutProduct<TypeCourseDto>;
