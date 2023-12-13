import {
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
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
import { AccessService } from './access.service';
import { BaseError } from '../../errors/base-error';
import { UserService } from '../user/user.service';
import { VideoService } from '../video/video.service';
import { OutGetCourseDto } from './dtos/out-get-course.dto';
import { OutGetCoursesDto } from './dtos/out-get-shop.dto';
import { InPaginatedDto } from 'src/dtos/in-paginated.dto';
import { InProduct } from '../shop/shop.entity';
import { CourseProductDao } from './daos/course-product.dao';
import { TypeVideoDto } from '../video/dtos/type-video.dto';
import { Course } from './course.schema';
import { access } from 'fs';

@Injectable()
export class CourseService {
  constructor(
    private readonly courseRepo: CourseRepo,
    private readonly accessService: AccessService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(forwardRef(() => VideoService))
    private readonly videoService: VideoService,
  ) {}

  async createCourse(
    courseInfo: InCreateCourse,
  ): Promise<TypeCourseDto | DuplicateError> {
    const courseModel = await this.courseRepo.create(courseInfo);
    const courseFull = CourseDao.convertOne(courseModel);
    const adminUsers = await this.userService.getAdminUsers();
    adminUsers.forEach((user) =>
      this.accessService.createAccess({
        course_id: courseFull.id,
        user_id: user.id,
      }),
    );
    return courseFull;
  }

  async editCourse(
    course_id: string,
    courseInfo: InCreateCourse,
  ): Promise<OutGetCourseDto | BadRequestError | NotFoundError> {
    const isIdValid = mongoose.Types.ObjectId.isValid(course_id);
    if (!isIdValid) return new BadRequestError('InvalidInputId');
    await this.courseRepo.editById(
      new mongoose.Types.ObjectId(course_id),
      courseInfo,
    );
    const course = await this.courseRepo.getById(
      new mongoose.Types.ObjectId(course_id),
    );
    if (course === null) return new NotFoundError('Course');
    const courseFull = CourseDao.convertOne(course);
    const videos = await this.videoService.getVideosByCourseId(course.id);
    if (videos instanceof BaseError) return videos.throw();
    return { course: { ...courseFull, videos } };
  }

  async getCourseById(
    userId: string,
    courseId: string,
  ): Promise<TypeCourseDto | NotFoundError | BadRequestError> {
    const isIdValid = mongoose.Types.ObjectId.isValid(courseId);
    if (!isIdValid) return new BadRequestError('InvalidInputId');
    if (!this.accessService.checkUserAccessToCourse(userId, courseId))
      return new NotFoundError('Course');
    const courseModel = await this.courseRepo.getById(
      new mongoose.Types.ObjectId(courseId),
    );
    if (!courseModel) return new NotFoundError('Course');
    const course = CourseDao.convertOne(courseModel);

    return course;
  }

  async getAccessedCoursesWithVideos(
    userId: string,
    courseId: string,
  ): Promise<OutGetCourseDto | NotFoundError | BadRequestError> {
    const course = await this.getCourseById(userId, courseId);
    if (course instanceof BaseError) return course.throw();
    const videos = await this.videoService.getVideosByUserIdAndCourseId(
      userId,
      course.id,
    );
    if (videos instanceof BaseError) return videos.throw();
    return { course: { ...course, videos } };
  }

  async doesCourseExists(course_id: string): Promise<boolean> {
    const course = await this.courseRepo.getById(
      new mongoose.Types.ObjectId(course_id),
    );
    return course !== null;
  }

  async deleteCourseById(
    courseId: string,
  ): Promise<OutGetCourseDto | NotFoundError | BadRequestError> {
    const isIdValid = mongoose.Types.ObjectId.isValid(courseId);
    if (!isIdValid) return new BadRequestError('InvalidInputId');
    const courseModel = await this.courseRepo.deleteById(
      new mongoose.Types.ObjectId(courseId),
    );
    if (!courseModel) return new NotFoundError('Course');
    const course = CourseDao.convertOne(courseModel);
    const videos = await this.videoService.getVideosByCourseId(course.id);
    if (videos instanceof BaseError) return videos.throw();
    return { course: { ...course, videos } };
  }

  async getAllCourses(
    userId: string,
  ): Promise<TypeCourseDto[] | BadRequestError> {
    const userAccesses = await this.accessService.getAccessesByUserId(userId);
    // const adminUsers = await this.userService.getAdminUsers();

    if (userAccesses instanceof BaseError) return userAccesses.throw();
    const courses = await Promise.all(
      userAccesses.map((c) =>
        this.courseRepo.getById(new mongoose.Types.ObjectId(c.course_id)),
      ),
    );

    if (
      courses.length === 0
      // adminUsers.filter((adminUser) => adminUser.id === userId).length !== 0
    )
      courses.push(...(await this.courseRepo.getLevelZeroCourses()));

    return courses.reduce(
      (perv, curr) => (curr ? [...perv, CourseDao.convertOne(curr)] : perv),
      [] as TypeCourseDto[],
    );
    //.map(CourseDao.convertOne);
  }

  async getPaginatedCourses(
    userId: string,
    { page, num, search }: InGetPaginatedCourses,
  ): Promise<OutGetPaginatedCoursesDto | BadRequestError> {
    const courses = await this.getAllCourses(userId);

    if (courses instanceof BadRequestError) return courses.throw();

    const res: OutGetPaginatedCoursesDto = {
      count: courses.length,
      values: courses
        .filter((course) => course.title.includes(search))
        .slice((page - 1) * num, page * num),
    };

    return res;
  }

  async getCoursesWithVideos({
    page,
    num,
  }: InPaginatedDto): Promise<OutGetCoursesDto> {
    const courses = await this.courseRepo.getPaginatedCourses(
      num,
      (page - 1) * num,
    );

    const courseVideos = (await Promise.all(
      courses.values.map((course) =>
        this.videoService.getVideosByCourseId(course._id.toString()),
      ),
    )) as TypeVideoDto[][];

    if (
      courseVideos.filter((videos) => videos instanceof BaseError).length !== 0
    )
      throw new InternalServerErrorException('خطای سرور رخ داده است');

    courseVideos;
    return {
      count: courses.count || 0,
      courses: courses.values.map((course, index) => ({
        ...CourseDao.convertOne(course),
        videos: courseVideos[index],
      })),
    };
  }

  async getCourseProduct(
    courseId: mongoose.Types.ObjectId,
  ): Promise<InProduct> {
    const course = await this.courseRepo.getById(courseId);
    if (course === null) throw new NotFoundException('کورس یافت نشد');
    const videos = await this.videoService.getVideosByCourseId(
      courseId.toString(),
    );
    if (videos instanceof BaseError) return videos.throw();
    return CourseProductDao.convertOne(
      course,
      videos.map((video) => video.thumbnail),
    );
  }

  async isAvailable(courseId: mongoose.Types.ObjectId): Promise<boolean> {
    const course = await this.courseRepo.getById(courseId);
    return course !== null;
  }

  async createAccessForUser(userId: string, courseIds: string[]) {
    const accesses = await Promise.all(
      courseIds.map((courseId) =>
        this.accessService.createAccess({
          user_id: userId,
          course_id: courseId,
        }),
      ),
    );
    if (
      accesses.filter((access) => access instanceof DuplicateError).length > 0
    )
      throw new ConflictException('قبلا به یکی از ترم ها دسترسی داشته اید');

    return accesses;
  }
}
