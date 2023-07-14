import { FC } from "react";
import EditIcon from "../../../assets/images/edit-icon.png";
import { EditButtonProps } from "./types";
const EditButton: FC<EditButtonProps> = (props) => {
  return (
    <button
      className={`h-full w-full object-contain ${props.classnames}`}
      onClick={props.onClick}
    >
      <img
        src={EditIcon}
        alt="edit"
        className={`h-full w-full object-contain`}
      />
    </button>
  );
};

export default EditButton;
