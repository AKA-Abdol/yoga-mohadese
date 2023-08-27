export type TicketType = "forget-password" | "onSite-class" | 'technical-issue';
export const ticketName: Record<TicketType, string> = {
    "forget-password": "فراموشی رمز عبور",
    "onSite-class": "کلاس حضوری",
    "technical-issue": "مشکل فنی"
}

export interface Ticket {
    fullName: string;
    phoneNumber: string;
    description: string;
    ticketType: TicketType;
}