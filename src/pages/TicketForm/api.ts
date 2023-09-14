import { Ticket } from "src/types/tickets";
import { Persian2English } from "src/utils/converts";

export const TICKET_URL = "ticket";

const NO_DESC_PLACEHOLDER = "بدون توضیحات";

export const localTicket2Api = (ticket: Ticket) => ({
  type: ticket.type,
  fullname: ticket.fullName,
  description:
    ticket.description === "" ? NO_DESC_PLACEHOLDER : ticket.description,
  phone: Persian2English(ticket.phoneNumber),
});
