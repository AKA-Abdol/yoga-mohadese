// export abstract class VideoDao {
//     static convertOne = (model: MongoDoc<Video>): TypeVideoDto => ({
//       id: model._id.toString(),
//       course_id: model.course_id.toString(),
//       title: model.title,
//       link: model.link,
//       num: model.num,
//       thumbnail: model.thumbnail,
//     });
//   }

import { TypeCourseDto } from 'src/modules/course/dtos/type-course.dto';
import { ShopItemType } from '../shop.entity';
import { TypeShopCourseDto } from '../dtos/shop-course.dto';

export abstract class ShopCourseDao {
  static convertOne = (model: TypeCourseDto): TypeShopCourseDto => ({
    ...model,
    id: `${ShopItemType.COURSE}_${model.id}`,
  });
}
