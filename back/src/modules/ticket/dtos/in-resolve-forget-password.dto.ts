import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
import { InPaginatedDto } from '../../../dtos/in-paginated.dto';
import { InSearchableDto } from '../../../dtos/in-searchable.dto';

export class InResolveForgetPassword {
  @ApiProperty({ required: true, default: 'ticket_id' })
  @IsString()
  ticket_id: string;

  @ApiProperty({ required: true, default: 'new_password' })
  @IsString()
  @MinLength(8)
  new_password: string;
}
