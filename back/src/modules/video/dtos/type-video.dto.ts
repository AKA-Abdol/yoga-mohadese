import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class TypeVideoDto {
  @ApiProperty({ required: true, default: 'id' })
  @IsString()
  id: string;

  @ApiProperty({ required: true, default: 'level' })
  @IsString()
  course_id: string;

  @ApiProperty({ required: true, default: 'title' })
  title: string;

  @ApiProperty({ required: true, default: 'www.google.com' })
  link: string;

  @ApiProperty({ required: true, default: 'www.google.com' })
  thumbnail: string;

  @ApiProperty({ required: true, default: 1 })
  num: number;

  description: string;
}
