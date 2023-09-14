import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class InCreateCourse {
  @ApiProperty({ required: true, default: 1, type: 'number' })
  @IsNumber()
  level: number;

  @ApiProperty({ required: true, default: 'title' })
  @IsString()
  title: string;

  @ApiProperty({ required: true, default: 'description' })
  @IsString()
  description: string;

  @ApiProperty({ required: true, default: new Date(), type: 'date' })
  @IsString()
  start_date: Date;

  @ApiProperty({ required: true, default: new Date(), type: 'date' })
  @IsString()
  end_date: Date;
}
