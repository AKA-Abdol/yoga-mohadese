import { FC } from "react";
import Modal from "src/components/ui/Modal";
import { AuditModalProps } from "./types";
import Button from "src/components/ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "src/services";
import { TICKET_URL } from "src/pages/TicketForm/api";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "src/components/ui/Input";
import { TICKET_PASSWORD_RESOLVE_URL } from "../api";

const AuditModal: FC<AuditModalProps> = (props) => {
  const queryClient = useQueryClient();
  const deleteTicket = useMutation(
    api.delete(`${TICKET_URL}/${props.data.id}`)
  );

  if (deleteTicket.isSuccess) {
    deleteTicket.reset();
    queryClient.invalidateQueries({ queryKey: ["tickets"] });
    props.onClose();
  }

  console.log("THIS IS AUDIT MODAL BIAAAAAAAAAAAAAATCH", props.data);

  return (
    <Modal show={props.show} onClose={props.onClose}>
      <div className="w-full flex flex-col">
        <div className="w-full py-md bg-primary text-brown flex flex-wrap items-center justify-around rounded-t-lg">
          <p>{props.data.fullName}</p>
          <p>{props.data.username}</p>
          <p>{props.data.phoneNumber}</p>
        </div>
        <div className="w-full bg-primary-light text-brown p-sm">
          {props.data.type === "forget-password" ? (
            <PasswordResolveBody
              ticketId={props.data.id}
              description={props.data.description}
              onClose={props.onClose}
            />
          ) : (
            <InfoBody
              description={props.data.description}
              onClose={props.onClose}
              onResolve={() => deleteTicket.mutate({})}
            />
          )}
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

interface PasswordResolveBodyProps {
  description: string;
  onClose: () => void;
  ticketId: string;
}

interface IApiResolveTicket {
  ticket_id: string;
  new_password: string;
}
interface IResolveForm {
  password: string;
}

const PasswordResolveBody: FC<PasswordResolveBodyProps> = (props) => {
  const queryClient = useQueryClient();
  const formik = useFormik({
    initialValues: { password: "" },
    onSubmit: (values) => {
      if (values.password) password.mutate(values);
      else deleteTicket.mutate({});
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().min(8, "حداقل ۸ کاراکتر"),
    }),
    validateOnChange: false,
  });
  const password = useMutation(
    api.post(
      TICKET_PASSWORD_RESOLVE_URL,
      (value: IResolveForm): IApiResolveTicket => ({
        new_password: value.password,
        ticket_id: props.ticketId,
      })
    )
  );
  const deleteTicket = useMutation(
    api.delete(`${TICKET_URL}/${props.ticketId}`)
  );

  if (password.isSuccess) {
    password.reset();
    queryClient.invalidateQueries({ queryKey: ["tickets"] });
    props.onClose();
  }

  if (deleteTicket.isSuccess) {
    deleteTicket.reset();
    queryClient.invalidateQueries({ queryKey: ["tickets"] });
    props.onClose();
  }

  return (
    <div className="h-full w-full flex flex-col items-center py-sm">
      <p className="py-sm ">{props.description}</p>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <Input
          name="password"
          id="password"
          onChange={formik.handleChange}
          placeholder="رمز عبور جدید"
          value={formik.values.password}
          error={formik.errors.password}
          className="text-center border border-emerald-950"
        />
        <div className="flex flex-row w-full justify-around pt-md">
          <Button type="submit" className="w-36 md:w-64 btn-primary-theme">
            رسیدگی شد
          </Button>
          <Button
            type="button"
            onClick={props.onClose}
            className="w-36 md:w-64 btn-cancel"
          >
            انصراف
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AuditModal;
