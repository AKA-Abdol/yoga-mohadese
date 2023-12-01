import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class TypeCourseDto {
  @ApiProperty({ required: true, default: 'id' })
  @IsString()
  id: string;

  @ApiProperty({ required: true, default: 'level' })
  @IsNumber()
  level: number;

  @ApiProperty({ required: true, default: 'title' })
  title: string;

  @ApiProperty({ required: true, default: 'title' })
  description: string;

  @ApiProperty({ required: true, default: new Date() })
  start_date: Date;

  @ApiProperty({ required: true, default: new Date() })
  end_date: Date;

  @ApiProperty({ required: true, default: 95000 })
  price: number;
}
