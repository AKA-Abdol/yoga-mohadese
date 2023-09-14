import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoRepo } from './video.repo';
import { Video, VideoSchema } from './video.schema';
import { VideoService } from './video.service';
import { CourseController } from './video.controller';
import { CourseModule } from '../course/course.module';
import { CounterRepo } from './counter.repo';
import { Counter, CounterSchema } from './counter.schema';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }]),
    MongooseModule.forFeature([{ name: Counter.name, schema: CounterSchema }]),
    forwardRef(() => CourseModule),
    forwardRef(() => UserModule),
  ],
  controllers: [CourseController],
  providers: [VideoService, VideoRepo, CounterRepo],
  exports: [VideoService],
})
export class VideoModule {}
