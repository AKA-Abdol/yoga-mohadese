import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { InPaginatedDto } from '../../../dtos/in-paginated.dto';
import { TicketType } from '../ticket.schema';

export class InGetPaginatedTickets implements InPaginatedDto {
  @ApiProperty({ required: false, default: 1 })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  page = 1;

  @ApiProperty({ required: false, default: 20 })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  num = 20;

  @IsString()
  @IsEnum(TicketType)
  type: TicketType;
}
