import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export abstract class OutPaginatedDto<T> {
  count: number;
  values: T[];
}
