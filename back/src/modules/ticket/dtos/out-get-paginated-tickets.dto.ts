import { OutPaginatedDto } from '../../../dtos/out-paginated.dto';
import { TypeTicketDto } from './type-ticket.dto';

export class OutGetPaginatedTicketsDto
  implements OutPaginatedDto<TypeTicketDto>
{
  count: number;
  values: TypeTicketDto[];
}
