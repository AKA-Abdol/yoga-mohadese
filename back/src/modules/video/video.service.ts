import { Inject, Injectable, forwardRef } from '@nestjs/common';
import mongoose from 'mongoose';
import { VideoRepo } from './video.repo';
import { NotFoundError } from '../../errors/not-found-error';
import { BadRequestError } from '../../errors/bad-request-error';
import { DuplicateError } from '../../errors/duplicate-error';
import { TypeVideoDto } from './dtos/type-video.dto';
import { InCreateVideo } from './dtos/in-create-video.dto';
import { VideoDao } from './daos/course.dao';
import { CourseService } from '../course/course.service';
import { OutStatusDto } from 'src/dtos/out-status.dto';
import { CounterRepo } from './counter.repo';
import { UserService } from '../user/user.service';
import { BaseError } from 'src/errors/base-error';

@Injectable()
export class VideoService {
  constructor(
    private readonly videoRepo: VideoRepo,
    private readonly counterRepo: CounterRepo,
    @Inject(forwardRef(() => CourseService))
    private readonly courseService: CourseService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  async createVideo(
    course_id: string,
    videoInfo: InCreateVideo,
  ): Promise<TypeVideoDto | DuplicateError | BadRequestError | NotFoundError> {
    const isIdValid = mongoose.Types.ObjectId.isValid(course_id);
    if (!isIdValid) return new BadRequestError('InvalidInputId');
    const course = await this.courseService.doesCourseExists(course_id);
    if (!course) return new NotFoundError('Course');
    let existing_video = await this.videoRepo.getByNumAndCourseId(
      new mongoose.Types.ObjectId(course_id),
      videoInfo.num,
    );
    if (existing_video) return new DuplicateError('Video');
    const videoModel = await this.videoRepo.create({
      ...videoInfo,
      course_id: new mongoose.Types.ObjectId(course_id),
    });
    const video = VideoDao.convertOne(videoModel);

    return video;
  }

  async getVideosByCourseId(
    courseId: string,
  ): Promise<TypeVideoDto[] | NotFoundError | BadRequestError> {
    const isIdValid = mongoose.Types.ObjectId.isValid(courseId);
    if (!isIdValid) return new BadRequestError('InvalidInputId');
    let videoModels = await this.videoRepo.getByCourseId(
      new mongoose.Types.ObjectId(courseId),
    );
    return videoModels.map(VideoDao.convertOne);
  }

  async getVideosByUserIdAndCourseId(
    userId: string,
    courseId: string,
  ): Promise<TypeVideoDto[] | NotFoundError | BadRequestError> {
    const isIdValid = mongoose.Types.ObjectId.isValid(courseId);
    if (!isIdValid) return new BadRequestError('InvalidInputId');
    let videoModels = await this.videoRepo.getByCourseId(
      new mongoose.Types.ObjectId(courseId),
    );
    return (
      await Promise.all(
        videoModels.map(VideoDao.convertOne).map(async (video) => ({
          video,
          view_count: await this.getVideosViewCount(userId, video.id),
        })),
      )
    )
      .filter(({ view_count }) => typeof view_count === 'number')
      .filter(({ view_count }) => (view_count as number) < 4 * 60)
      .map(({ video }) => video);
  }

  async deleteVideo(
    vidoeId: string,
  ): Promise<OutStatusDto | NotFoundError | BadRequestError> {
    const isIdValid = mongoose.Types.ObjectId.isValid(vidoeId);
    if (!isIdValid) return new BadRequestError('InvalidInputId');
    let videoModels = await this.videoRepo.deleteById(
      new mongoose.Types.ObjectId(vidoeId),
    );
    return { status: true };
  }

  async getVideosViewCount(
    userId: string,
    videoId: string,
  ): Promise<number | BadRequestError> {
    const isIdValid =
      mongoose.Types.ObjectId.isValid(userId) &&
      mongoose.Types.ObjectId.isValid(videoId);
    if (!isIdValid) return new BadRequestError('InvalidInputId');
    let videoCount = await this.counterRepo.getCountByVideoAndUserId(
      new mongoose.Types.ObjectId(userId),
      new mongoose.Types.ObjectId(videoId),
    );
    return videoCount?.minute ?? 0;
  }

  async increaseViewCount(
    userId: string,
    vidoeId: string,
  ): Promise<number | BadRequestError | NotFoundError> {
    const isIdValid =
      mongoose.Types.ObjectId.isValid(vidoeId) &&
      mongoose.Types.ObjectId.isValid(userId);
    if (!isIdValid) return new BadRequestError('InvalidInputId');
    const user = await this.userService.getUserByid(userId);
    if (user instanceof BaseError) return user;
    if (user.is_admin) return 0;
    let viewCount = await this.counterRepo.getCountByVideoAndUserId(
      new mongoose.Types.ObjectId(userId),
      new mongoose.Types.ObjectId(vidoeId),
    );
    if (!viewCount) {
      await this.counterRepo.create(
        new mongoose.Types.ObjectId(userId),
        new mongoose.Types.ObjectId(vidoeId),
      );
    } else {
      await this.counterRepo.increaseCount(
        new mongoose.Types.ObjectId(userId),
        new mongoose.Types.ObjectId(vidoeId),
      );
    }

    return this.getVideosViewCount(userId, vidoeId);
  }
}
