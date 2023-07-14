import { FC } from "react";
import DeleteBtn from "../../assets/images/cancel-btn.png";
import { DeleteButtonProps } from "@/types/components/ui";

const DeleteButton: FC<DeleteButtonProps> = (props) => {
  return (
    <button
      className={`h-full w-full object-contain ${props.classnames}`}
      onClick={props.onClick}
    >
      <img
        src={DeleteBtn}
        alt="edit"
        className={`h-full w-full object-contain`}
      />
    </button>
  );
};

export default DeleteButton;
