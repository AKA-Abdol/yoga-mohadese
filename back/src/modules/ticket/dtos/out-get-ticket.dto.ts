import { ApiProperty } from '@nestjs/swagger';
import { TypeTicketDto } from './type-ticket.dto';

export class OutGetTicketDto {
  @ApiProperty({ required: true })
  ticket: TypeTicketDto;
}
