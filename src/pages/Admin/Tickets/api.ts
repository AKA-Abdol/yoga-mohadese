import { IApiList, WithId } from "src/types/base";
import { ApiTicket, Ticket } from "src/types/tickets";

export const ticketApi2Local = (
  ticketData: IApiList<ApiTicket & WithId>
): Array<Ticket & WithId> =>
  ticketData.values.map((ticket) => ({
    id: ticket.id,
    description: ticket.description,
    fullName: ticket.firstname,
    phoneNumber: ticket.phone,
    type: ticket.type,
  }));
