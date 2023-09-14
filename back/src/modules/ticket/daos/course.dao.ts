import { TypeTicketDto } from '../dtos/type-ticket.dto';
import { Ticket } from '../ticket.schema';

export abstract class TicketDao {
  static convertOne = (model: MongoDoc<Ticket>): TypeTicketDto => ({
    id: model._id.toString(),
    fullname: model.fullname,
    description: model.description,
    phone: model.phone,
    type: model.type,
  });
}
