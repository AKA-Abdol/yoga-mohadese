import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { CourseRepo } from './course.repo';
import { NotFoundError } from '../../errors/not-found-error';
import { BadRequestError } from '../../errors/bad-request-error';
import { DuplicateError } from '../../errors/duplicate-error';
import { InGetPaginatedCourses } from './dtos/in-get-paginated-courses.dto';
import { OutGetPaginatedCoursesDto } from './dtos/out-get-paginated-courses.dto';
import { TypeCourseDto } from './dtos/type-course.dto';
import { InCreateCourse } from './dtos/in-create-course.dto';
import { CourseDao } from './daos/course.dao';
import { AccessRepo } from './access.repo';
import { InAccessCourse } from './dtos/in-create-access.dto';
import { OutGetCoursesDto } from './dtos/out-get-course.dto';
import { AccessDao } from './daos/access.dao';
import { TypeAccessDto } from './dtos/type-access.dto';
import { OutStatusDto } from '../../dtos/out-status.dto';

@Injectable()
export class AccessService {
  constructor(private readonly accessRepo: AccessRepo) {}

  async createAccess(
    accessInfo: InAccessCourse,
  ): Promise<TypeAccessDto | DuplicateError> {
    const accessModel = await this.accessRepo.create({
      ...accessInfo,
      course_id: new mongoose.Types.ObjectId(accessInfo.course_id),
      user_id: new mongoose.Types.ObjectId(accessInfo.user_id),
    });
    const accessFull = AccessDao.convertOne(accessModel);

    return accessFull;
  }

  async remove_access(
    user_id: string,
    course_id: string,
  ): Promise<OutStatusDto> {
    const status = await this.accessRepo.remove(
      new mongoose.Types.ObjectId(user_id),
      new mongoose.Types.ObjectId(course_id),
    );

    return { status };
  }

  async getAccessesByUserId(
    userId: string,
  ): Promise<TypeAccessDto[] | NotFoundError | BadRequestError> {
    const isIdValid = mongoose.Types.ObjectId.isValid(userId);
    if (!isIdValid) return new BadRequestError('InvalidInputId');
    const accessModel = await this.accessRepo.getByUserId(
      new mongoose.Types.ObjectId(userId),
    );
    if (!accessModel) return new NotFoundError('Course');
    const access = accessModel.map(AccessDao.convertOne);

    return access;
  }

  async checkUserAccessToCourse(
    userId: string,
    courseId: string,
  ): Promise<boolean | BadRequestError> {
    const isIdValid =
      mongoose.Types.ObjectId.isValid(courseId) &&
      mongoose.Types.ObjectId.isValid(courseId);
    if (!isIdValid) return new BadRequestError('InvalidInputId');
    let access = await this.accessRepo.getByUserAndCourseId(
      new mongoose.Types.ObjectId(userId),
      new mongoose.Types.ObjectId(courseId),
    );
    console.log(access);
    if (!access) return false;
    else return true;
  }
}
