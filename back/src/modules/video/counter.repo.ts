import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import mongoose from 'mongoose';
import { Counter } from './counter.schema';

@Injectable()
export class CounterRepo {
  constructor(
    @InjectModel(Counter.name) private readonly model: Model<Counter>,
  ) {}

  async create(
    user_id: mongoose.Types.ObjectId,
    video_id: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<Counter>> {
    return await this.model.create({ user_id, video_id, minute: 0 });
  }

  async increaseCount(
    user_id: mongoose.Types.ObjectId,
    video_id: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<Counter> | null> {
    return await this.model.findOneAndUpdate(
      { user_id, video_id },
      { $inc: { minute: 1 } },
    );
  }

  async getCountByVideoAndUserId(
    user_id: mongoose.Types.ObjectId,
    video_id: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<Counter> | null> {
    return await this.model.findOne({ user_id, video_id });
  }
}
