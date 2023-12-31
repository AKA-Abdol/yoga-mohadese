import { FC, useCallback, useState } from "react";
import TicketItem from "./components/TicketItem";
import AuditModal from "./components/AuditModal";
import { AuditModalState } from "./types";
import {
  TICKET_TYPE_NAMES,
  TICKET_TYPE_VALUES,
  Ticket,
  TicketType,
} from "src/types/tickets";
import { useQuery } from "@tanstack/react-query";
import api from "src/services";
import { TICKET_URL } from "src/pages/TicketForm/api";
import { ticketApi2Local } from "./api";
import Loading from "src/components/ui/Loading";
import { WithId } from "src/types/base";
import FilterGroup from "src/components/ui/FilterGroup";
import Pagination from "src/components/ui/Pagination";

const initialAuditModalState: AuditModalState = {
  data: {
    username: "",
    description: "",
    fullName: "",
    phoneNumber: "",
    type: "technical-issue",
    id: "",
  },
  show: false,
};

const PER_PAGE = 6;

const Tickets: FC = () => {
  const [modalState, setModalState] = useState<AuditModalState>(
    initialAuditModalState
  );
  const [filterType, setFilterType] = useState<TicketType>("forget-password");
  const [page, setPage] = useState(1);

  const tickets = useQuery({
    queryKey: ["tickets", filterType, page],
    queryFn: api.get(TICKET_URL, ticketApi2Local, {
      num: PER_PAGE,
      type: filterType,
      page,
    }),
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
    <div className={`w-full h-screen p-sm flex flex-col items-center py-sm`}>
      <div className="w-full h-[85%] lg:w-3/5 flex flex-col items-center space-y-sm">
        <FilterGroup
          activeFilter={filterType}
          filterValues={TICKET_TYPE_VALUES}
          filterNames={TICKET_TYPE_NAMES}
          setFilter={(filter: TicketType) => {
            setPage(1);
            setFilterType(filter);
          }}
        />
        <div className="w-full overflow-auto flex flex-col items-center space-y-sm">
          {tickets.isLoading || tickets.isError ? (
            <Loading size="lg" />
          ) : (
            tickets.data.values.map((ticket) => (
              <TicketItem
                data={ticket}
                onClick={() => {
                  setModalData(ticket);
                  openModal();
                }}
                key={`ticket-${ticket.id}`}
              />
            ))
          )}
        </div>
      </div>
      {tickets.isSuccess && (
        <Pagination
          page={page}
          perPage={PER_PAGE}
          setPage={setPage}
          totalCount={tickets.data.count}
        />
      )}
      <AuditModal
        data={modalState.data}
        show={modalState.show}
        onClose={closeModal}
      />
    </div>
  );
};

export default Tickets;
