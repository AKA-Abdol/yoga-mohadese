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
