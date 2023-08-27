import { FC, useCallback, useState } from "react";
import TicketItem from "./components/TicketItem";
import AuditModal from "./components/AuditModal";
import { AuditModalState } from "./types";
import { Ticket } from "src/types/tickets";
import { useQuery } from "@tanstack/react-query";
import api from "src/services";
import { TICKET_URL } from "src/pages/TicketForm/api";
import { ticketApi2Local } from "./api";
import Loading from "src/components/ui/Loading";
import { WithId } from "src/types/base";

const initialAuditModalState: AuditModalState = {
  data: {
    description: "",
    fullName: "",
    phoneNumber: "",
    type: "technical-issue",
    id: "",
  },
  show: false,
};

const Tickets: FC = () => {
  const [modalState, setModalState] = useState<AuditModalState>(
    initialAuditModalState
  );
  const tickets = useQuery({
    queryKey: ["tickets"],
    queryFn: api.get(TICKET_URL, ticketApi2Local),
  });

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
    (data: Ticket & WithId) =>
      setModalState((prevState) => ({
        ...prevState,
        data,
      })),
    []
  );

  return (
    <div className={`w-full h-full p-sm flex flex-col items-center`}>
      <div className="w-full lg:w-3/5 flex flex-col justify-center items-center space-y-sm">
        {tickets.isLoading || tickets.isError ? (
          <Loading size="lg" />
        ) : (
          tickets.data.map((ticket) => (
            <TicketItem
              data={ticket}
              onClick={() => {
                setModalData(ticket);
                openModal();
              }}
            />
          ))
        )}
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
