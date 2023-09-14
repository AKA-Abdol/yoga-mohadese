import { TypeCourseDto } from '../dtos/type-course.dto';
import { Course } from '../course.schema';
import { Access } from '../access.schema';
import { TypeAccessDto } from '../dtos/type-access.dto';

export abstract class AccessDao {
  static convertOne = (model: MongoDoc<Access>): TypeAccessDto => ({
    id: model._id.toString(),
    course_id: model.course_id.toString(),
    user_id: model.user_id.toString(),
  });
}
