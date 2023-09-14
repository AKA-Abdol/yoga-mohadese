import { TypeVideoDto } from '../dtos/type-video.dto';
import { Video } from '../video.schema';

export abstract class VideoDao {
  static convertOne = (model: MongoDoc<Video>): TypeVideoDto => ({
    id: model._id.toString(),
    course_id: model.course_id.toString(),
    title: model.title,
    link: model.link,
    num: model.num,
    thumbnail: model.thumbnail,
  });
}
