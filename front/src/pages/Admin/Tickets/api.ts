import { TICKET_URL } from "src/pages/TicketForm/api";
import { ApiListSchema } from "src/types/api";
import { IApiList, WithId } from "src/types/base";
import { ApiTicket, Ticket } from "src/types/tickets";

export const ticketApi2Local = (
  ticketData: IApiList<ApiTicket & WithId>
): ApiListSchema<Ticket & WithId> => ({
  values: ticketData.values.map((ticket) => ({
    id: ticket.id,
    description: ticket.description,
    fullName: ticket.fullname,
    phoneNumber: ticket.phone,
    type: ticket.type,
  })),
  count: ticketData.count,
});

export const TICKET_PASSWORD_RESOLVE_URL = `${TICKET_URL}/resolve/forgot_password`;
