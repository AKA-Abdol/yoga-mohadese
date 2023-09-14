import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Video } from './video.schema';
import mongoose from 'mongoose';

@Injectable()
export class VideoRepo {
  constructor(@InjectModel(Video.name) private readonly model: Model<Video>) {}

  async create(videoInfo: Video): Promise<MongoDoc<Video>> {
    return await this.model.create(videoInfo);
  }

  async getById(
    videoId: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<Video> | null> {
    return await this.model.findById(videoId);
  }

  async getByCourseId(
    course_id: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<Video>[]> {
    return await this.model.find({ course_id });
  }

  async deleteById(
    video_id: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<Video>[] | null> {
    return await this.model.findByIdAndDelete(video_id);
  }

  async getByNumAndCourseId(
    course_id: mongoose.Types.ObjectId,
    num: number,
  ): Promise<MongoDoc<Video> | null> {
    return await this.model.findOne({ course_id, num });
  }
}
