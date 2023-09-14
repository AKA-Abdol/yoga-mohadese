import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class TypeAccessDto {
  @ApiProperty({ required: true, default: 'id' })
  @IsString()
  id: string;

  @ApiProperty({ required: true, default: 'course_id' })
  @IsString()
  course_id: string;

  @ApiProperty({ required: true, default: 'user_id' })
  @IsString()
  user_id: string;
}
