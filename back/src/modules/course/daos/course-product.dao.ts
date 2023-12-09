import { InProduct, ProductType } from 'src/modules/shop/shop.entity';
import { Course } from '../course.schema';

export abstract class CourseProductDao {
  static convertOne = (
    course: MongoDoc<Course>,
    thumbnails: string[],
  ): InProduct<MongoDoc<Course>> => ({
    id: course._id,
    type: ProductType.COURSE,
    price: course.price,
    images: thumbnails,
    detail: course,
  });
}
