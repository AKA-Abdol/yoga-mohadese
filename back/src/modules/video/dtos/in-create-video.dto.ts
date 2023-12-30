import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class InCreateVideo {
  @ApiProperty({ required: true, default: 'title' })
  @IsNumber()
  num: number;

  @ApiProperty({ required: true, default: 'title' })
  @IsString()
  title: string;

  @ApiProperty({ required: true, default: 'www.google.com' })
  @IsString()
  link: string;

  @ApiProperty({ required: true, default: 'www.google.com' })
  @IsString()
  thumbnail: string;

  @IsString()
  description: string;
}
