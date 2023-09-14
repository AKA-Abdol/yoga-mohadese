import { FC, useState } from "react";
import Modal from "src/components/ui/Modal";
import { UserInfoModalProps } from "./UserInfoModal.types";
import TextArea from "src/components/ui/TextArea";
import useDebounce from "src/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import api from "src/services";

const UserInfoModal: FC<UserInfoModalProps> = (props) => {
  const [note, setNote] = useState("");
  // const {} = useQuery({
  //   queryKey: ["note", props.userId],
  //   queryFn: api.get()
  // })
  // useDebounce( )
  return (
    <Modal show={props.show} onClose={props.onClose}>
      <div className="w-full flex flex-col">
        <div className="w-full py-md bg-primary text-primary-light flex items-center justify-around rounded-t-lg">
          <p>{props.fullName}</p>
        </div>
        <div className="w-full bg-primary-light text-primary-dark p-sm">
          <TextArea
            onChange={(e) => console.log(e.target.value)}
            name="note"
            placeholder="یادداشت"
            value="یه چیزی به عنوان یادداشت"
          />
        </div>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
