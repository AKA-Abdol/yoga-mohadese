export const TICKET_TYPE_VALUES = [
  "forget-password",
  "onSite-class",
  "technical-issue",
] as const;
export const TICKET_TYPE_NAMES = ["فراموشی رمز عبور", "کلاس حضوری", "مشکل فنی"];

export type TicketType = (typeof TICKET_TYPE_VALUES)[number];
export const ticketName: Record<TicketType, string> = {
  "forget-password": "فراموشی رمز عبور",
  "onSite-class": "کلاس حضوری",
  "technical-issue": "مشکل فنی",
};

export interface Ticket {
  fullName: string;
  phoneNumber: string;
  description: string;
  type: TicketType;
}

export interface ApiTicket {
  fullname: string;
  phone: string;
  description: string;
  type: TicketType;
}
