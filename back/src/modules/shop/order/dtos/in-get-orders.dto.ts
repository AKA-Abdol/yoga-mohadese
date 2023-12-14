import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';
import { InPaginatedDto } from 'src/dtos/in-paginated.dto';

export class InGetOrdersQueryDto implements InPaginatedDto {
  @ApiProperty({ required: false, default: 1, type: 'number' })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  page = 1;

  @ApiProperty({ required: false, default: 20, type: 'number' })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  num = 20;
}
