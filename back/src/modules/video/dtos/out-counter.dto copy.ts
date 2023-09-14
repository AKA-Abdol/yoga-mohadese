import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { TypeVideoDto } from './type-video.dto';

export class OutCounter {
  @ApiProperty({ required: true })
  view_count: number;
}
