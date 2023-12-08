import { TypeCourseDto } from 'src/modules/course/dtos/type-course.dto';
import { TypeShopCourseDto } from '../dtos/shop-course.dto';
import { ProductType } from '../shop.entity';
import { ID_JOIN_STR } from 'src/confings/statics';

export abstract class ShopCourseDao {
  static convertOne = (model: TypeCourseDto): TypeShopCourseDto => ({
    ...model,
    id: `${ProductType.COURSE}${ID_JOIN_STR}${model.id}`,
  });
}
