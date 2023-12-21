import { IsEnum, IsString } from 'class-validator';
import { TicketType } from '../ticket.schema';

export class InCreateTicket {
  @IsString()
  @IsEnum(TicketType)
  type: TicketType;

  @IsString()
  fullname: string;

  @IsString()
  description: string;

  @IsString()
  phone: string;
}
