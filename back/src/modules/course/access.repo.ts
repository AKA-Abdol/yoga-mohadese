import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Access } from './access.schema';
import mongoose from 'mongoose';

@Injectable()
export class AccessRepo {
  constructor(
    @InjectModel(Access.name) private readonly model: Model<Access>,
  ) {}

  async create(userInfo: Access): Promise<MongoDoc<Access>> {
    return await this.model.create(userInfo);
  }

  async remove(
    user_id: mongoose.Types.ObjectId,
    course_id: mongoose.Types.ObjectId,
  ): Promise<boolean> {
    return (await this.model.deleteMany({ user_id, course_id })).acknowledged;
  }

  async getByUserId(
    user_id: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<Access>[] | null> {
    return await this.model.find({
      user_id: user_id,
    });
  }

  async getByUserAndCourseId(
    user_id: mongoose.Types.ObjectId,
    course_id: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<Access> | null> {
    return await this.model.findOne({ user_id, course_id });
  }
}
