import { FC } from "react";
import Modal from "src/components/ui/Modal";
import { DeleteModalProps } from "./types";
import Button from "src/components/ui/Button";

const DeleteModal: FC<DeleteModalProps> = (props) => {
  const { id, level, title } = props.term;
  return (
    <Modal show={props.show} onClose={props.onClose}>
      <div className="w-full flex flex-col space-y-sm">
        <p>آیا از حذف</p>
        <p>{title}</p>
        <p>مطمین هستید؟</p>
        <div className="flex flex-row justify-around">
          <Button>تایید</Button>
          <Button>انصراف</Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
