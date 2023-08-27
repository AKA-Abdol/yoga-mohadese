import { FC } from "react";
import Modal from "src/components/ui/Modal";
import { AuditModalProps } from "./types";
import Button from "src/components/ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "src/services";
import { TICKET_URL } from "src/pages/TicketForm/api";

const AuditModal: FC<AuditModalProps> = (props) => {
  const queryClient = useQueryClient();
  const deleteTicket = useMutation(
    api.delete(`${TICKET_URL}/${props.data.id}`)
  );

  if (deleteTicket.isSuccess) {
    deleteTicket.reset();
    queryClient.invalidateQueries(["tickets"]);
    props.onClose();
  }

  return (
    <Modal show={props.show} onClose={() => console.log("closing...")}>
      <div className="w-full flex flex-col">
        <div className="w-full py-md bg-primary text-primary-light flex items-center justify-around rounded-t-lg">
          <p>{props.data.fullName}</p>
          <p>{props.data.phoneNumber}</p>
        </div>
        <div className="w-full bg-primary-light text-primary-dark p-sm">
          <InfoBody
            description={props.data.description}
            onClose={props.onClose}
            onResolve={() => deleteTicket.mutate({})}
          />
        </div>
      </div>
    </Modal>
  );
};

interface BodyProps {
  description: string;
  onClose: () => void;
  onResolve: () => void;
}

const InfoBody: FC<BodyProps> = (props) => (
  <div className="h-full w-full flex flex-col items-center py-sm">
    <p className="py-sm">{props.description}</p>
    <div className="flex flex-row w-full justify-around pt-md">
      <Button
        onClick={props.onResolve}
        className="w-36 md:w-64 btn-primary-theme"
      >
        رسیدگی شد
      </Button>
      <Button onClick={props.onClose} className="w-36 md:w-64 btn-cancel">
        انصراف
      </Button>
    </div>
  </div>
);

export default AuditModal;
