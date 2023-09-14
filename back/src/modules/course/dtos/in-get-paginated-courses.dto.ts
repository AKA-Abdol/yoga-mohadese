import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { InPaginatedDto } from '../../../dtos/in-paginated.dto';
import { InSearchableDto } from '../../../dtos/in-searchable.dto';

export class InGetPaginatedCourses implements InPaginatedDto {
  @ApiProperty({ required: false, default: 1 })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  page: number = 1;

  @ApiProperty({ required: false, default: 20 })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  num: number = 20;

  @ApiProperty({ required: false, default: '' })
  @IsString()
  @IsOptional()
  search: string = '';
}
