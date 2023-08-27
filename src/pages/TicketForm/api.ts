import { Ticket } from "src/types/tickets";

export const TICKET_URL = "ticket";

export const localTicket2Api = (ticket: Ticket) => ({
  type: ticket.type,
  firstname: ticket.fullName,
  lastname: " ",
  description: ticket.description,
  phone: ticket.phoneNumber,
});
