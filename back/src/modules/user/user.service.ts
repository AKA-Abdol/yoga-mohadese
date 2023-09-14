import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { UserRepo } from './user.repo';
import { User } from './user.schema';
import { InLoginDto } from '../auth/dtos/in-login.dto';
import { InRegisterDto } from '../auth/dtos/in-register.dto';
import { UserDao } from './daos/user.dao';
import { TypeAuthInfoDto } from './dtos/type-auth-user.dto';
import { NotFoundError } from '../../errors/not-found-error';
import { BadRequestError } from '../../errors/bad-request-error';
import { DuplicateError } from '../../errors/duplicate-error';
import { InGetPaginatedUsers } from './dtos/in-get-paginated-users.dto';
import { OutGetPaginatedUsersDto } from './dtos/out-get-paginated-users.dto';
import { TypeUserDto } from './dtos/type-user.dto';
import { CourseService } from '../course/course.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepo,
    private readonly courseService: CourseService,
  ) {}

  async verifyRegisterInput(
    userInfo: InRegisterDto,
  ): Promise<DuplicateError | BadRequestError | true> {
    if (!(await this.isUsernameAvailable(userInfo.username)))
      return new DuplicateError('Username');
    if (userInfo.email && !(await this.isEmailAvailable(userInfo.email)))
      return new DuplicateError('Email');
    if (userInfo.phone && !(await this.isPhoneAvailable(userInfo.phone)))
      return new DuplicateError('Phone');
    if (!userInfo.email && !userInfo.phone)
      return new BadRequestError('RequiredEmailOrPhone');
    return true;
  }

  async isUsernameAvailable(username: string): Promise<boolean> {
    const userModel = await this.userRepo.getByUsername(username);

    return !userModel;
  }

  async isEmailAvailable(email: string): Promise<boolean> {
    const userModel = await this.userRepo.getByEmail(email);

    return !userModel;
  }

  async isPhoneAvailable(phone: string): Promise<boolean> {
    const userModel = await this.userRepo.getByPhone(phone);

    return !userModel;
  }

  async createUser(
    userInfo: InRegisterDto,
  ): Promise<TypeUserDto | BadRequestError | DuplicateError> {
    let isInputValid = await this.verifyRegisterInput(userInfo);
    if (isInputValid !== true) return isInputValid;
    const userModel = await this.userRepo.create({
      is_admin:
        userInfo.username === process.env.ADMIN_USERNAME &&
        userInfo.password === process.env.ADMIN_PASSWORD,
      ...userInfo,
      createdAt: new Date(),
    });
    const userFull = UserDao.convertOne([])(userModel);

    return userFull;
  }

  async getAuthInfoByUsername(
    username: string,
  ): Promise<TypeAuthInfoDto | null> {
    const userModel = await this.userRepo.getByUsername(username);
    return userModel ? UserDao.convertOneToAuthInfo(userModel) : null;
  }

  async getAuthInfoByPhone(phone: string): Promise<TypeAuthInfoDto | null> {
    const userModel = await this.userRepo.getByPhone(phone);
    return userModel ? UserDao.convertOneToAuthInfo(userModel) : null;
  }

  async getAuthInfoByEmail(email: string): Promise<TypeAuthInfoDto | null> {
    const userModel = await this.userRepo.getByEmail(email);
    return userModel ? UserDao.convertOneToAuthInfo(userModel) : null;
  }

  async getUserByid(
    paramUserId: string,
  ): Promise<TypeUserDto | NotFoundError | BadRequestError> {
    const isIdValid = mongoose.Types.ObjectId.isValid(paramUserId);

    if (!isIdValid) return new BadRequestError('InvalidInputId');
    const userModel = await this.userRepo.getById(
      new mongoose.Types.ObjectId(paramUserId),
    );

    if (!userModel) return new NotFoundError('User');
    const courses = await this.courseService.getAllCourses(
      userModel._id.toString(),
    );
    if (courses instanceof BadRequestError) return courses.throw();
    const user = UserDao.convertOne(courses)(userModel);

    return user;
  }

  async getPaginatedUsers(
    userId: string,
    { page, num, search }: InGetPaginatedUsers,
  ): Promise<OutGetPaginatedUsersDto> {
    const paginatedUserModels = await this.userRepo.getPaginatedUsers(
      num,
      (page - 1) * num,
      search,
    );
    const res: OutGetPaginatedUsersDto = {
      count: paginatedUserModels.count ?? 0,
      values: await Promise.all(
        paginatedUserModels.values.map(async (user) => {
          const courses = await this.courseService.getAllCourses(
            user._id.toString(),
          );
          if (courses instanceof BadRequestError) return courses.throw();
          return UserDao.convertOne(courses)(user);
        }),
      ),
    };

    return res;
  }

  async getAdminUsers(): Promise<TypeUserDto[]> {
    return (await this.userRepo.getAdminUsers()).map(UserDao.convertOne([]));
  }

  async updatePasswordWithPhone(
    password: string,
    phone: string,
  ): Promise<TypeUserDto | NotFoundError> {
    const user = await this.userRepo.updatePasswordWithPhone(password, phone);
    if (!user) return new NotFoundError('User');
    return UserDao.convertOne([])(user);
  }
}
