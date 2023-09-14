import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class InGrantAccessDto {
  @ApiProperty({ required: false, default: 'id' })
  @IsString()
  course_id: string;
}
