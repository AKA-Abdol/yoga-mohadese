import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, ObjectId, QueryWithHelpers } from 'mongoose';
import { User } from './user.schema';
import mongoose from 'mongoose';

@Injectable()
export class UserRepo {
  constructor(@InjectModel(User.name) private readonly model: Model<User>) {}

  async create(userInfo: User): Promise<MongoDoc<User>> {
    return await this.model.create(userInfo);
  }

  async getByUsername(username: string): Promise<MongoDoc<User> | null> {
    return await this.model.findOne({ username });
  }

  async getByPhone(phone: string): Promise<MongoDoc<User> | null> {
    return await this.model.findOne({ phone });
  }

  async getByEmail(email: string): Promise<MongoDoc<User> | null> {
    return await this.model.findOne({ email });
  }

  async getById(
    userId: mongoose.Types.ObjectId,
  ): Promise<MongoDoc<User> | null> {
    return await this.model.findById(userId);
  }

  async updateProfileImage(
    userId: mongoose.Types.ObjectId,
    profileImage: string,
  ): Promise<MongoDoc<User> | null> {
    return await this.model.findByIdAndUpdate(
      userId,
      { $set: { profileImage } },
      { new: true },
    );
  }

  async getAdminUsers(): Promise<MongoDoc<User>[]> {
    return await this.model.find({ is_admin: true });
  }

  async updatePasswordWithPhone(
    new_password: string,
    phone: string,
  ): Promise<MongoDoc<User> | null> {
    return await this.model.findOneAndUpdate(
      { phone },
      { $set: { password: new_password } },
    );
  }

  async getPaginatedUsers(
    limit: number,
    skip: number,
    search: string,
  ): Promise<PaginatedType<MongoDoc<User>>> {
    return (
      await this.model.aggregate([
        { $match: { is_admin: { $ne: true } } },
        {
          $match: {
            $or: [
              { username: new RegExp(search) },
              { firstname: new RegExp(search) },
              { lastname: new RegExp(search) },
              { email: new RegExp(search) },
              { phone: new RegExp(search) },
            ],
          },
        },
        {
          $facet: {
            values: [{ $skip: skip }, { $limit: limit }],
            count: [{ $count: 'count' }],
          },
        },
        { $set: { count: '$count.count' } },
        { $unwind: { path: '$count', preserveNullAndEmptyArrays: true } },
      ])
    )[0];
  }
}
