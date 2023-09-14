import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class InIncreaseCounter {
  @ApiProperty({ required: true, default: 'user_id' })
  @IsString()
  user_id: string;

  @ApiProperty({ required: true, default: 'video_id' })
  @IsString()
  video_id: string;
}
