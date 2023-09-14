import { WithId } from "src/types/base";
import { Ticket } from "src/types/tickets";

export interface AuditModalState {
  show: boolean;
  data: Ticket & WithId;
}
