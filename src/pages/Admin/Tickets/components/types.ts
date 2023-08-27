import { WithId } from "src/types/base";
import { Ticket } from "src/types/tickets";

export interface TicketItemProps {
  data: Ticket;
  onClick: () => void;
}

export interface AuditModalProps {
  show: boolean;
  onClose: () => void;
  data: Ticket & WithId;
}
