import { TypeCourseDto } from '../dtos/type-course.dto';
import { Course } from '../course.schema';

export abstract class CourseDao {
  static convertOne = (model: MongoDoc<Course>): TypeCourseDto => ({
    id: model._id.toString(),
    level: model.level,
    title: model.title,
    description: model.description,
    start_date: model.start_date,
    end_date: model.end_date,
    price: model.price,
  });
}
