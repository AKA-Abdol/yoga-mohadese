import { Ticket } from "src/types/tickets";

export interface TicketItemProps extends Ticket {
    onClick: () => void;

}

export interface AuditModalProps {
    show: boolean;
    onClose: () => void;
    data: Ticket;
}