import { TypeShopCourseDto } from '../dtos/shop-course.dto';
import { ProductType } from '../shop.entity';
import { ID_JOIN_STR, MAX_COURSE_QUANTITY_TO_BUY } from 'src/confings/statics';
import { CourseWithVideos } from 'src/modules/course/dtos/with-videos.dto';

export abstract class ShopCourseDao {
  static convertOne = (
    courseWithVideos: CourseWithVideos,
  ): TypeShopCourseDto => {
    const { videos, ...course } = courseWithVideos;
    return {
      id: `${ProductType.COURSE}${ID_JOIN_STR}${course.id}`,
      type: ProductType.COURSE,
      images: videos.map((video) => video.thumbnail),
      price: course.price,
      detail: course,
      maxQuantity: MAX_COURSE_QUANTITY_TO_BUY,
    };
  };
}
