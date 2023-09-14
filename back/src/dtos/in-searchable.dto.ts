import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export abstract class InSearchableDto {
  @ApiProperty({ required: false, default: '' })
  @IsString()
  @IsOptional()
  search: string = '';
}
