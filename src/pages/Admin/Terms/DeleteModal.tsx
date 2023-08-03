import { FC, useCallback } from "react";
import Modal from "src/components/ui/Modal";
import { DeleteModalProps } from "./types";
import Button from "src/components/ui/Button";
import classNames from "classnames";
import { getLevelTitle } from "./utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "src/services";
import { BASE_TERM_URL } from "./api.data";

const DeleteModal: FC<DeleteModalProps> = (props) => {
  const { id, level, title } = props.term;

  const queryClient = useQueryClient();
  const deleteTerm = useMutation(api.delete(`${BASE_TERM_URL}/${id}`));

  if (deleteTerm.isError || deleteTerm.isLoading)
    console.log("error deleting!");
  if (deleteTerm.isSuccess) {
    deleteTerm.reset();
    queryClient.invalidateQueries({queryKey: ["admin-context"]});
    props.onClose();
  }

  return (
    <Modal show={props.show} onClose={props.onClose}>
      <div
        className={classNames(
          "w-full flex flex-col space-y-sm items-center",
          "bg-primary-light text-primary-dark py-md",
          "rounded-md"
        )}
      >
        <p>آیا از حذف</p>
        <p className="text-xl">{`${title} (${getLevelTitle(level)})`}</p>
        <p>اطمینان دارید؟</p>
        <div className="flex flex-row w-full justify-around pt-md">
          <Button
            onClick={async () => {
              await deleteTerm.mutate({});
            }}
            className="w-36 md:w-64 btn-primary-theme"
          >
            تایید
          </Button>
          <Button onClick={props.onClose} className="w-36 md:w-64 btn-cancel">
            انصراف
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
