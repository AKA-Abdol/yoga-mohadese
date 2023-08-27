import { FC, useCallback, useState } from "react";
import TicketItem from "./components/TicketItem";
import AuditModal from "./components/AuditModal";
import { AuditModalState } from "./types";
import { Ticket } from "src/types/tickets";

const initialAuditModalState: AuditModalState = {
  data: {
    description: "",
    fullName: "",
    phoneNumber: "",
    ticketType: "technical-issue",
  },
  show: false,
};

const Tickets: FC = () => {
  const [modalState, setModalState] = useState<AuditModalState>(
    initialAuditModalState
  );
  const closeModal = useCallback(
    () =>
      setModalState((prevState) => ({
        ...prevState,
        show: false,
      })),
    []
  );
  const openModal = useCallback(
    () => setModalState((prevState) => ({ ...prevState, show: true })),
    []
  );

  const setModalData = useCallback(
    (data: Ticket) =>
      setModalState((prevState) => ({
        ...prevState,
        data,
      })),
    []
  );
  return (
    <div className={`w-full h-full p-sm flex flex-col items-center`}>
      <div className="w-full lg:w-3/5 flex flex-col justify-center items-center space-y-sm">
        <TicketItem
          fullName="آرسام بختیاری"
          description="یک سری توضیحات"
          phoneNumber="۰۹۱۹۵۰۰۶۷۸۱"
          ticketType="forget-password"
          onClick={() => {
            openModal();
          }}
        />
        <TicketItem
          fullName="آرسام بختیاری"
          description="یک سری توضیحات"
          phoneNumber="۰۹۱۹۵۰۰۶۷۸۱"
          ticketType="onSite-class"
          onClick={() => {
            openModal();
          }}
        />
        <TicketItem
          fullName="آرسام بختیاری"
          description="یک سری توضیحات"
          phoneNumber="۰۹۱۹۵۰۰۶۷۸۱"
          ticketType="technical-issue"
          onClick={() => {
            openModal();
          }}
        />
      </div>
      <AuditModal
        data={modalState.data}
        show={modalState.show}
        onClose={closeModal}
      />
    </div>
  );
};

export default Tickets;
